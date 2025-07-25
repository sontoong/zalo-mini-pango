import React, { FC } from "react";
import { historyStatus } from "../../constants/history-status";
import ClockIcon from "../../static/icons/clock.png";

export const Status: FC<{ type: string; statusId: string }> = ({
  statusId,
  type,
}) => {
  const status = historyStatus[type][statusId];

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-[8px]">
        <div className="text-lg font-semibold">{status.label}</div>
        <div className="flex items-center gap-[4px]">
          <img src={ClockIcon} alt="" className="size-[18px] object-cover" />
          <div className="text-sm font-medium text-neutral6">
            Đã đặt hàng: 06:00, 12/05/2025
          </div>
        </div>
      </div>
      <img src={status.icon} alt="" className="size-[48px] object-cover" />
    </div>
  );
};
