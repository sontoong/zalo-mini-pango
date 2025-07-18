import React, { FC } from "react";
import { Collapse } from "../common/collapse";
import { Form } from "../common/form";
import { CollapseProps, Divider, FormInstance, Input, InputNumber } from "antd";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import InformationIcon from "../../static/icons/information-icon-green.png";

const ServiceInformation: FC<Props> = ({ form }) => {
  const initialValues = {
    services: data,
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex flex-col gap-[8px]">
          <div className="text-lg font-semibold">Dịch vụ</div>
        </div>
      ),
      children: (
        <Form form={form} initialValues={initialValues} className="flex-1">
          <Form.List name="services">
            {(fields, { remove }) => (
              <div className="flex flex-col gap-[12px] overflow-auto">
                {/* Service Item */}
                {fields.map((field, index) => {
                  const itemIndex = field.name;
                  const item = form.getFieldValue("services")[itemIndex];

                  return (
                    <React.Fragment key={index}>
                      <div className="flex flex-col gap-[8px]">
                        <div className="flex flex-col gap-[12px]">
                          {/* Title */}
                          <div className="text-base font-semibold">
                            {item.title}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-semibold text-gray7">
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
                                        if (nextQuantity === 0) {
                                          remove(itemIndex);
                                        } else {
                                          form.setFieldValue(
                                            ["services", itemIndex, "quantity"],
                                            nextQuantity,
                                          );
                                        }
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
                        <ServiceInformationCollapse />
                      </div>
                      {index < fields.length - 1 ? (
                        <Divider className="m-0" />
                      ) : null}
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </Form.List>
          <Divider className="my-[8px]" />
          <div className="flex items-center justify-between">
            <div className="text-base font-semibold text-gray7">Tổng tiền</div>
            <div className="text-base font-semibold text-gray7">
              {formatCurrency(100000)}
            </div>
          </div>
        </Form>
      ),
      styles: {
        header: {
          alignItems: "center",
          padding: 0,
        },
        body: {
          padding: 0,
          paddingTop: "8px",
        },
      },
      className: "bg-white p-[12px]",
    },
  ];

  return (
    <Collapse
      items={items}
      bordered={false}
      expandIconPosition="end"
      className="overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
      defaultActiveKey={1}
    />
  );
};

const ServiceInformationCollapse = () => {
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
          <div className="text-xs font-semibold">Thông tin bảo dưỡng</div>
        </div>
      ),
      children: (
        <div className="flex flex-col gap-[10px] pt-[10px]">
          <Divider className="m-0" />
          <div className="flex flex-col gap-[10px] text-[11px] font-normal">
            <div className="font-semibold">Mô tả bảo dưỡng:</div>
            <ul className="pl-4">
              <li className="list-disc">
                <span className="font-medium">Bảo hành máy nén:</span> 2 năm
                (chỉ áp dụng cho máy nén Inverter).
              </li>
              <li className="list-disc">
                <span className="font-medium">Dịch vụ:</span> Sửa chữa & thay
                thế linh kiện miễn phí nếu lỗi do nhà sản xuất.
              </li>
              <li className="list-disc">
                <span className="font-medium">Điều kiện:</span> Cần có hóa đơn
                mua hàng hoặc phiếu bảo hành, số sê-ri còn nguyên vẹn.
              </li>
              <li className="list-disc">
                <span className="font-medium">Không bảo hành:</span> Nếu hư do
                rơi vỡ, dùng sai hướng dẫn, chập điện, thiên tai, sửa ngoài
                hãng.
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

  return <Collapse items={items} bordered={false} expandIconPosition="end" />;
};

export { ServiceInformation };

type Props = {
  form: FormInstance;
};

const data = [
  {
    title: "Vệ sinh & Bảo dưỡng - Máy gi(Có tháo lồng giặt)",
    price: 300000,
    quantity: 2,
  },
  {
    title: "Vệ sinh & bảo dưỡng - Điều hoà tiêu chuẩn",
    price: 300000,
    quantity: 1,
  },
];
