export const warrantyStatus = {
  "1": {
    label: "Đã kích hoạt",
    color: "#3A9767",
    bgColor: "#F2FCF8",
    borderColor: "#70C89A",
    key: "1",
  },
  "2": {
    label: "Hết bảo hành",
    color: "#E86543",
    bgColor: "#FAEEEA",
    borderColor: "#EC8368",
    key: "2",
  },
  "3": {
    label: "Chưa kích hoạt",
    color: "#8265E0",
    bgColor: "#F2EFF9",
    borderColor: "#9A83E6",
    key: "3",
  },
} as const;

export type WarrantyStatusType = keyof typeof warrantyStatus;
