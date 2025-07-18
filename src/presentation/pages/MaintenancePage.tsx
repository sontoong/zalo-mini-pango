import React, { useState } from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/icons/arrow-left.png";
import { Segmented, SegmentedProps } from "antd";
import {
  MaintenancePageServicesTab,
  MaintenancePageTrackingTab,
} from "../components/MaintenacePage";
import { useSearchParams } from "react-router-dom";
import { CallSupport } from "../components/support";

const MaintenancePage = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "buy";

  const [currentTab, setCurrentTab] = useState<string>(tab);

  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-90px)] justify-between">
              <div>Bảo dưỡng</div>
              <CallSupport />
            </div>
          ) as unknown as string
        }
        className="topbar h-auto flex-none"
        backIcon={
          <div className="absolute inset-1/2 flex size-[16px] -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full">
            <img src={ArrowLeftIcon} className="size-full object-cover" />
          </div>
        }
      />

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
      <div className="flex-1 overflow-auto bg-[#F8F8F8] hide-scrollbar">
        {tabs[currentTab]}
      </div>
    </Page>
  );
};

export default MaintenancePage;

const tabOptions: SegmentedProps<string>["options"] = [
  { label: "Bảo dưỡng", value: "buy" },
  {
    label: "Theo dõi tiến độ",
    value: "tracking",
  },
];

const tabs = {
  buy: <MaintenancePageServicesTab />,
  tracking: <MaintenancePageTrackingTab />,
};
