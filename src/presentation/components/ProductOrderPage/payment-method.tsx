import { CollapseProps, FormInstance } from "antd";
import React, { FC } from "react";
import { Radio } from "../common/radio";
import { Form } from "../common/form";
import { Collapse } from "../common/collapse";

export const PaymentMethodForm: FC<Props> = ({ form }) => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex flex-col gap-[8px]">
          <div className="text-lg font-semibold">Phương thức thanh toán</div>
        </div>
      ),
      children: (
        <Form form={form}>
          <div className="flex flex-col gap-[12px]">
            <Form.Item name="paymentMethod" noStyle>
              <Radio.Group
                items={radioItems}
                render={(method) => (
                  <div className="text-sm font-normal">{method?.label}</div>
                )}
                className="flex flex-col gap-[12px]"
              />
            </Form.Item>
          </div>
        </Form>
      ),
      styles: {
        header: {
          alignItems: "center",
          padding: 0,
        },
        body: {
          padding: 0,
          paddingTop: "8px",
        },
      },
      className: "bg-white p-[12px]",
    },
  ];

  return (
    <Collapse
      items={items}
      bordered={false}
      expandIconPosition="end"
      className="overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
      defaultActiveKey={1}
    />
  );
};

type Props = {
  form: FormInstance;
};

const radioItems = [
  {
    label: "Thanh toán online",
    value: "online",
  },
  {
    label: "Thanh toán COD - TIền mặt",
    value: "offline",
  },
];
