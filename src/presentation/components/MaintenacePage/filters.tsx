import React, { FC } from "react";
import { SearchBar } from "../common/search-bar";
import { FilterServiceList } from "./filter-services";
import { Form } from "../common/form";

const Filters: FC<Props> = ({ handleHideOnSearch, searched }) => {
  const [form] = Form.useForm();

  const initialValues = {
    search: "",
  };

  const handleFormFinish = (e: any) => {
    handleHideOnSearch(true);
  };

  return (
    <div
      className="sticky inset-x-0 top-0 z-[10] flex flex-col bg-white px-[16px]"
      style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
    >
      <Form
        form={form}
        onFinish={handleFormFinish}
        initialValues={initialValues}
        className="pb-[12px]"
      >
        <Form.Item name="search" noStyle>
          <SearchBar
            placeholder="Tìm dịch vụ, sản phẩm"
            className="h-[44px]"
            options={options}
            onSelect={() => form.submit()}
            onClear={() => handleHideOnSearch(false)}
          />
        </Form.Item>
      </Form>
      {!searched ? <FilterServiceList /> : null}
    </div>
  );
};

export default Filters;

type Props = {
  searched: boolean;
  handleHideOnSearch: any;
};

const options = [
  { label: "Tủ lạnh Toshiba", value: "Tủ lạnh Toshiba" },
  { label: "Tủ lạnh Inverted", value: "Tủ lạnh Inverted" },
  { label: "Tủ lạnh 2 cánh", value: "Tủ lạnh 2 cánha" },
];
