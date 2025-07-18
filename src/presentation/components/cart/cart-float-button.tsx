import React from "react";
import CartIcon from "../../static/icons/cart-icon.png";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import { Badge } from "antd";
import { CartPopup } from "./cart-popup";

const CartFloatButton = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[1001] flex h-[89px] gap-[10px] bg-white px-[16px] py-[24px] pt-[12px]"
      style={{ boxShadow: "0px -4px 24px 0px #A6A6A633" }}
    >
      <CartPopup>
        {({ open }) => (
          <div
            className="flex shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-green2 pl-[14px] pr-[18px]"
            onClick={open}
          >
            <Badge count={2} offset={[0, 24]} color="#EC8368">
              <img src={CartIcon} alt="" className="size-[24px] object-cover" />
            </Badge>
          </div>
        )}
      </CartPopup>
      <Button
        text={
          <div className="flex justify-center gap-[10px]">
            <div className="text-lg font-medium text-white">Mua ngay: </div>
            <div className="text-lg font-semibold text-white">
              {formatCurrency(600000)}
            </div>
          </div>
        }
        className="flex-1 rounded-[12px] bg-green6"
      />
    </div>
  );
};

export default CartFloatButton;
