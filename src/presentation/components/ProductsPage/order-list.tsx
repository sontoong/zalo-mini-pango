import React from "react";
import ProductImg from "../../static/service.png";
import ShareIcon from "../../static/icons/share-icon-purple.png";
import { Button } from "../common/button";
import { Tag } from "../common/tag";
import { warrantyStatus } from "../../constants/warranty-status";

const OrderList = () => {
  return (
    <div className="flex flex-col gap-[12px] px-[16px] pb-[16px]">
      <div className="text-xl font-semibold">Sản phẩm đã mua</div>
      <div className="flex flex-col gap-[12px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductListItem key={index} />
        ))}
      </div>
    </div>
  );
};

const ProductListItem = () => {
  const status = warrantyStatus["3"];

  return (
    <div className="flex flex-col gap-[12px] rounded-[12px] border border-gray1 bg-white px-[20px] py-[16px]">
      {/* Title */}
      <div className="flex items-center gap-[12px]">
        <img src={ProductImg} alt="" className="h-[40px] object-contain" />
        <div className="text-lg font-semibold">
          Máy giặt Toshiba Inverter 1 HP RAS-H10E2KCVG-V
        </div>
      </div>
      {/* Body */}
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-gray6">Mã đơn hàng</div>
          <div className="flex items-center gap-[4px]">
            <div className="text-sm font-semibold text-purple5">#3435435</div>
            <img src={ShareIcon} alt="" className="size-[16px] object-cover" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-gray6">Số serial</div>
          <div className="text-sm font-medium">1232434</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-gray6">Model</div>
          <div className="text-sm font-medium">QA-2343445</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-gray6">Ngày mua</div>
          <div className="text-sm font-medium">23 tháng 5 2025</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-gray6">
            Ngày kích hoạt bảo hành
          </div>
          <div className="text-sm font-medium">24 tháng 5 2025</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-gray6">
            Thời gian gia hạn
          </div>
          <div className="text-sm font-medium">12 tháng</div>
        </div>
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
        <Button
          text={
            <div className="text-[11px] font-medium text-white">
              Kích hoạt bảo hành
            </div>
          }
          className="h-[30px] flex-none rounded-[8px] bg-green6"
        />
      </div>
    </div>
  );
};

export { OrderList };
