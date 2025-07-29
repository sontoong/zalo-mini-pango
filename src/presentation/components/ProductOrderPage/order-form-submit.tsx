import React, { FC } from "react";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";

export const OrderFormSubmit: FC<Props> = ({ onSubmit }) => {
  return (
    <div
      className="fixed inset-x-0 bottom-0 flex justify-between bg-white px-[16px] pb-[24px] pt-[12px]"
      style={{ boxShadow: "0px -4px 24px 0px #A6A6A633" }}
    >
      <div className="flex flex-col gap-[8px]">
        <div className="text-sm font-medium leading-[120%] text-gray6">
          Số lượng: 1
        </div>
        <div className="text-lg font-semibold">
          <span className="text-gray7">Tổng: </span>
          <span className="font-bold text-red6">{formatCurrency(100000)}</span>
        </div>
      </div>
      <Button
        text={<div className="text-lg font-medium text-white">Đặt hàng</div>}
        className="h-[50px] flex-none items-center justify-center rounded-[12px] bg-green6 px-[20px]"
        onClick={onSubmit}
      />
    </div>
  );
};

type Props = {
  onSubmit: any;
};
