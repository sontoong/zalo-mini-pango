import React from "react";
import ArrowLeftIcon from "../static/icons/arrow-left.png";
import { Header, Page } from "zmp-ui";
import { MaintenanceTrackingPageMaintenanceDetails } from "../components/TrackingDetailsPage";
import { CallSupport } from "../components/support";

const TrackingDetailsPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-90px)] justify-between">
              <div>Thông tin bảo dưỡng</div>
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
      <div className="flex-1 overflow-auto bg-[#F8F8F8] px-[16px] pt-[14px] hide-scrollbar">
        <MaintenanceTrackingPageMaintenanceDetails />
      </div>
    </Page>
  );
};

export default TrackingDetailsPage;
