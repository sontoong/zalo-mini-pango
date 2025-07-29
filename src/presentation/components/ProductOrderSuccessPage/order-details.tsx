import React from "react";
import { Button } from "../common/button";
import { Divider } from "antd";
import ChevronRight from "../../static/icons/chevron-right.png";
import { formatCurrency } from "../../utils/helpers";
import ProductOrderSuccess from "../../static/product-order-success.png";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col items-center justify-center gap-[20px] px-[16px]">
      <img src={ProductOrderSuccess} />
      <div className="text-xl font-semibold">Đặt hàng thành công</div>
      <div className="flex w-full flex-col gap-[12px] rounded-[12px] border border-gray2 bg-white p-[12px]">
        <div className="text-base font-semibold text-gray7">Sản phẩm</div>
        <Divider className="m-0" />
        {/* Warranty */}
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center justify-between">
            <div className="text-base font-semibold">
              Máy lạnh Toshiba Inverter 1 HP RAS-H10E2KCVG-V
            </div>
            <div className="text-xs font-medium text-gray5">x1</div>
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="text-sm font-semibold text-gray7">
              {formatCurrency(9000000)}
            </div>
            <div className="text-[11px] font-semibold text-gray5 line-through">
              {formatCurrency(13000000)}
            </div>
          </div>
        </div>
        <Divider className="m-0" />
        {/* Warranty */}
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center justify-between">
            <div className="text-base font-semibold">
              Máy giặt toshiba KNC-12344
            </div>
            <div className="text-xs font-medium text-gray5">x1</div>
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="text-sm font-semibold text-gray7">
              {formatCurrency(9000000)}
            </div>
            <div className="text-[11px] font-semibold text-gray5 line-through">
              {formatCurrency(13000000)}
            </div>
          </div>
        </div>
        <Divider className="m-0" />
        <div className="flex items-center justify-between">
          <div className="text-base font-semibold text-gray7">Tổng tiền</div>
          <div className="text-end text-lg font-semibold text-red6">
            {formatCurrency(18000000)}
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[12px]">
        <Button
          text={
            <div className="text-lg font-medium text-white">
              Kích hoạt bảo hành
            </div>
          }
          className="flex h-[50px] w-full flex-none items-center justify-center rounded-[12px] bg-green6"
        />
        <Button
          text={
            <div className="text-lg font-medium text-green6">
              Lịch sử đơn hàng
            </div>
          }
          className="flex h-[50px] w-full flex-none items-center justify-center rounded-[12px] border-[1.5px] border-green6"
          onClick={() => navigate("/products?tab=history")}
        />
      </div>
    </div>
  );
};

export default OrderDetails;
