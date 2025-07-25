import React from "react";
import { Header, Page } from "zmp-ui";
import { CallSupport } from "../components/support";
import ArrowLeftIcon from "../static/icons/arrow-left.png";
import WarrantyOrderSuccess from "../static/warranty-order-success.png";
import { WarrantyOrderSuccessPageOrderDetails } from "../components/WarrantyOrderSuccessPage";

const WarrantyOrderSuccessPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-90px)] justify-between">
              <div>Bảo hành</div>
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
      <div className="flex-1 overflow-auto py-[16px] hide-scrollbar">
        <WarrantyOrderSuccessPageOrderDetails />
      </div>
    </Page>
  );
};

export default WarrantyOrderSuccessPage;
