import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/icons/arrow-left.png";
import { OrderPageOrderForm } from "../components/OrderPage";
import { CallSupport } from "../components/support";

const OrderPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-90px)] justify-between">
              <div>Đặt lịch bảo dưỡng</div>
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
      <div className="flex-1 overflow-auto bg-[#F8F8F8] p-[16px] hide-scrollbar">
        <OrderPageOrderForm />
      </div>
    </Page>
  );
};

export default OrderPage;
