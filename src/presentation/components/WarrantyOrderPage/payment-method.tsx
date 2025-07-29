import { FormInstance } from "antd";
import React, { FC } from "react";
import { Radio } from "../common/radio";
import { Form } from "../common/form";

export const PaymentMethodForm: FC<Props> = ({ form }) => {
  return (
    <Form form={form}>
      <div className="flex flex-col gap-[12px] px-[16px]">
        <div className="text-xl font-semibold">Phương thức thanh toán</div>
        <Form.Item name="paymentMethod" noStyle>
          <Radio.Group
            items={items}
            render={(method) => (
              <div className="text-sm font-normal">{method?.label}</div>
            )}
            className="flex flex-col gap-[12px]"
          />
        </Form.Item>
      </div>
    </Form>
  );
};

type Props = {
  form: FormInstance;
};

const items = [
  {
    label: "Thanh toán online",
    value: "online",
  },
  {
    label: "Thanh toán COD - TIền mặt",
    value: "offline",
  },
];
