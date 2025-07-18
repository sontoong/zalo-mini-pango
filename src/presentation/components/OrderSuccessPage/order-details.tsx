import React from "react";
import OrderSuccess from "../../static/order-success-head.png";
import CalendarIcon from "../../static/icons/calendar-icon-purple.png";
import { Divider } from "antd";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-[24px] px-[16px] pt-[40px]">
      <div className="flex w-full flex-col gap-[20px]">
        <div className="flex flex-col items-center gap-[12px]">
          <img src={OrderSuccess} className="size-[80px] object-contain" />
          <div className="text-xl font-semibold">
            Đặt lịch bảo dưỡng thành công
          </div>
        </div>
        <div className="flex gap-[8px] rounded-[12px] bg-[#F5F4F9] p-[12px]">
          <div className="bg-purple2 flex size-[32px] items-center justify-center rounded-[40px]">
            <img src={CalendarIcon} alt="" />
          </div>
          <div className="flex flex-col gap-[4px]">
            <div className="text-sm font-semibold leading-[120%]">
              25 tháng 12 2025
            </div>
            <div className="text-xs font-medium leading-[120%] text-gray6">
              09:20
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[12px] rounded-[12px] border border-gray2 p-[12px]">
        <div className="text-base font-semibold text-gray7">Dịch vụ</div>
        <Divider className="m-0" />
        <div className="flex flex-col gap-[12px]">
          {/* Service */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center justify-between gap-[8px]">
              <div className="text-base font-semibold leading-[120%]">
                Vệ sinh & Bảo dưỡng - Máy gi(Có tháo lồng giặt)
              </div>
              <div className="text-xs font-medium text-gray5">x1</div>
            </div>
            <div className="text-sm font-semibold text-gray7">
              {formatCurrency(300000)}
            </div>
          </div>
          <Divider className="m-0" />
          {/* Service */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center justify-between gap-[8px]">
              <div className="text-base font-semibold leading-[120%]">
                Vệ sinh & bảo dưỡng - Điều hoà tiêu chuẩn
              </div>
              <div className="text-xs font-medium text-gray5">x1</div>
            </div>
            <div className="text-sm font-semibold text-gray7">
              {formatCurrency(300000)}
            </div>
          </div>
          <Divider className="m-0" />
          <div className="flex justify-between">
            <div className="text-base font-semibold text-gray7">Tổng tiền</div>
            <div className="text-lg font-semibold text-red6">
              {formatCurrency(600000)}
            </div>
          </div>
        </div>
      </div>
      <Button
        text={
          <div className="text-lg font-medium text-white">Theo dõi tiến độ</div>
        }
        className="w-full rounded-[12px] bg-green6 py-[14px]"
        onClick={() => navigate("/maintenance?tab=tracking")}
      />
    </div>
  );
};

export default OrderDetails;
