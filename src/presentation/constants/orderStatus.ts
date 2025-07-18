export const orderStatus = {
  "1": { label: "Đơn nháp", color: "#747373", bgColor: "#FBF9F8", key: "1" },
  "2": {
    label: "Chờ giao",
    color: "#46A3ED",
    bgColor: "#EEF5FC",
    key: "2",
  },
  "3": {
    label: "Chờ xác nhận",
    color: "#C79005",
    bgColor: "#FEF9EB",
    key: "3",
  },
  "4": {
    label: "Đã hoàn thành",
    color: "#1C9946",
    bgColor: "#EDFCF1",
    key: "4",
  },
  "5": { label: "Đã hủy", color: "#E55C5C", bgColor: "#FCEDED", key: "5" },
  "6": {
    label: "Chờ đến lấy",
    color: "#C79005",
    bgColor: "#FEF9EB",
    key: "6",
  },
} as const;

export type OrderStatusType = keyof typeof orderStatus;
