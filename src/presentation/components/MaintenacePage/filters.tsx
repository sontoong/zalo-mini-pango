import React, { FC } from "react";
import { SearchBar } from "../common/search-bar";
import { FilterServiceList } from "./filter-services";
import { Form } from "../common/form";
import clsx from "clsx";
import { Segmented, SegmentedProps } from "antd";

const Filters: FC<Props> = ({
  handleHideOnSearch,
  searched,
  scrollY,
  currentTab,
  setCurrentTab,
}) => {
  const [form] = Form.useForm();
  const showSearchFloat = scrollY > 100;

  const initialValues = {
    search: "",
  };

  const handleFormFinish = (e: any) => {
    handleHideOnSearch(true);
  };

  return (
    <>
      <div
        className={clsx(
          "fixed inset-x-0 !z-[999] hidden bg-white px-[16px] py-[12px]",
          {
            "!block": showSearchFloat,
            "pointer-events-none": !showSearchFloat,
          },
        )}
        style={{
          boxShadow: "0px 4px 40px 0px #AEB5AF1F",
        }}
      >
        <Form
          form={form}
          onFinish={handleFormFinish}
          initialValues={initialValues}
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
      </div>
      <>
        <div className="bg-white px-[10px] pb-[12px] pt-[10px]">
          <Segmented
            options={tabOptions}
            onChange={(value) => {
              setCurrentTab(value);
            }}
            value={currentTab}
            height={32}
            block
          />
        </div>
        <div
          className="flex flex-col bg-white px-[16px]"
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
      </>
    </>
  );
};

export default Filters;

type Props = {
  searched: boolean;
  handleHideOnSearch: any;
  scrollY: number;
  currentTab: string;
  setCurrentTab: any;
};

const options = [
  { label: "Tủ lạnh Toshiba", value: "Tủ lạnh Toshiba" },
  { label: "Tủ lạnh Inverted", value: "Tủ lạnh Inverted" },
  { label: "Tủ lạnh 2 cánh", value: "Tủ lạnh 2 cánh" },
];

const tabOptions: SegmentedProps<string>["options"] = [
  { label: "Bảo dưỡng", value: "buy" },
  {
    label: "Theo dõi tiến độ",
    value: "tracking",
  },
];
