import { Divider, FormInstance, InputNumber } from "antd";
import React, { FC } from "react";
import { Form } from "../common/form";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import ServiceImg from "../../static/service.png";
import { Collapse } from "../common/collapse";
import InformationIcon from "../../static/icons/information-icon-green.png";

export const WarrantyList: FC<Props> = ({ form }) => {
  const initialValues = {
    services: data,
  };

  return (
    <div className="flex flex-col gap-[12px] px-[16px]">
      <div className="text-xl font-semibold">Dịch vụ bảo hành</div>
      <Form form={form} initialValues={initialValues}>
        <Form.List name="services">
          {(fields) => (
            <div className="flex flex-col gap-[12px] overflow-auto">
              {/* Warranty List */}
              {fields.map((field, index) => {
                const itemIndex = field.name;
                const item = form.getFieldValue("services")[itemIndex];

                return (
                  <React.Fragment key={index}>
                    <div className="flex items-center gap-[12px]">
                      {/* Thumbnail */}
                      <img
                        src={ServiceImg}
                        alt=""
                        className="size-[64px] rounded-[6.7px] border border-gray1 object-contain"
                      />
                      {/* Title */}
                      <div className="flex flex-col gap-[12px]">
                        {/* Title */}
                        <div className="text-base font-semibold leading-[120%]">
                          {item.title}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold leading-[120%] text-gray7">
                            {formatCurrency(item.price)}
                          </div>
                          <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, curValues) =>
                              prevValues.services !== curValues.services
                            }
                          >
                            {() => {
                              const item =
                                form.getFieldValue("services")[itemIndex];
                              return (
                                <div className="flex items-center gap-[16px]">
                                  <Button.Icon
                                    icon={<div className="text-black">-</div>}
                                    className="size-[20px] !rounded-[6.6px] bg-green3"
                                    onClick={() => {
                                      const currQuantity = item.quantity;
                                      const nextQuantity = Math.max(
                                        currQuantity - 1,
                                        0,
                                      );
                                      form.setFieldValue(
                                        ["services", itemIndex, "quantity"],
                                        nextQuantity,
                                      );
                                    }}
                                  />
                                  <InputNumber
                                    value={item.quantity}
                                    min={0}
                                    onChange={(value) => {
                                      if (value !== null && !isNaN(value)) {
                                        form.setFieldValue(
                                          ["services", itemIndex, "quantity"],
                                          value,
                                        );
                                      }
                                    }}
                                    controls={false}
                                    className="custom-input-number rounded-[8px]"
                                    style={{
                                      width: `${String(item.quantity).length * 12}px`,
                                      minWidth: "30px",
                                      maxWidth: "200px",
                                    }}
                                  />
                                  <Button.Icon
                                    icon={<div className="text-white">+</div>}
                                    className="size-[20px] !rounded-[6.6px] bg-green5"
                                    onClick={() => {
                                      const currQuantity = item.quantity;
                                      const nextQuantity = currQuantity + 1;
                                      form.setFieldValue(
                                        ["services", itemIndex, "quantity"],
                                        nextQuantity,
                                      );
                                    }}
                                  />
                                </div>
                              );
                            }}
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                    <Collapse
                      items={[
                        {
                          key: "1",
                          label: (
                            <div className="flex items-center gap-[4px]">
                              <img
                                src={InformationIcon}
                                alt=""
                                className="size-[14px] object-cover"
                              />
                              <div className="text-xs font-semibold">
                                Thông tin bảo hành
                              </div>
                            </div>
                          ),
                          children: (
                            <div className="flex flex-col gap-[10px] pt-[10px]">
                              <Divider className="m-0" />
                              <div className="text-[11px] font-normal">
                                <span className="font-semibold">
                                  Thời gian bảo hành:{" "}
                                </span>
                                <span>6 tháng</span>
                              </div>
                              <Divider className="m-0" />
                              <div className="flex flex-col gap-[10px] text-[11px] font-normal">
                                <div className="font-semibold">
                                  Mô tả bảo hành:
                                </div>
                                <ul className="pl-4">
                                  <li className="list-disc">
                                    <span className="font-medium">
                                      Bảo hành máy nén:
                                    </span>{" "}
                                    2 năm (chỉ áp dụng cho máy nén Inverter).
                                  </li>
                                  <li className="list-disc">
                                    <span className="font-medium">
                                      Dịch vụ:
                                    </span>{" "}
                                    Sửa chữa & thay thế linh kiện miễn phí nếu
                                    lỗi do nhà sản xuất.
                                  </li>
                                  <li className="list-disc">
                                    <span className="font-medium">
                                      Điều kiện:
                                    </span>{" "}
                                    Cần có hóa đơn mua hàng hoặc phiếu bảo hành,
                                    số sê-ri còn nguyên vẹn.
                                  </li>
                                  <li className="list-disc">
                                    <span className="font-medium">
                                      Không bảo hành:
                                    </span>{" "}
                                    Nếu hư do rơi vỡ, dùng sai hướng dẫn, chập
                                    điện, thiên tai, sửa ngoài hãng.
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
                      ]}
                      bordered={false}
                      expandIconPosition="end"
                    />
                    {index < fields.length - 1 ? (
                      <Divider className="m-0" />
                    ) : null}
                  </React.Fragment>
                );
              })}
              {/* Total price */}
              <Divider className="m-0" />
              <div className="flex justify-between">
                <div className="text-base font-semibold text-gray7">
                  Tổng tiền
                </div>
                <div className="text-lg font-semibold">
                  {formatCurrency(100000)}
                </div>
              </div>
            </div>
          )}
        </Form.List>
      </Form>
    </div>
  );
};

type Props = {
  form: FormInstance;
};

const data = [
  {
    id: "1",
    thumbnail: ServiceImg,
    title: "Bảo hành máy lạnh Toshiba 6 tháng",
    price: 300000,
    quantity: 2,
  },
  {
    id: "2",
    thumbnail: ServiceImg,
    title: "Bảo hành máy lạnh Toshiba 6 tháng",
    price: 300000,
    quantity: 1,
  },
];
