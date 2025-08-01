import React, { FC } from "react";
import { SearchBar } from "./search-bar";
import { Tags } from "./tags";
import { Form } from "../common/form";
import { Button } from "../common/button";
import { Tag } from "../common/tag";
import ClockIcon from "../../static/icons/clock-icon-red.png";
import AddIcon from "../../static/icons/add-icon.png";
import { formatCurrency } from "../../utils/helpers";
import { InputNumber } from "antd";
import { CartFloatButton } from "../cart";
import { WarrantyListPopup } from "./warranty-list-popup";
import { useNavigate } from "react-router-dom";
import {
  warrantyStatus,
  WarrantyStatusType,
} from "../../constants/warranty-status";
import clsx from "clsx";

const WarrantyList: FC<Props> = ({ scrollY }) => {
  const showSearchFloat = scrollY > 100;
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const initialValues = {
    tag: "1",
    services: data,
  };

  return (
    <>
      <div
        className={clsx(
          "fixed inset-x-0 !z-[999] hidden bg-white px-[16px] py-[10px]",
          {
            "!block": showSearchFloat,
            "pointer-events-none": !showSearchFloat,
          },
        )}
        style={{
          boxShadow: "0px 4px 40px 0px #AEB5AF1F",
        }}
      >
        <Form form={form} initialValues={initialValues}>
          <Form.Item name="keywords" noStyle>
            <SearchBar />
          </Form.Item>
        </Form>
      </div>
      <Form
        form={form}
        initialValues={initialValues}
        className="px-[16px] py-[16px]"
      >
        <div className="flex flex-col gap-[14px]">
          <div className="flex flex-col gap-[12px]">
            <Form form={form} initialValues={initialValues}>
              <Form.Item name="keywords" noStyle>
                <SearchBar />
              </Form.Item>
            </Form>
            <div className="text-xl font-semibold">Danh sách bảo hành</div>
            <Form.Item name="tag" noStyle>
              <Tags />
            </Form.Item>
          </div>
          <div className="flex flex-col gap-[12px]">
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, curValues) =>
                prevValues.tag !== curValues.tag
              }
            >
              {({ getFieldValue }) => (
                <Form.List
                  name="services"
                  key={`services-list-${getFieldValue("tag")}`}
                >
                  {(fields) => (
                    <div
                      className={clsx(
                        "flex flex-col gap-[12px] overflow-auto",
                        {
                          "pb-[100px]":
                            getFieldValue("tag") !== warrantyStatus["2"].key,
                        },
                      )}
                    >
                      {fields.map((field, index) => {
                        const itemIndex = field.name;
                        const item = form.getFieldValue("services")[itemIndex];
                        const status = form.getFieldValue("tag");

                        if (item.status !== status) {
                          return null;
                        }

                        return (
                          <WarrantyListItem
                            key={index}
                            item={item}
                            form={form}
                            itemIndex={itemIndex}
                          />
                        );
                      })}
                    </div>
                  )}
                </Form.List>
              )}
            </Form.Item>
          </div>
        </div>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, curValues) =>
            prevValues.tag !== curValues.tag
          }
        >
          {({ getFieldValue }) => {
            const status = getFieldValue("tag");
            return (
              <>
                {status !== warrantyStatus["2"].key ? (
                  <CartFloatButton
                    totalPrice={10000000}
                    onBuyButtonClick={() => navigate("/order-warranty")}
                  />
                ) : null}
              </>
            );
          }}
        </Form.Item>
      </Form>
    </>
  );
};

const WarrantyListItem: FC<{ item: any; form: any; itemIndex: any }> = ({
  item,
  form,
  itemIndex,
}) => {
  const itemStatus = warrantyStatus[item.status];

  const checkStatus = (status: WarrantyStatusType) => {
    return item.status === status;
  };

  return (
    <div
      className="flex flex-col gap-[12px] rounded-[12px] border border-gray1 bg-white p-[12px]"
      style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
    >
      {/* Title */}
      <div className="flex h-[32px] items-center justify-between">
        <div className="text-base font-semibold">Máy lạnh Toshiba 2024</div>
        {checkStatus(warrantyStatus["1"].key) ? (
          <WarrantyListPopup>
            {({ open }) => (
              <Button
                text={
                  <div className="text-sm font-medium text-white">Gia hạn</div>
                }
                className="flex h-full w-[73px] flex-none items-center justify-center rounded-[8px] bg-green6"
                onClick={open}
              />
            )}
          </WarrantyListPopup>
        ) : null}
      </div>
      {/* Information */}
      <div className="flex flex-col gap-[12px]">
        <div className="flex justify-between">
          <div className="items-center text-xs font-medium text-gray6">
            Số serial
          </div>
          <div className="text-sm font-medium">1232434</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-gray6">Model</div>
          <div className="text-sm font-medium">QA-2343445</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-gray6">Ngày mua</div>
          <div className="text-sm font-medium">23 tháng 5 2025</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-gray6">
            Trạng thái bảo hành
          </div>
          <div className="text-sm font-medium">
            <Tag
              className="m-0 flex h-[25px] items-center justify-center rounded-[24px]"
              style={{
                background: itemStatus.bgColor,
                borderColor: itemStatus.borderColor,
                color: itemStatus.color,
              }}
            >
              <div className="text-xs font-semibold">{itemStatus.label}</div>
            </Tag>
          </div>
        </div>
        {checkStatus(warrantyStatus["1"].key) ? (
          <div className="flex justify-between">
            <div className="bg-yellow1 p-[4px] text-[11px] font-medium leading-[120%] text-yellow8">
              Hết hạn bảo hành vào 20/12/2025
            </div>
            <div className="flex items-center gap-[4px]">
              <img src={ClockIcon} className="size-[12px] object-contain" />
              <div className="text-[11px] font-semibold text-red6">
                Còn 38 ngày
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {/* Buy */}
      {checkStatus(warrantyStatus["1"].key) ? (
        <div className="flex flex-col gap-[8px] rounded-[8px] border-2 border-dashed border-gray2 p-[12px]">
          <div className="flex items-center gap-[8px]">
            <WarrantyListPopup>
              {({ open }) => (
                <Button.Icon
                  icon={
                    <img src={AddIcon} className="size-full object-contain" />
                  }
                  className="flex size-[18px] items-center justify-center rounded-[6px] bg-green5 p-[3px]"
                  onClick={open}
                />
              )}
            </WarrantyListPopup>
            <div className="text-sm font-semibold">
              Bảo hành máy lạnh Toshiba 6 tháng
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm font-semibold text-gray7">
              {formatCurrency(300000)}
            </div>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, curValues) =>
                prevValues.services !== curValues.services
              }
            >
              {() => {
                const item = form.getFieldValue("services")[itemIndex];
                return (
                  <div className="flex items-center gap-[16px]">
                    <Button.Icon
                      icon={<div className="text-black">-</div>}
                      className="size-[20px] !rounded-[6.6px] bg-green3"
                      onClick={() => {
                        const currQuantity = item.quantity;
                        const nextQuantity = Math.max(currQuantity - 1, 0);

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
      ) : (
        <div className="rounded-[4px] bg-gray1 p-[4px] text-center">
          <span className="text-[11px] font-medium text-gray7">
            Đã hết hạn bảo hành vào 20/12/2025
          </span>
        </div>
      )}
    </div>
  );
};

export default WarrantyList;

type Props = {
  scrollY: number;
};

const data = [
  {
    title: "Bảo hành máy lạnh Toshiba 6 tháng",
    price: 300000,
    quantity: 2,
    status: "1",
  },
  {
    title: "Bảo hành máy lạnh Toshiba 6 tháng",
    price: 300000,
    quantity: 1,
    status: "1",
  },
  {
    title: "Bảo hành máy lạnh Toshiba 2024",
    price: 300000,
    quantity: 1,
    status: "2",
  },
  {
    title: "Bảo hành máy lạnh Toshiba 2024",
    price: 300000,
    quantity: 1,
    status: "2",
  },
];
