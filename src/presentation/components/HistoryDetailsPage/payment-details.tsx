import React from "react";
import ZaloPayLogo from "../../static/zalo-pay-logo.png";

export const PaymentDetails = () => {
  return (
    <div className="flex flex-col gap-[8px] rounded-[12px] border border-gray2 p-[12px]">
      <div className="text-lg font-semibold">Thông tin thanh toán</div>
      <div className="flex items-center gap-[12px]">
        <img
          src={ZaloPayLogo}
          alt=""
          className="size-[24px] rounded-[5px] border border-gray1"
        />
        <div className="flex flex-col gap-[4px]">
          <div className="text-base font-medium text-gray9">Zalopay</div>
          <div className="text-sm font-medium text-gray6">039408545</div>
        </div>
      </div>
    </div>
  );
};
