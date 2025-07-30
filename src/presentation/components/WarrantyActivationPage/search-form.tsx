import { FormInstance, Input } from "antd";
import React, { FC } from "react";
import { Form } from "../common/form";
import ScanIcon from "../../static/icons/scan-icon-green.png";

export const SearchForm: FC<Props> = ({ form }) => {
  return (
    <div className="flex flex-col gap-[14px]">
      <div className="flex flex-col gap-[8px]">
        <div className="text-xl font-semibold">Tra cứu bảo hành</div>
        <div className="text-xs font-normal text-gray7">
          Vui lòng điền các thông tin dưới đây để tra cứu bảo hành điện tử bạn
          nhé!
        </div>
      </div>
      <Form form={form} name="searchForm">
        <Form.Item
          label="Nhập seri sản phẩm hoặc quét mã"
          name="id"
          required
          labelCol={{ style: { fontSize: "12px", padding: 0 } }}
          style={{ margin: 0 }}
        >
          <Input
            placeholder="Nhập seri sản phẩm để tra cứu"
            className="h-[50px]"
            suffix={<img src={ScanIcon} className="size-[24px]" />}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

type Props = {
  form: FormInstance;
};
