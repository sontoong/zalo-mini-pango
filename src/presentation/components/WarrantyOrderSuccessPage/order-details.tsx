import React from "react";
import OrderSuccess from "../../static/warranty-order-success.png";
import PlaceOrderSuccess from "../../static/warrany-place-order-success.png";
import { Button } from "../common/button";
import { Divider } from "antd";
import ChevronRight from "../../static/icons/chevron-right.png";
import { formatCurrency } from "../../utils/helpers";
import ZaloPayLogo from "../../static/zalo-pay-logo.png";
import { useNavigate, useSearchParams } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const paymentMethod = searchParams.get("method") || "offline";

  const isOnline = () => {
    return paymentMethod === "online";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-[20px] px-[16px]">
      {isOnline() ? (
        <>
          <img src={OrderSuccess} />
          <div className="text-xl font-semibold">
            Gia hạn bảo hành thành công
          </div>
        </>
      ) : (
        <>
          <img src={PlaceOrderSuccess} />
          <div className="flex flex-col gap-[12px]">
            <div className="text-xl font-semibold leading-[120%]">
              Đã đặt dịch vụ gia hạn sản phẩm
            </div>
            <div className="text-xs font-medium leading-[120%] text-gray6">
              Chúng tôi sẽ liên hệ lại để xác nhận trong thời gian tới.
            </div>
          </div>
        </>
      )}

      <div className="flex w-full flex-col gap-[12px] rounded-[12px] border border-gray2 bg-white p-[12px]">
        <div className="text-base font-semibold text-gray7">
          Gói gia hạn bảo hành
        </div>
        <Divider className="m-0" />
        {/* Warranty */}
        <div
          className="flex flex-col gap-[8px]"
          onClick={() => navigate(`/warranty/1`)}
        >
          <div className="flex items-center justify-between">
            <div className="text-base font-semibold">
              1 năm bảo hành Máy lạnh Toshiba
            </div>
            <div className="text-xs font-medium text-gray5">x1</div>
            <img src={ChevronRight} className="size-[16px] object-cover" />
          </div>
          <div className="text-sm font-semibold text-gray7">
            {formatCurrency(300000)}
          </div>
        </div>
        <Divider className="m-0" />
        {/* Warranty */}
        <div
          className="flex flex-col gap-[8px]"
          onClick={() => navigate(`/warranty/1`)}
        >
          <div className="flex items-center justify-between">
            <div className="text-base font-semibold">
              1 năm bảo hành Máy lạnh Toshiba
            </div>
            <div className="text-xs font-medium text-gray5">x1</div>
            <img src={ChevronRight} className="size-[16px] object-cover" />
          </div>
          <div className="text-sm font-semibold text-gray7">
            {formatCurrency(300000)}
          </div>
        </div>
        <Divider className="m-0" />
        <div className="flex items-center justify-between">
          <div className="text-base font-semibold text-gray7">Tổng tiền</div>
          <div className="flex flex-col">
            {isOnline() ? (
              <div className="flex items-center gap-[8px]">
                <img
                  src={ZaloPayLogo}
                  alt=""
                  className="size-[18px] rounded-[4px] border border-gray1 object-cover"
                />
                <div className="text-xs font-semibold text-green6">
                  Đã thanh toán
                </div>
              </div>
            ) : (
              <div className="text-xs font-semibold text-gray6">
                Chưa thanh toán: Tiền mặt
              </div>
            )}
            <div className="text-end text-sm font-semibold text-red6">
              {formatCurrency(20000000)}
            </div>
          </div>
        </div>
      </div>
      <Button
        text={
          <div className="text-lg font-medium text-white">
            {isOnline() ? "Lịch sử bảo hành" : "Danh sách bảo hành"}
          </div>
        }
        className="flex h-[50px] w-full flex-none items-center justify-center rounded-[12px] bg-green6"
        onClick={() =>
          isOnline() ? navigate("/history") : navigate("/warranty")
        }
      />
    </div>
  );
};

export default OrderDetails;
