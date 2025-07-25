import React, { FC, useState } from "react";
import { Header, Page } from "zmp-ui";
import { CallSupport } from "../components/support";
import ArrowLeftIcon from "../static/icons/arrow-left.png";
import {
  TechnicalSupportPageSuccess,
  TechnicalSupportPageSupportRequestForm,
} from "../components/TechnicalSupport Page";

const TechnicalSupportPage: FC<Props> = ({ success }) => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-90px)] justify-between">
              <div>Hỗ trợ kỹ thuật</div>
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
      <div className="flex-1 overflow-auto bg-[#FBFBFB] p-[16px] hide-scrollbar">
        {!success ? (
          <TechnicalSupportPageSupportRequestForm />
        ) : (
          <TechnicalSupportPageSuccess />
        )}
      </div>
    </Page>
  );
};

export default TechnicalSupportPage;

type Props = {
  success?: boolean;
};
