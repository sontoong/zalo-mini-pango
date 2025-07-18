import ClockFastIcon from "../static/icons/clock-fast.png";
import ClockIcon from "../static/icons/clock-2.png";
import DeliveryIcon from "../static/icons/delivery-icon.png";
import DeliveryIconBlue from "../static/icons/delivery-icon-blue.png";
import TakeHomeIcon from "../static/icons/take-home-icon.png";
import TakeHomeIconBlue from "../static/icons/take-home-icon-blue.png";

const deliveryTypesDelivery = {
  "1": {
    label: "Giao ngay",
    description: "25 - 40 p",
    icon: ClockFastIcon,
    value: "1",
  },
  "2": {
    label: "Hẹn giờ giao",
    description: "Chọn giờ giao",
    icon: ClockIcon,
    value: "2",
  },
};

const deliveryTypesTakeHome = {
  "1": {
    label: "Lấy ngay",
    description: "",
    icon: ClockFastIcon,
    value: "1",
  },
  "2": {
    label: "Hẹn giờ lấy",
    description: "Chọn giờ lấy",
    icon: ClockIcon,
    value: "2",
  },
};

export const deliveryMethods = {
  "1": {
    label: "Giao hàng",
    icon: DeliveryIcon,
    activeIcon: DeliveryIconBlue,
    deliveryTypes: deliveryTypesDelivery,
    value: "1",
  },
  "2": {
    label: "Đến lấy",
    icon: TakeHomeIcon,
    activeIcon: TakeHomeIconBlue,
    deliveryTypes: deliveryTypesTakeHome,
    value: "2",
  },
};
