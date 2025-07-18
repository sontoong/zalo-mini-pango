import React from "react";
import TableOrderIcon from "../static/icons/table-order-icon.png";
import DeliveryIcon from "../static/icons/delivery-icon-blue.png";
import TakeHomeIcon from "../static/icons/take-home-icon.png";

export const orderMethods = {
  "1": {
    label: <span className="text-sm font-medium text-neutral6">Tại bàn</span>,
    icon: TableOrderIcon,
    key: "1",
  },
  "2": {
    label: (
      <>
        <span className="text-sm font-medium text-neutral8">Giao hàng:</span>{" "}
        <span>Giao ngay (25 - 40 p)</span>
      </>
    ),
    icon: DeliveryIcon,
    key: "2",
  },
  "3": {
    label: (
      <>
        <span className="text-sm font-medium text-neutral8">Đến lấy:</span>{" "}
        <span>Lấy ngay</span>
      </>
    ),
    icon: TakeHomeIcon,
    key: "3",
  },
} as const;
