import React from "react";
import ProductSpecificationsImg from "../../static/prouct-specifications.png";
import { Divider } from "antd";

export const TechnicalInformation = () => {
  return (
    <div
      id="technical-information"
      className="flex flex-col gap-[14px] px-[16px]"
    >
      <div className="text-xl font-semibold">Thông số kỹ thuật</div>
      <img
        src={ProductSpecificationsImg}
        className="rounded-[12px] border border-gray1"
      />
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center justify-between">
          <div className="w-[140px] text-xs font-medium text-gray6">
            Loại máy:
          </div>
          <div className="w-[140px] text-end text-xs font-medium">
            1 chiều (chỉ làm lạnh)
          </div>
        </div>
        <Divider className="m-0" />
        <div className="flex items-center justify-between">
          <div className="w-[160px] text-xs font-medium text-gray6">
            Inverter:
          </div>
          <div className="w-[140px] text-end text-xs font-medium">
            Có Inverter
          </div>
        </div>
        <Divider className="m-0" />
        <div className="flex items-center justify-between">
          <div className="w-[160px] text-xs font-medium text-gray6">
            Công suất làm lạnh:
          </div>
          <li className="w-[140px] list-disc text-end text-xs font-medium">
            1.5 HP - 11.900 BTU
          </li>
        </div>
        <Divider className="m-0" />
        <div className="flex items-center justify-between">
          <div className="w-[160px] text-xs font-medium text-gray6">
            Phạm vi làm lạnh hiệu quả:
          </div>
          <li className="w-[140px] list-disc text-end text-xs font-medium">
            Từ 15 - 20m² (từ 40 đến 60m³)
          </li>
        </div>
        <Divider className="m-0" />
        <div className="flex items-center justify-between">
          <div className="w-[160px] text-xs font-medium text-gray6">
            Độ ồn trung bình (được đo trong phòng thí nghiệm):
          </div>
          <li className="w-[140px] list-disc text-balance text-end text-xs font-medium">
            Độ ồn trung bình (được đo trong phòng thí nghiệm):
          </li>
        </div>
        <Divider className="m-0" />
      </div>
    </div>
  );
};
