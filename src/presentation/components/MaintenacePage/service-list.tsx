import React, { FC } from "react";
import ServiceImage from "../../static/service.png";
import TickCircleIcon from "../../static/icons/tick-circle.png";
import AddCircleIcon from "../../static/icons/add-circle.png";
import TickCircleIconGreen from "../../static/icons/tick-circle-icon-green.png";
import InformationIcon from "../../static/icons/information-icon-green.png";
import { formatCurrency } from "../../utils/helpers";
import { CollapseProps, Divider } from "antd";
import { Collapse } from "../common/collapse";

const ServiceList: FC<Props> = ({ searched }) => {
  return (
    <div className="flex flex-col gap-[14px] p-[16px] pb-[105px]">
      {searched ? (
        <div className="text-sm font-normal">
          Tìm thấy <span className="text-lg font-medium">12</span> kết quả phù
          hợp với từ khóa <span className="font-semibold">Tủ lạnh</span>
        </div>
      ) : null}
      <div className="text-xl font-semibold">Chọn dịch vụ bảo dưỡng</div>
      <div className="flex flex-col gap-[12px]">
        <ServiceListItem />
        <ServiceListItem />
        <ServiceListItem />
        <ServiceListItem />
        <ServiceListItem />
        <ServiceListItem />
        <ServiceListItem />
        <ServiceListItem />
        <ServiceListItem />
      </div>
    </div>
  );
};

const ServiceListItem = () => {
  return (
    <div
      className="flex flex-col gap-[12px] rounded-[8px] bg-white p-[12px]"
      style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
    >
      <div className="flex gap-[12px]">
        <div className="flex shrink-0 items-center justify-center rounded-[9.3px] bg-[#F9F9F9]">
          <img
            src={ServiceImage}
            alt=""
            className="size-[64px] object-contain"
          />
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="text-base font-semibold leading-[120%]">
            Vệ sinh & bảo dưỡng - Điều hoà tiêu chuẩn
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-gray7">
              {formatCurrency(200000)}
            </div>
            <img
              src={TickCircleIcon}
              alt=""
              className="size-[24px] object-cover"
            />
          </div>
        </div>
      </div>
      <Collapse items={items} bordered={false} expandIconPosition="end" />
    </div>
  );
};

export default ServiceList;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <div className="flex items-center gap-[4px]">
        <img
          src={InformationIcon}
          alt=""
          className="size-[14px] object-cover"
        />
        <div className="text-xs font-semibold">Thông tin bảo hành</div>
      </div>
    ),
    children: (
      <div className="flex flex-col gap-[10px] pt-[10px]">
        <Divider className="m-0" />
        <div className="text-[11px] font-normal">
          <span className="font-semibold">Thời gian bảo hành: </span>
          <span>6 tháng</span>
        </div>
        <Divider className="m-0" />
        <div className="flex flex-col gap-[10px] text-[11px] font-normal">
          <div className="font-semibold">Mô tả bảo hành:</div>
          <ul className="pl-4">
            <li className="list-disc">
              <span className="font-medium">Bảo hành máy nén:</span> 2 năm (chỉ
              áp dụng cho máy nén Inverter).
            </li>
            <li className="list-disc">
              <span className="font-medium">Dịch vụ:</span> Sửa chữa & thay thế
              linh kiện miễn phí nếu lỗi do nhà sản xuất.
            </li>
            <li className="list-disc">
              <span className="font-medium">Điều kiện:</span> Cần có hóa đơn mua
              hàng hoặc phiếu bảo hành, số sê-ri còn nguyên vẹn.
            </li>
            <li className="list-disc">
              <span className="font-medium">Không bảo hành:</span> Nếu hư do rơi
              vỡ, dùng sai hướng dẫn, chập điện, thiên tai, sửa ngoài hãng.
            </li>
          </ul>
        </div>
      </div>
    ),
    styles: {
      header: {
        alignItems: "center",
        padding: 0,
      },
      body: {
        padding: 0,
      },
    },
    className: "bg-yellow1 p-[12px] !rounded-[8px]",
  },
];

type Props = {
  searched: boolean;
};
