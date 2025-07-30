import { Divider, FormInstance, Input } from "antd";
import React, { FC, useState } from "react";
import { Form } from "../common/form";
import ProductImage from "../../static/service.png";
import { Radio } from "../common/radio";
import { ImageUpload, UploadImage } from "../common/image-upload";

export const WarrantySignUpForm: FC<Props> = ({ form }) => {
  const [images, setImages] = useState<UploadImage[]>([]);

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col items-center gap-[8px] rounded-[12px] border border-gray1 bg-surface1 px-[20px] py-[16px]">
        <div className="text-base font-semibold">Máy lạnh Toshiba 2024</div>
        <img src={ProductImage} alt="" className="h-[50px] object-contain" />
        <div className="flex w-full items-center justify-between">
          <div className="text-xs font-medium text-gray6">Số seri</div>
          <div className="text-sm font-medium">1232434</div>
        </div>
        <Divider className="m-0" />
        <div className="flex w-full items-center justify-between">
          <div className="text-xs font-medium text-gray6">Model</div>
          <div className="text-sm font-medium">AE-32434</div>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[8px]">
          <div className="text-xl font-semibold">Đăng ký bảo hành</div>
          <div className="text-xs font-normal text-gray7">
            Nhập thông tin để hoàn thành đăng ký
          </div>
        </div>
        <Form form={form} name="warrantySignUpForm">
          <div className="flex flex-col gap-[12px]">
            <Form.Item
              name="name"
              label="Tên bạn"
              required
              labelCol={{ style: { fontSize: "12px", padding: 0 } }}
              style={{ margin: 0 }}
            >
              <Input className="h-[40px]" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Số điện thoại"
              required
              labelCol={{ style: { fontSize: "12px", padding: 0 } }}
              style={{ margin: 0 }}
            >
              <Input className="h-[40px]" />
            </Form.Item>
            <Form.Item
              name="location"
              label="Bạn mua ở đâu?"
              required
              labelCol={{ style: { fontSize: "12px", padding: 0 } }}
              style={{ margin: 0 }}
            >
              <Radio.Group
                items={buyLocation}
                render={(item) => (
                  <div className="text-sm font-normal">{item?.name}</div>
                )}
                className="flex flex-col gap-[12px]"
              />
            </Form.Item>
            <Form.Item
              label="Ảnh hóa đơn"
              required
              labelCol={{ style: { fontSize: "12px", padding: 0 } }}
              style={{ margin: 0 }}
            >
              <ImageUpload
                images={images}
                setImages={setImages}
                maxCount={9}
                className={"customSizedUpload"}
              />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

type Props = {
  form: FormInstance;
};

const buyLocation = [
  {
    name: "Trực tiếp từ thương hiệu",
    value: "1",
  },
  {
    name: "Tại Điện máy chợ lớn",
    value: "2",
  },
  {
    name: "Tại Điện máy xanh",
    value: "3",
  },
  {
    name: "Trực tiếp từ thương hiệu",
    value: "4",
  },
];
