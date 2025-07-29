import React from "react";
import { PreviewCarousel } from "./carousel";
import { formatCurrency } from "../../utils/helpers";

const HeadSection = () => {
  return (
    <div>
      <PreviewCarousel />
      {/* Title */}
      <div className="flex flex-col gap-[12px] px-[16px] pt-[12px]">
        <div className="text-xl font-bold">
          Máy lạnh Toshiba Inverter 1 HP RAS-H10E2KCVG-V
        </div>
        <div className="flex items-center gap-[4px]">
          <div className="text-xl font-semibold text-red6">
            {formatCurrency(9990000)}
          </div>
          <div className="text-sm font-medium text-gray6 line-through">
            {formatCurrency(12990000)}
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeadSection };
