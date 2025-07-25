import React from "react";
import { Tabs } from "../common/tabs";
import { TabsProps } from "antd";
import { SearchBar } from "../common/search-bar";
import { HistoryList } from "./history-list";

const HistoryTabs = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <SearchBar
        placeholder="Tìm sản phẩm/ số seri sản phẩm"
        className="h-[44px]"
      />
      <Tabs
        items={items}
        centered
        className="custom-tabs"
        selectColor="#4CBA81"
      />
    </div>
  );
};

export default HistoryTabs;

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
