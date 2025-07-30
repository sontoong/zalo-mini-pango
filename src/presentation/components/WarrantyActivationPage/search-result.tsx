import { Divider, FormInstance, Input } from "antd";
import React, { FC } from "react";
import { Form } from "../common/form";
import ProductImage from "../../static/service.png";
import CheckMarkIcon from "../../static/icons/tick-circle-icon-green.png";
import { formatCurrency } from "../../utils/helpers";
import { Tag } from "../common/tag";
import { warrantyStatus } from "../../constants/warranty-status";

const activated = false;
const status = warrantyStatus["3"];

export const SearchResult: FC<Props> = ({ form }) => {
  return (
    <div className="flex flex-col gap-[14px]">
      {!activated ? (
        <div className="flex flex-col gap-[8px]">
          <div className="text-xl font-semibold">
            Sản phẩm chưa kích hoạt bảo hành
          </div>
          <div className="text-xs font-normal text-gray7">
            Vui lòng nhấn{" "}
            <span className="text-sm font-semibold text-black">
              “Kích hoạt”
            </span>{" "}
            để bắt đầu bảo hành
          </div>
        </div>
      ) : (
        <div className="text-xl font-semibold">
          Sản phẩm đã kích hoạt bảo hành
        </div>
      )}
      <Form form={form} name="searchResultForm">
        <div className="flex flex-col items-center gap-[12px] rounded-[12px] border border-gray1 bg-surface1 px-[20px] py-[16px]">
          <div className="text-lg font-semibold">Máy lạnh Toshiba 2024</div>
          <img src={ProductImage} alt="" className="h-[50px] object-contain" />
          <Form.Item
            label="Số seri sản phẩm"
            labelCol={{ style: { padding: 0, fontSize: "12px" } }}
            style={{ margin: 0 }}
          >
            <Input
              className="h-[40px]"
              suffix={
                <img src={CheckMarkIcon} className="size-[24px] object-cover" />
              }
            />
          </Form.Item>
          {/* Product Information */}
          <div className="flex w-full flex-col gap-[12px]">
            <div className="flex w-full flex-col gap-[12px]">
              <div className="text-sm font-semibold">Thông tin sản phẩm</div>
              <div className="flex flex-col gap-[8px]">
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
      </Form>
    </div>
  );
};

type Props = {
  form: FormInstance;
};
