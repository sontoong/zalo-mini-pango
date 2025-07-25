import React from "react";
import { Status } from "./status";
import { CustomerDetails } from "./customer-details";
import { PaymentDetails } from "./payment-details";
import { OrderDetails } from "./order-details";
import { SupportButton } from "./support-button";

const Details = () => {
  return (
    <div className="flex flex-col gap-[14px]">
      <Status type="1" statusId="1" />
      <div className="flex flex-col gap-[12px]">
        <CustomerDetails />
        <PaymentDetails />
        <OrderDetails />
      </div>
      <SupportButton />
    </div>
  );
};

export default Details;
