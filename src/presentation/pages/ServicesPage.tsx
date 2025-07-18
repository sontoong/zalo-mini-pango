import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/icons/arrow-left.png";
import {
  ServicesPageSearchSection,
  ServicesPageServiceList,
} from "../components/ServicesPage";
import { CartFloatButton } from "../components/cart";
import { CallSupport } from "../components/support";

const ServicesPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-90px)] justify-between">
              <div>Mua hàng</div>
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
      <ServicesPageSearchSection />
      <div className="flex-1 overflow-auto bg-[#F8F8F8]">
        <ServicesPageServiceList />
      </div>
      <CartFloatButton />
    </Page>
  );
};

export default ServicesPage;
