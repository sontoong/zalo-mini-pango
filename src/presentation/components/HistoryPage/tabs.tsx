import React, { FC } from "react";
import { Tabs } from "../common/tabs";
import { TabsProps } from "antd";
import { SearchBarNoPopup } from "../common/search-bar";
import { HistoryList } from "./history-list";
import { Form } from "../common/form";
import clsx from "clsx";

const HistoryTabs: FC<Props> = ({ scrollY }) => {
  const [form] = Form.useForm();
  const showSearchFloat = scrollY > 100;

  const initialValues = {
    search: "",
  };

  const handleFormFinish = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <div
        className={clsx(
          "fixed inset-x-0 !z-[999] hidden bg-white px-[16px] py-[10px]",
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
            <SearchBarNoPopup
              placeholder="Tìm dịch vụ, sản phẩm"
              className="h-[44px]"
            />
          </Form.Item>
        </Form>
      </div>
      <div className="flex flex-col gap-[8px] p-[16px]">
        <Form.Item name="search" noStyle>
          <SearchBarNoPopup
            placeholder="Tìm dịch vụ, sản phẩm"
            className="h-[44px]"
          />
        </Form.Item>
        <Tabs
          items={items}
          centered
          className="custom-tabs"
          selectColor="#4CBA81"
        />
      </div>
    </>
  );
};

export default HistoryTabs;

type Props = {
  scrollY: number;
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <div className="text-sm font-medium">Tất cả</div>,
    children: <HistoryList showTypeFilter={false} />,
  },
  {
    key: "2",
    label: <div className="text-sm font-medium">Bảo hành</div>,
    children: <HistoryList showTypeFilter={true} />,
  },
  {
    key: "3",
    label: <div className="text-sm font-medium">Bảo dưỡng</div>,
    children: <HistoryList showTypeFilter={true} />,
  },
  {
    key: "4",
    label: <div className="text-sm font-medium">Mua hàng</div>,
    children: <HistoryList showTypeFilter={true} />,
  },
];
