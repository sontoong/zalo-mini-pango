import React, { FC, useEffect, useState } from "react";
import { SearchBarNoPopup } from "../common/search-bar";
import { FilterServiceList } from "./filter-services";
import { ProductList } from "./product-list";
import { CartFloatButton } from "../cart";
import clsx from "clsx";
import { Segmented, SegmentedProps } from "antd";
import { useNavigate } from "react-router-dom";
import { Form } from "../common/form";

const TabBuy: FC<Props> = ({ scrollY, setCurrentTab, currentTab }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const showSearchFloat = scrollY > 100;

  function handleSearch(values) {
    console.log(values);
    navigate("/products/search");
  }

  return (
    <>
      <div
        className={clsx("fixed inset-x-0 !z-[999] hidden bg-white p-[10px]", {
          "!block": showSearchFloat,
          "pointer-events-none": !showSearchFloat,
        })}
        style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
      >
        <Form form={form} onFinish={handleSearch}>
          <Form.Item name="search" noStyle>
            <SearchBarNoPopup
              placeholder="Tìm sản phẩm/ số seri sản phẩm"
              className="h-[44px] rounded-[8px]"
              onSubmit={form.submit}
            />
          </Form.Item>
        </Form>
      </div>
      <>
        <div className="bg-surface px-[10px] pb-[12px] pt-[10px]">
          <Segmented
            options={tabOptions}
            onChange={(value) => {
              setCurrentTab(value);
            }}
            value={currentTab}
            height={32}
            block
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="px-[10px]">
            <Form form={form} onFinish={handleSearch}>
              <Form.Item name="search" noStyle>
                <SearchBarNoPopup
                  placeholder="Tìm sản phẩm/ số seri sản phẩm"
                  className="h-[44px] rounded-[8px]"
                  onSubmit={form.submit}
                />
              </Form.Item>
            </Form>
          </div>
          <FilterServiceList />
          <ProductList />
          <CartFloatButton totalPrice={10000000} />
        </div>
      </>
    </>
  );
};

export default TabBuy;

type Props = {
  scrollY: number;
  currentTab: string;
  setCurrentTab: any;
};

const tabOptions: SegmentedProps<string>["options"] = [
  { label: "Mua hàng", value: "buy" },
  {
    label: "Đơn hàng",
    value: "history",
  },
];
