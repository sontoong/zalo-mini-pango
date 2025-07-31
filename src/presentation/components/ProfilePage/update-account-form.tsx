import React, { useState } from "react";
import { Form } from "../common/form";
import { UploadImage } from "../common/image-upload";
import { ProfileImageUpload } from "./profile-image-upload";
import { DatePicker, Input } from "antd";
import CalendarIcon from "../../static/icons/calendar-icon-green.png";
import { Button } from "../common/button";

const InformationForm = () => {
  const [form] = Form.useForm();
  const [images, setImages] = useState<UploadImage[]>([]);

  const initialValues = {
    phone: "0394358495",
  };

  return (
    <Form form={form} initialValues={initialValues}>
      <div className="flex flex-col gap-[24px]">
        <div>
          {/* Profile image */}
          <div className="flex items-center justify-center">
            <ProfileImageUpload images={images} setImages={setImages} />
          </div>
          {/* Other information */}
          <div className="flex flex-col gap-[12px]">
            <Form.Item
              label="Họ tên"
              name="name"
              required
              labelCol={{ style: { padding: 0, fontSize: 12 } }}
              style={{ marginBottom: 0 }}
            >
              <Input
                placeholder="Nhập họ tên"
                className="h-[50px] rounded-[8px]"
              />
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
              name="phone"
              required
              labelCol={{ style: { padding: 0, fontSize: 12 } }}
              style={{ marginBottom: 0 }}
            >
              <Input
                placeholder="0394358495"
                className="h-[50px] rounded-[8px]"
                disabled
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              required
              labelCol={{ style: { padding: 0, fontSize: 12 } }}
              style={{ marginBottom: 0 }}
            >
              <Input
                placeholder="Nhập địa chỉ email"
                className="h-[50px] rounded-[8px]"
              />
            </Form.Item>
            <Form.Item
              name="date"
              label={
                <div className="text-sm font-medium text-gray7">Ngày sinh</div>
              }
              labelCol={{ style: { padding: 0, fontSize: 12 } }}
              style={{ marginBottom: 0 }}
              className="m-0"
            >
              <DatePicker
                placeholder="DD/MM/YYYY"
                className="h-[45px] w-full"
                format="DD/MM/YYYY"
                suffixIcon={<img src={CalendarIcon} className="]" />}
                placement="bottomLeft"
                allowClear={false}
              />
            </Form.Item>
            <Form.Item
              label="Địa chỉ"
              name="email"
              required
              labelCol={{ style: { padding: 0, fontSize: 12 } }}
              style={{ marginBottom: 0 }}
            >
              <Input
                placeholder="Nhập địa chỉ"
                className="h-[50px] rounded-[8px]"
              />
            </Form.Item>
          </div>
        </div>
        {/* Submit button */}
        <Button
          text={
            <div className="text-lg font-medium text-white">Lưu thay đổi</div>
          }
          className="flex h-[50px] flex-none items-center justify-center rounded-[12px] bg-green6"
        />
      </div>
    </Form>
  );
};

export default InformationForm;
