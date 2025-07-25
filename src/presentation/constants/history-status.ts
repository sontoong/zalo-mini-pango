import WarrantyIcon from "../static/icons/warranty-icon.png";
import MaintenanceIcon from "../static/icons/maintenance-icon.png";
import OrderIcon from "../static/icons/order-icon.png";
import ClockIconYellow from "../static/icons/clock-history-icon-yellow.png";
import CheckIconGreen from "../static/icons/check-outline-icon-green.png";

const warranty = {
  name: "Bảo hành",
  icon: WarrantyIcon,
  "1": {
    icon: ClockIconYellow,
    label: "Chờ xác nhận",
    color: "#A3A50D",
    bgColor: "#FBFBEA",
    borderColor: "#DBDE11",
    key: "1",
  },
  "2": {
    icon: CheckIconGreen,
    label: "Đã xác nhận",
    color: "#3A9767",
    bgColor: "#F2FCF8",
    borderColor: "#70C89A",
    key: "2",
  },
};

const maintenance = {
  name: "Bảo dưỡng",
  icon: MaintenanceIcon,
  "1": {
    icon: ClockIconYellow,
    label: "Chờ xác nhận",
    color: "#A3A50D",
    bgColor: "#FBFBEA",
    borderColor: "#DBDE11",
    key: "1",
  },
  "2": {
    icon: CheckIconGreen,
    label: "Đã xác nhận",
    color: "#3A9767",
    bgColor: "#F2FCF8",
    borderColor: "#70C89A",
    key: "2",
  },
};

const order = {
  name: "Mua hàng",
  icon: OrderIcon,
  "1": {
    icon: ClockIconYellow,
    label: "Chờ xác nhận",
    color: "#A3A50D",
    bgColor: "#FBFBEA",
    borderColor: "#DBDE11",
    key: "1",
  },
  "2": {
    icon: CheckIconGreen,
    label: "Đã xác nhận",
    color: "#3A9767",
    bgColor: "#F2FCF8",
    borderColor: "#70C89A",
    key: "2",
  },
};

export const historyStatus = {
  "1": { ...warranty, key: "1" },
  "2": { ...maintenance, key: "2" },
  "3": { ...order, key: "3" },
};
