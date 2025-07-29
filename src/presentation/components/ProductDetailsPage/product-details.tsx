import React from "react";
import { HeadSection } from "./head";
import { Divider } from "antd";
import { InformationTabs } from "./information-tabs";
import { CartFloatButton } from "../cart";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[16px]">
      <HeadSection />
      <Divider className="m-0 border-[2px]" />
      <InformationTabs />
      <CartFloatButton onBuyButtonClick={() => navigate("/order-product")} />
    </div>
  );
};

export default ProductDetails;
