import React from "react";
import ProductImg from "../../static/service.png";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import CartAddIcon from "../icons/CartAddIcon";
import { Form } from "../common/form";
import clsx from "clsx";
import { SearchBarNoPopup } from "../common/search-bar";
import { CartFloatButton } from "../cart";

const ProductList = () => {
  const [form] = Form.useForm();

  function handleSearch(values) {
    console.log(values);
  }

  return (
    <>
      <div
        className={clsx(
          "sticky inset-x-0 top-0 !z-[999] block bg-white p-[10px]",
        )}
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
      <div className="flex flex-col gap-[14px] px-[16px] pt-[14px]">
        <div className="text-sm font-normal">
          Tìm thấy <span className="font-medium">12</span> kết quả phù hợp với
          từ khóa <span className="font-medium">Tủ lạnh</span>
        </div>
        <div className="grid grid-cols-2 gap-[12px]">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductListItem key={index} />
          ))}
        </div>
      </div>
      <CartFloatButton totalPrice={10000000} />
    </>
  );
};

const ProductListItem = () => {
  return (
    <div className="flex flex-col gap-[12px] rounded-[12px] border border-gray1 bg-white p-[12px]">
      <img src={ProductImg} alt="" className="h-[100px] object-contain" />
      <div className="flex flex-col">
        <div className="text-base font-medium leading-[120%] text-gray8">
          Máy lạnh toshiba ECMS-2024
        </div>
        <div className="text-lg font-bold text-red6">
          {formatCurrency(10000000)}
        </div>
        <div className="text-xs font-medium text-gray6 line-through">
          {formatCurrency(12000000)}
        </div>
      </div>
      <div className="flex justify-between gap-[8px]">
        <Button.Icon
          icon={<CartAddIcon className="text-green6" />}
          className="size-[30px] !rounded-[8px] bg-green2"
        />
        <Button
          text={
            <div className="text-[11px] font-medium text-white">Mua ngay</div>
          }
          className="flex h-[30px] items-center justify-center rounded-[8px] bg-green6"
        />
      </div>
    </div>
  );
};

export default ProductList;
