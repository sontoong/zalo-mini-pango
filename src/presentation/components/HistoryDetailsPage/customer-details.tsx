import React from "react";
import LocationIcon from "../../static/icons/location-icon-red.png";

export const CustomerDetails = () => {
  return (
    <div className="flex flex-col gap-[8px] rounded-[12px] border border-gray2 p-[12px]">
      <div className="text-lg font-semibold leading-[120%]">
        Thông tin khách hàng
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-center gap-[4px]">
          <img src={LocationIcon} className="size-[20px] object-cover" />
          <span className="text-base font-medium leading-[120%]">Thu Hồng</span>
          <span className="text-sm font-normal text-gray6">(039408545)</span>
        </div>
        <div className="text-sm font-medium leading-[120%] text-gray6">
          123 Lý Thường Kiệt, quận 10, TP.Hồ Chí Minh
        </div>
      </div>
    </div>
  );
};
