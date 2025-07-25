import React from "react";
import { Form } from "../common/form";
import { WarrantyList } from "./warranty-list";
import { CustomerInformationForm } from "./customer-information";
import { PaymentMethodForm } from "./payment-method";
import { Divider } from "antd";
import { Button } from "../common/button";
import { formatCurrency } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { OrderFormSubmit } from "./order-form-submit";

const OrderForm = () => {
  const navigate = useNavigate();

  const [warrantyListForm] = Form.useForm();
  const [customerInformationForm] = Form.useForm();
  const [paymentMethodForm] = Form.useForm();

  function handleSubmit() {
    const values = {
      ...warrantyListForm.getFieldsValue(),
      ...customerInformationForm.getFieldsValue(),
      ...paymentMethodForm.getFieldsValue(),
    };
    console.log(values);
    const paymentMethod = values.paymentMethod;

    navigate(
      `/order-warranty-success${paymentMethod ? "?method=" + paymentMethod : ""}`,
    );
  }

  return (
    <div className="flex flex-col gap-[20px] pb-[100px]">
      <WarrantyList form={warrantyListForm} />
      <Divider className="m-0 border-[2px]" />
      <CustomerInformationForm form={customerInformationForm} />
      <Divider className="m-0 border-[2px]" />
      <PaymentMethodForm form={paymentMethodForm} />
      <OrderFormSubmit onSubmit={handleSubmit} />
    </div>
  );
};

export default OrderForm;
