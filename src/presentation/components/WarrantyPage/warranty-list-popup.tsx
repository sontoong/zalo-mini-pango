import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import ServiceImg from "../../static/service.png";
import { Form } from "../common/form";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import { Divider, InputNumber } from "antd";
import { Radio } from "../common/radio";
import { Collapse } from "../common/collapse";
import InformationIcon from "../../static/icons/information-icon-green.png";
import { CartFloatButton } from "../cart";
import { useNavigate } from "react-router-dom";

const WarrantyListPopup: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  const onFinish = (values: typeof initialValues) => {
    console.log({
      packId: values.warrantyPackId,
      quantity: values.warrantyPacks.find(
        (pack) => pack.id === values.warrantyPackId,
      )?.quantity,
    });
    setVisible(false);
  };

  const initialValues = {
    warrantyPacks: data,
    warrantyPackId: "",
  };

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="absolute inset-x-[16px] flex items-center justify-center">
                <div className="text-lg font-semibold">Chọn gói bảo hành</div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
            form.resetFields();
          }}
          mask
          handler={false}
          unmountOnClose
          height={"90vh"}
          style={{
            background: "#FFF",
            borderRadius: "12px 12px 0 0",
          }}
        >
          <Divider className="mb-0 mt-[12px]" />
          <div className="flex-1 overflow-auto px-[16px] pt-[12px]">
            <Form form={form} onFinish={onFinish} initialValues={initialValues}>
              {/* Tracking pack quantity */}
              <Form.List name="warrantyPacks">
                {(fields) => (
                  <div style={{ display: "none" }}>
                    {fields.map(({ key, ...field }, index) => (
                      <Form.Item
                        key={index}
                        {...field}
                        name={[field.name, "quantity"]}
                      >
                        <input type="hidden" />
                      </Form.Item>
                    ))}
                  </div>
                )}
              </Form.List>
              {/* Pack list */}
              <div className="flex flex-col gap-[12px] overflow-auto pb-[150px]">
                <Form.Item name="warrantyPackId" noStyle>
                  <Radio.Group
                    items={data.map((item, index) => ({
                      index: index,
                      item: item,
                      value: item.id,
                    }))}
                    render={(item) => {
                      const packIndex = item?.index;
                      const pack = item?.item;
                      return (
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
                              {pack.title}
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-semibold leading-[120%] text-gray7">
                                {formatCurrency(pack.price)}
                              </div>
                              <Form.Item
                                noStyle
                                shouldUpdate={(prevValues, curValues) =>
                                  prevValues.warrantyPacks !==
                                  curValues.warrantyPacks
                                }
                              >
                                {() => {
                                  const item =
                                    form.getFieldValue("warrantyPacks")[
                                      packIndex
                                    ];
                                  return (
                                    <div className="flex items-center gap-[16px]">
                                      <Button.Icon
                                        icon={
                                          <div className="text-black">-</div>
                                        }
                                        className="size-[20px] !rounded-[6.6px] bg-green3"
                                        onClick={() => {
                                          const currQuantity = item.quantity;
                                          const nextQuantity = Math.max(
                                            currQuantity - 1,
                                            0,
                                          );
                                          form.setFieldValue(
                                            [
                                              "warrantyPacks",
                                              packIndex,
                                              "quantity",
                                            ],
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
                                              [
                                                "warrantyPacks",
                                                packIndex,
                                                "quantity",
                                              ],
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
                                        icon={
                                          <div className="text-white">+</div>
                                        }
                                        className="size-[20px] !rounded-[6.6px] bg-green5"
                                        onClick={() => {
                                          const currQuantity = item.quantity;
                                          const nextQuantity = currQuantity + 1;
                                          form.setFieldValue(
                                            [
                                              "warrantyPacks",
                                              packIndex,
                                              "quantity",
                                            ],
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
                      );
                    }}
                    extraRender={(item) => (
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
                                      Cần có hóa đơn mua hàng hoặc phiếu bảo
                                      hành, số sê-ri còn nguyên vẹn.
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
                            className:
                              "bg-yellow1 p-[12px] !rounded-[8px] mt-[8px]",
                          },
                        ]}
                        bordered={false}
                        expandIconPosition="end"
                      />
                    )}
                    divider={<Divider className="my-[12px]" />}
                  />
                </Form.Item>
              </div>
            </Form>
          </div>
          {/* Footer */}
          <CartFloatButton
            onBuyButtonClick={() => navigate("/order-warranty-success")}
          />
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { WarrantyListPopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
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
