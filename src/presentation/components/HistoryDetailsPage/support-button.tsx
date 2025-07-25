import React from "react";
import { Button } from "../common/button";
import MessageIcon from "../../static/icons/message-icon-green.png";

export const SupportButton = () => {
  return (
    <div
      className="fixed inset-x-0 bottom-0 px-[16px] pb-[24px] pt-[12px]"
      style={{ boxShadow: "0px -4px 24px 0px #A6A6A633" }}
    >
      <Button
        text={
          <div className="flex items-center gap-[10px]">
            <div className="text-lg font-medium text-green6">
              Liên hệ hỗ trợ
            </div>
            <img src={MessageIcon} className="size-[20px] object-cover" />
          </div>
        }
        className="flex h-[50px] w-full items-center justify-center rounded-[12px] border border-green6"
      />
    </div>
  );
};
