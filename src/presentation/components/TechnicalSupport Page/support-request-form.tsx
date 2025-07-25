import React, { useState } from "react";
import { Form } from "../common/form";
import { Input, UploadFile } from "antd";
import { Radio } from "../common/radio";
import { ImageUpload, UploadImage } from "../common/image-upload";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";

const SupportRequestForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [images, setImages] = useState<UploadImage[]>([]);

  return (
    <div className="flex flex-col gap-[14px] pb-[100px]">
      {/* Head */}
      <div className="flex flex-col gap-[8px]">
        <div className="text-xl font-semibold leading-[120%]">
          Anh/chị cần hỗ trợ kỹ thuật?
        </div>
        <div className="text-xs font-normal leading-[120%] text-gray7">
          Mời anh /chị gửi thông tin để TMC có thể hỗ trợ tốt hơn
        </div>
      </div>
      {/* Form */}
      <Form form={form}>
        <div className="flex flex-col gap-[24px]">
          {/* Description */}
          <Form.Item
            name="description"
            label="Nhập nội dung cần hỗ trợ"
            required
            labelCol={{ style: { fontSize: "12px", padding: 0 } }}
            style={{ margin: 0 }}
          >
            <Input.TextArea
              className="rounded-[8px] text-xs font-normal"
              autoSize={{ minRows: 4 }}
            />
          </Form.Item>
          {/* Product type  */}
          <Form.Item
            name="productType"
            label="Chọn mặt hàng cần hỗ trợ"
            required
            labelCol={{ style: { fontSize: "12px", padding: 0 } }}
            style={{ margin: 0 }}
          >
            <Radio.ButtonGroup
              items={products}
              render={(item) => (
                <div className="flex h-[30px] items-center justify-center rounded-[8px] border border-gray2 bg-white">
                  <span className="text-xs font-medium leading-[120%]">
                    {item?.name}
                  </span>
                </div>
              )}
              activeRender={(item) => (
                <div className="flex h-[30px] items-center justify-center rounded-[8px] border-[1.5px] border-purple5 bg-purple1">
                  <span className="text-xs font-medium leading-[120%] text-purple7">
                    {item?.name}
                  </span>
                </div>
              )}
              className="grid grid-cols-3 gap-[8px]"
              multiple
            />
          </Form.Item>
          {/* Image */}
          <Form.Item
            label="Ảnh/ video sản phẩm"
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
      {/* Submit button */}
      <div
        className="fixed inset-x-0 bottom-0 z-10 bg-white px-[16px] pb-[24px] pt-[12px]"
        style={{ boxShadow: "0px -4px 24px 0px #A6A6A614" }}
      >
        <Button
          text={
            <div className="text-lg font-medium text-white">Gửi yêu cầu</div>
          }
          className="flex h-[50px] w-full items-center justify-center rounded-[12px] bg-green6"
          onClick={() => navigate("/technical-support/success")}
        />
      </div>
    </div>
  );
};

export default SupportRequestForm;

const products = [
  { name: "Máy lạnh", value: "1" },
  { name: "Tủ lạnh", value: "2" },
  { name: "Tivi", value: "3" },
  { name: "Máy giặt", value: "4" },
  { name: "Lò vi sóng", value: "5" },
  { name: "Máy nóng lạnh", value: "6" },
  { name: "Máy lạnh", value: "7" },
  { name: "Tủ lạnh", value: "8" },
  { name: "Tivi", value: "9" },
];
