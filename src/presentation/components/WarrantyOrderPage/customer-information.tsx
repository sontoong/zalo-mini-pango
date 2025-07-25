import { FormInstance, Input } from "antd";
import React, { FC } from "react";
import { Form } from "../common/form";

export const CustomerInformationForm: FC<Props> = ({ form }) => {
  return (
    <div className="flex flex-col gap-[12px] px-[16px]">
      <div className="text-xl font-semibold">Thông tin khách hàng</div>
      <Form form={form}>
        <Form.Item
          name="name"
          label="Tên bạn"
          required
          labelCol={{ style: { fontSize: "12px", padding: 0 } }}
          style={{ margin: 0 }}
        >
          <Input className="h-[40px] rounded-[8px]" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Số điện thoại"
          required
          labelCol={{ style: { fontSize: "12px", padding: 0 } }}
          style={{ margin: 0 }}
        >
          <Input className="h-[40px] rounded-[8px]" />
        </Form.Item>
      </Form>
    </div>
  );
};

type Props = {
  form: FormInstance;
};
