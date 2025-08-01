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
import { useScrollPosition } from "../hooks/useScrollPosition";

const MaintenancePage = () => {
  const [searchParams] = useSearchParams();
  const { scrollY } = useScrollPosition(".maintenancepage-scroll-container");
  const tab = searchParams.get("tab") || "buy";

  const [currentTab, setCurrentTab] = useState<string>(tab);

  const tabs = {
    buy: (
      <MaintenancePageServicesTab
        scrollY={scrollY}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    ),
    tracking: (
      <MaintenancePageTrackingTab
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    ),
  };

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
      <div className="maintenancepage-scroll-container flex-1 overflow-auto bg-[#F8F8F8] hide-scrollbar">
        {tabs[currentTab]}
      </div>
    </Page>
  );
};

export default MaintenancePage;
