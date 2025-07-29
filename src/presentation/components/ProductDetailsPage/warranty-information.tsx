import React from "react";
import RemoteIcon from "../../static/icons/remote-icon.png";
import ReplaceIcon from "../../static/icons/replace-icon.png";
import WarrantyIcon from "../../static/icons/warranty-outline-icon.png";
import { Divider } from "antd";

export const WarrantyInformation = () => {
  return (
    <div
      id="warranty-information"
      className="flex flex-col gap-[14px] px-[16px]"
    >
      <div className="text-xl font-semibold">Thông tin bảo hành</div>
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center gap-[12px]">
          <img src={RemoteIcon} alt="" className="size-[24px] object-contain" />
          <div className="text-xs font-medium text-gray8">
            Bảo hành remote 1 năm, máy nén 12 năm
          </div>
        </div>
        <Divider className="m-0" />
        <div className="flex items-center gap-[12px]">
          <img
            src={ReplaceIcon}
            alt=""
            className="size-[24px] object-contain"
          />
          <div className="text-xs font-medium text-gray8">
            Hư đổi 12 tháng tận nhà (miễn phí tháng đầu)
          </div>
        </div>
        <Divider className="m-0" />
        <div className="flex items-center gap-[12px]">
          <img
            src={WarrantyIcon}
            alt=""
            className="size-[24px] object-contain"
          />
          <div className="text-xs font-medium text-gray8">
            Bảo hành chính hãng 1 năm, có người đến tận nhà
          </div>
        </div>
      </div>
    </div>
  );
};
