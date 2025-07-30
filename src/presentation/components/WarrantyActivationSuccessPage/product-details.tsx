import { Divider } from "antd";
import React from "react";
import { formatCurrency } from "../../utils/helpers";
import ActivateSuccessImg from "../../static/activate-warranty-success.png";
import ProductImg from "../../static/service.png";
import { Tag } from "../common/tag";
import { warrantyStatus } from "../../constants/warranty-status";

const status = warrantyStatus["1"];

const ProductDetails = () => {
  return (
    <div className="flex flex-col items-center gap-[24px] px-[16px] pt-[40px]">
      <div className="flex flex-col items-center gap-[20px]">
        <img src={ActivateSuccessImg} className="size-[100px] object-contain" />
        <div className="text-xl font-semibold">
          Kích hoạt bảo hành thành công
        </div>
      </div>
      <div className="flex w-full flex-col gap-[20px] rounded-[12px] border border-gray1 bg-surface1 px-[20px] py-[16px]">
        <div className="text-center text-base font-semibold">
          Máy lạnh Toshiba 2024
        </div>
        <img src={ProductImg} alt="" className="h-[50px] object-contain" />
        <div className="flex w-full flex-col gap-[12px]">
          <div className="flex w-full flex-col gap-[12px]">
            <div className="text-sm font-semibold">Thông tin sản phẩm</div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray6">Số serial</div>
                <div className="text-sm font-medium">1232434</div>
              </div>
              <Divider className="m-0" />
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray6">Model</div>
                <div className="text-sm font-medium">QA-2343445</div>
              </div>
              <Divider className="m-0" />
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray6">
                  Ngày sản xuất
                </div>
                <div className="text-sm font-medium">23 tháng 5 2025</div>
              </div>
              <Divider className="m-0" />
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray6">Suffix</div>
                <div className="text-sm font-medium">ATV</div>
              </div>
              <Divider className="m-0" />
            </div>
          </div>
          <div className="flex w-full flex-col gap-[12px]">
            <div className="text-sm font-semibold">Thông tin mua hàng</div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray6">Nơi mua</div>
                <div className="text-sm font-medium">Đại lý TMC</div>
              </div>
              <Divider className="m-0" />
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray6">Tỉnh/TP</div>
                <div className="text-sm font-medium">Ho Chi Minh</div>
              </div>
              <Divider className="m-0" />
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray6">
                  Giá sản phẩm
                </div>
                <div className="text-sm font-medium">
                  {formatCurrency(4000000)}
                </div>
              </div>
              <Divider className="m-0" />
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray6">Ngày mua</div>
                <div className="text-sm font-medium">12/3/2024</div>
              </div>
              <Divider className="m-0" />
            </div>
          </div>
          <div className="flex w-full flex-col gap-[12px]">
            <div className="text-sm font-semibold">Thông tin bảo hành</div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray6">
                  Ngày hết hạn bảo hành
                </div>
                <div className="text-sm font-medium">12/3/2024</div>
              </div>
              <Divider className="m-0" />
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
    </div>
  );
};

export default ProductDetails;
