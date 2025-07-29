import React from "react";
import ServiceImg from "../../static/service.png";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/button";
import { Tag } from "../common/tag";
import { warrantyStatus } from "../../constants/warranty-status";

const WarrantyDetails = () => {
  const navigate = useNavigate();

  const status = warrantyStatus["1"];

  return (
    <div className="flex h-full flex-col gap-[20px] px-[16px]">
      <div className="flex w-full flex-col items-center gap-[12px] rounded-[12px] border border-gray1 bg-surface1 px-[20px] py-[16px]">
        <div className="text-base font-semibold">Máy lạnh Toshiba 2024</div>
        <img src={ServiceImg} className="w-[121px] object-contain" />
        <div className="flex w-full flex-col gap-[20px]">
          {/* Product */}
          <div className="flex w-full flex-col gap-[12px]">
            <div className="text-sm font-semibold text-gray8">
              Thông tin sản phẩm
            </div>
            <div className="flex flex-col gap-[8px]">
              {/* Serial */}
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray6">Số serial</div>
                <div className="text-sm font-medium">1232434</div>
              </div>
              <Divider className="m-0" />
              {/* Model */}
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray6">Model</div>
                <div className="text-sm font-medium">QA-2343445</div>
              </div>
              <Divider className="m-0" />
              {/* Manufacture Date */}
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray6">
                  Ngày sản xuất
                </div>
                <div className="text-sm font-medium">23 tháng 5 2025</div>
              </div>
            </div>
          </div>
          {/* Warranty */}
          <div className="flex w-full flex-col gap-[12px]">
            <div className="text-sm font-semibold text-gray8">
              Thông tin bảo hành
            </div>
            <div className="flex flex-col gap-[8px]">
              {/* End Date */}
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray6">
                  Ngày hết hạn mới
                </div>
                <div className="text-sm font-medium">12/3/2026</div>
              </div>
              <Divider className="m-0" />
              {/* Renew Date */}
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray6">
                  Thời gian gia hạn
                </div>
                <div className="text-sm font-bold text-gray6">+12 tháng</div>
              </div>
              <Divider className="m-0" />
              {/* Warranty Status */}
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray6">
                  Trạng thái bảo hành
                </div>
                <Tag
                  className="m-0 flex h-[25px] items-center justify-center rounded-[24px]"
                  style={{
                    background: status.bgColor,
                    borderColor: status.borderColor,
                    color: status.color,
                  }}
                >
                  <div className="text-xs font-semibold">{status.label}</div>
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        text={
          <div className="text-lg font-medium text-white">Lịch sử bảo hành</div>
        }
        className="flex h-[50px] w-full flex-none items-center justify-center rounded-[12px] bg-green6"
        onClick={() => navigate("/history")}
      />
    </div>
  );
};

export default WarrantyDetails;
