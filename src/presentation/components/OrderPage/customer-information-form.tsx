import { CollapseProps, Divider, FormInstance, Input } from "antd";
import React, { FC, useState } from "react";
import { Collapse } from "../common/collapse";
import LocationIcon from "../../static/icons/location-icon-red.png";
import { Form } from "../common/form";

export const CustomerInformationForm: FC<Props> = ({ form }) => {
  const [open, setOpen] = useState<boolean>(false);

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex flex-col gap-[8px]">
          <div className="text-lg font-semibold">Thông tin khách hàng</div>
          {!open ? (
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[4px]">
                <img src={LocationIcon} className="size-[20px] object-cover" />
                <span className="text-base font-medium">Thu Hồng</span>
                <span className="text-sm font-normal text-gray6">
                  (039408545)
                </span>
              </div>
              <div className="text-sm font-medium text-gray6">
                123 Lý Thường Kiệt, quận 10, TP.Hồ Chí Minh
              </div>
            </div>
          ) : null}
        </div>
      ),
      children: (
        <Form form={form} className="flex flex-col gap-[8px]">
          <Form.Item
            name="name"
            label="Tên"
            required
            labelCol={{ style: { fontSize: "12px", padding: 0 } }}
            style={{ margin: 0 }}
          >
            <Input className="h-[40px] rounded-[8px] text-xs font-normal" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Số điện thoại"
            required
            labelCol={{ style: { fontSize: "12px", padding: 0 } }}
            style={{ margin: 0 }}
          >
            <Input className="h-[40px] rounded-[8px] text-xs font-normal" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            required
            labelCol={{ style: { fontSize: "12px", padding: 0 } }}
            style={{ margin: 0 }}
          >
            <Input className="h-[40px] rounded-[8px] text-xs font-normal" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Địa chỉ"
            required
            labelCol={{ style: { fontSize: "12px", padding: 0 } }}
            style={{ margin: 0 }}
          >
            <Input className="h-[40px] rounded-[8px] text-xs font-normal" />
          </Form.Item>
        </Form>
      ),
      styles: {
        header: {
          alignItems: "start",
          padding: 0,
        },
        body: {
          padding: 0,
        },
      },
      className: "bg-white p-[12px]",
      forceRender: true,
    },
  ];

  return (
    <Collapse
      items={items}
      bordered={false}
      expandIconPosition="end"
      className="overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
      onChange={() => setOpen((prev) => !prev)}
    />
  );
};

type Props = {
  form: FormInstance;
};
