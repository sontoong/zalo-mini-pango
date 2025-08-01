import React from "react";
import ProductImg from "../../static/service.png";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import CartAddIcon from "../icons/CartAddIcon";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-[12px] px-[16px] pb-[100px]">
      {Array.from({ length: 10 }).map((_, index) => (
        <ProductListItem key={index} />
      ))}
    </div>
  );
};

const ProductListItem = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-[12px] rounded-[12px] border border-gray1 bg-white p-[12px]"
      onClick={() => navigate("/products/1")}
    >
      <img src={ProductImg} alt="" className="h-[100px] object-contain" />
      <div className="flex flex-col">
        <div className="text-base font-medium leading-[120%] text-gray8">
          Máy lạnh toshiba ECMS-2024
        </div>
        <div className="text-lg font-bold text-red6">
          {formatCurrency(10000000)}
        </div>
        <div className="text-xs font-medium text-gray6 line-through">
          {formatCurrency(12000000)}
        </div>
      </div>
      <div className="flex justify-between gap-[8px]">
        <Button.Icon
          icon={<CartAddIcon className="text-green6" />}
          className="size-[30px] !rounded-[8px] bg-green2"
          onClick={(e) => e.stopPropagation()}
        />
        <Button
          text={
            <div className="text-[11px] font-medium text-white">Mua ngay</div>
          }
          className="flex h-[30px] items-center justify-center rounded-[8px] bg-green6"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export { ProductList };
