import { Progress } from "antd";
import React from "react";
import ShareIcon from "../../static/icons/share-icon-purple.png";
import { useNavigate } from "react-router-dom";

const TrackingTab = () => {
  return (
    <div className="flex flex-col gap-[12px] px-[16px] py-[12px]">
      <TrackingItem />
      <TrackingItem />
      <TrackingItem />
      <TrackingItem />
      <TrackingItem />
      <TrackingItem />
      <TrackingItem />
    </div>
  );
};

const TrackingItem = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[12px] rounded-[12px] border border-gray1 bg-white p-[12px]">
      <div className="flex justify-between">
        <div className="text-base font-semibold">Máy lạnh Toshiba 2014</div>
        <Progress
          type="circle"
          size={32}
          strokeColor="#70C89A"
          percent={60}
          format={(percent) => (
            <span className="text-2xs font-medium text-green6">{percent}%</span>
          )}
          className="text-green5"
        />
      </div>
      <div className="flex justify-between">
        <div className="text-xs font-medium text-gray6">Mã đơn hàng</div>
        <div
          className="flex items-center gap-[4px]"
          onClick={() => navigate("/tracking-details")}
        >
          <div className="font-sm font-semibold text-purple5">#3435435</div>
          <img src={ShareIcon} alt="" className="size-[16px] object-cover" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-xs font-medium text-gray6">Số seri</div>
        <div className="font-mediuma text-sm">1232434</div>
      </div>
      <div className="flex justify-between">
        <div className="text-xs font-medium text-gray6">Lịch hẹn</div>
        <div className="text-sm font-medium">23 tháng 5 2025 - 9:00</div>
      </div>
    </div>
  );
};

export default TrackingTab;
