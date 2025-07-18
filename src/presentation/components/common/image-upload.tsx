import {
  App,
  GetProp,
  UploadFile,
  UploadProps as OriginalUploadProps,
} from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Modal, Upload } from "antd";
import { RequiredFields } from "../../utils/types";
import { v4 as uuidv4 } from "uuid";
import ImageIcon from "../../static/icons/image-icon.svg";
import EditIcon from "../../static/icons/edit-icon-blue.png";

function ImageUpload(props: UploadImageProps) {
  const { message } = App.useApp();
  const { images, setImages, maxCount = 1 } = props;

  const imagesWithUid = useMemo(
    () =>
      images.map((image) => {
        return {
          ...image,
          uid: image.uid ?? uuidv4(),
        };
      }),
    [images],
  );

  const onChange: OriginalUploadProps["onChange"] = ({ fileList }) => {
    setImages(fileList);
  };

  const uploadConditions = (file: FileType) => {
    if (file.type != "image/jpeg" && file.type != "image/png") {
      message.error("You can only upload JPG/PNG file!");
      return false;
    }
    if (!file.size || file.size / 1024 / 1024 > 2) {
      message.error("Image size must be smaller than 2MB!");
      return false;
    }
    return true;
  };

  return (
    <UploadImg
      fileListLength={images.length}
      listType="picture-card"
      maxCount={maxCount}
      fileList={imagesWithUid}
      onChange={onChange}
      uploadConditions={uploadConditions}
      {...props}
    />
  );
}

function UploadImg(props: UploadProps) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileImageMap, setFileImageMap] = useState<Record<string, string>>({});

  // Store images when list updates
  useEffect(() => {
    const processFiles = async () => {
      const newImageMap: Record<string, string> = {};

      for (const file of props.fileList || []) {
        const fileKey = file.uid || file.name || "";

        if (file.url) {
          newImageMap[fileKey] = file.url;
        } else if (file.originFileObj && !file.preview) {
          try {
            const base64 = await getBase64(file.originFileObj as FileType);
            file.preview = base64;
            newImageMap[fileKey] = base64;
          } catch (error) {
            console.error("Error processing file:", error);
          }
        } else if (file.preview) {
          newImageMap[fileKey] = file.preview;
        }
      }

      setFileImageMap(newImageMap);
    };

    if (props.fileList && props.fileList.length > 0) {
      processFiles();
    }
  }, [props.fileList]);

  const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const beforeUpload = (file: FileType) => {
    if (props.uploadConditions && !props.uploadConditions(file)) {
      return Upload.LIST_IGNORE;
    }
    return false;
  };

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    const fileKey = file.uid || file.name || "";
    let imageUrl = fileImageMap[fileKey];

    if (!imageUrl) {
      if (file.url) {
        imageUrl = file.url;
      } else if (file.originFileObj) {
        try {
          imageUrl = await getBase64(file.originFileObj as FileType);
          file.preview = imageUrl;
        } catch (error) {
          console.error("Error processing file for preview:", error);
          return;
        }
      } else if (file.preview) {
        imageUrl = file.preview;
      }
    }

    setPreviewImage(imageUrl || "");
    setPreviewOpen(true);
    setPreviewTitle(
      file.name ||
        file.url!.substring(file.url!.lastIndexOf("/") + 1).split("?")[0],
    );
  };

  const customItemRender = (
    originNode: React.ReactElement,
    file: UploadFile,
    fileList: UploadFile[],
    actions: { download: () => void; preview: () => void; remove: () => void },
  ) => {
    const fileKey = file.uid || file.name || "";
    const imageUrl = fileImageMap[fileKey] || file.url || file.preview || "";

    return (
      <div className="relative">
        <div
          className="size-[80px] overflow-hidden rounded-full"
          onClick={actions.preview}
        >
          <img src={imageUrl} className="size-full object-cover" />
        </div>

        {/* Add image button */}
        <div
          className="absolute bottom-3 right-3 z-10 size-[34px] translate-x-1/2 translate-y-1/2 rounded-full bg-white p-[7px]"
          style={{ boxShadow: "0px 6.43px 17.14px 0px #0000001A" }}
          onClick={(e) => {
            e.stopPropagation();
            const fileInput = document.querySelector(
              '.ant-upload input[type="file"]',
            ) as HTMLInputElement;
            if (fileInput) {
              fileInput.click();
            }
          }}
        >
          <img src={EditIcon} alt="" className="size-full object-cover" />
        </div>
      </div>
    );
  };

  return (
    <>
      <Upload
        onPreview={handlePreview}
        beforeUpload={beforeUpload}
        accept="image/png, image/jpeg"
        multiple
        itemRender={props.itemRender || customItemRender}
        {...props}
      >
        {props.fileListLength < props.maxCount ? (
          <div style={{ border: 0, background: "none" }}>
            <img src={ImageIcon} />
          </div>
        ) : null}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
}

type FileType = Parameters<GetProp<OriginalUploadProps, "beforeUpload">>[0];
export type UploadImage = Omit<UploadFile, "uid">;

type UploadProps = RequiredFields<
  Omit<OriginalUploadProps, "beforeUpload" | "onPreview" | "accept">,
  "listType" | "maxCount"
> & {
  uploadConditions?: (file: FileType) => boolean;
  fileListLength: number;
};

type UploadImageProps = {
  images: UploadImage[] | UploadFile[];
  setImages: React.Dispatch<React.SetStateAction<UploadImage[]>>;
  maxCount?: OriginalUploadProps["maxCount"];
} & OriginalUploadProps;

export { ImageUpload };
