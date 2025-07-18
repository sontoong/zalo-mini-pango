import { Divider, Progress } from "antd";
import React from "react";
import CheckboxIcon from "../../static/icons/checkbox-icon.png";
import CheckboxCheckedIcon from "../../static/icons/checkbox-checked-icon.png";

const MaintenanceDetails = () => {
  return (
    <div
      className="flex flex-col gap-[12px] rounded-[12px] border border-gray1 bg-white px-[20px] py-[16px]"
      style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
    >
      <div className="flex flex-col gap-[20px]">
        <div className="text-base font-semibold">Máy lạnh Toshiba 2024</div>
        <div className="flex flex-col gap-[12px]">
          <div className="flex justify-between">
            <div className="text-xs font-medium text-gray6">Số seri</div>
            <div className="text=sm font-medium">1232434</div>
          </div>
          <div className="flex justify-between">
            <div className="text-xs font-medium text-gray6">Số model</div>
            <div className="text=sm font-medium">QS32434</div>
          </div>
          <div className="flex justify-between">
            <div className="text-xs font-medium text-gray6">Ngày thực hiện</div>
            <div className="text=sm font-medium">23 tháng 5 2025 - 9:00</div>
          </div>
        </div>
      </div>
      <Divider variant="dashed" className="m-0 border-gray3" />
      <div className="flex flex-col gap-[8px]">
        <div className="text-base font-semibold">Quá trình tiếp nhận</div>
        <div className="flex flex-col">
          <div className="flex items-center gap-[4px]">
            <span className="text-lg font-semibold text-green6">30%</span>
            <span className="text-2xs font-medium text-neutralgray6">
              Đã đến tư vấn
            </span>
          </div>
          <Progress
            percent={30}
            strokeColor="#70C89A"
            trailColor="#E1F5EB"
            showInfo={false}
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-[12px]">
        {/* Status */}
        <div className="flex justify-between rounded-[8px] bg-green2 p-[12px]">
          <div className="text-sm font-medium text-gray8">
            Đã tiếp nhận yêu cầu
          </div>
          <img
            src={CheckboxCheckedIcon}
            alt=""
            className="size-[20px] object-cover"
          />
        </div>
        {/* Status */}
        <div className="flex justify-between rounded-[8px] bg-green2 p-[12px]">
          <div className="text-sm font-medium text-gray8">Đến tư vấn</div>
          <img
            src={CheckboxCheckedIcon}
            alt=""
            className="size-[20px] object-cover"
          />
        </div>
        {/* Status */}
        <div className="flex justify-between rounded-[8px] bg-gray1 p-[12px]">
          <div className="text-sm font-medium text-gray8">Bảo dưỡng</div>
          <img src={CheckboxIcon} alt="" className="size-[20px] object-cover" />
        </div>
        {/* Status */}
        <div className="flex justify-between rounded-[8px] bg-gray1 p-[12px]">
          <div className="text-sm font-medium text-gray8">Hoàn thành</div>
          <img src={CheckboxIcon} alt="" className="size-[20px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default MaintenanceDetails;
