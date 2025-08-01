import React from "react";
import { Header, Page } from "zmp-ui";
import { CallSupport } from "../components/support";
import ArrowLeftIcon from "../static/icons/arrow-left.png";
import { HistoryPageTabs } from "../components/HistoryPage";
import { useScrollPosition } from "../hooks/useScrollPosition";

const HistoryPage = () => {
  const { scrollY } = useScrollPosition(".historypage-scroll-container");

  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-90px)] justify-between">
              <div>Đặt hàng</div>
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
      <div className="historypage-scroll-container flex-1 overflow-auto bg-white hide-scrollbar">
        <HistoryPageTabs scrollY={scrollY} />
      </div>
    </Page>
  );
};

export default HistoryPage;
