import { Divider } from "antd";
import React from "react";
import { formatCurrency } from "../../utils/helpers";

export const OrderDetails = () => {
  return (
    <div className="flex flex-col gap-[12px] rounded-[12px] border border-gray2 p-[12px]">
      {/* Header */}
      <div className="text-sm font-medium text-gray6">
        Đơn hàng: <span className="text-black">#12434</span>
      </div>
      <Divider className="m-0" />
      {/* Item List */}
      <div className="flex flex-col gap-[12px]">
        {/* Item */}
        <div className="flex items-start justify-between gap-[30px]">
          <div className="text-xs font-medium">
            Máy lạnh Toshiba Inverter 1 HP RAS-H10E2KCVG
          </div>
          <div className="flex flex-col items-end gap-[8px]">
            <div className="text-xs font-medium text-gray5">x1</div>
            <div className="text-sm font-medium text-gray7">
              {formatCurrency(9000000)}
            </div>
          </div>
        </div>
        <Divider className="m-0" />
        {/* Item */}
        <div className="flex items-start justify-between gap-[30px]">
          <div className="text-xs font-medium">Máy giặt toshiba KNC-12344</div>
          <div className="flex flex-col items-end gap-[8px]">
            <div className="text-xs font-medium text-gray5">x1</div>
            <div className="text-sm font-medium text-gray7">
              {formatCurrency(9000000)}
            </div>
          </div>
        </div>
      </div>
      <Divider className="m-0" />
      <div className="flex justify-between">
        <div className="text-base font-semibold text-gray7">Tổng tiền</div>
        <div className="text-base font-semibold">
          {formatCurrency(18000000)}
        </div>
      </div>
    </div>
  );
};
