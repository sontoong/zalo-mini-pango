import { UploadFile } from "antd";
import React, { FC } from "react";
import { ImageUpload, UploadImage } from "../common/image-upload";
import EditIcon from "../../static/icons/edit-icon.png";
import AddImageIcon from "../../static/icons/gallery-add.png";

export const ProfileImageUpload: FC<Props> = ({ images, setImages }) => {
  const customItemRender = (
    originNode: React.ReactElement,
    file: UploadFile,
    fileList: UploadFile[],
    actions: { download: () => void; preview: () => void; remove: () => void },
  ) => {
    const imageUrl = file.url || file.preview || "";

    return (
      <div className="relative">
        <div
          className="size-[80px] overflow-hidden rounded-full border-[2px] border-white"
          onClick={actions.preview}
          style={{ boxShadow: " 0px 8px 13.33px 0px #89878733" }}
        >
          <img src={imageUrl} className="size-full object-cover" />
        </div>

        {/* Add image button */}
        <div
          className="absolute bottom-2 right-6 z-10 size-[34px] translate-x-1/2 translate-y-1/2 rounded-full bg-white p-[7px]"
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
    <ImageUpload
      images={images}
      setImages={setImages}
      itemRender={customItemRender}
      uploadButton={
        <div className="flex flex-col items-center gap-[8px] px-[12px]">
          <img src={AddImageIcon} className="size-[28px] object-cover" />
          <div className="text-center text-xs font-normal text-purple4">
            Tải hoặc chụp ảnh
          </div>
        </div>
      }
    />
  );
};

type Props = {
  images: UploadImage[];
  setImages: (images: UploadFile[]) => void;
};
