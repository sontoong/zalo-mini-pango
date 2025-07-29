import React from "react";
import { Form } from "../common/form";
import { CustomerInformationForm } from "./customer-information";
import { PaymentMethodForm } from "./payment-method";
import { useNavigate } from "react-router-dom";
import { OrderFormSubmit } from "./order-form-submit";
import { ProductList } from "./product-list";

const OrderForm = () => {
  const navigate = useNavigate();

  const [customerInformationForm] = Form.useForm();
  const [productListForm] = Form.useForm();
  const [paymentMethodForm] = Form.useForm();

  function handleSubmit() {
    const values = {
      ...productListForm.getFieldsValue(),
      ...customerInformationForm.getFieldsValue(),
      ...paymentMethodForm.getFieldsValue(),
    };

    navigate(`/order-product-success`);
  }

  return (
    <div className="flex flex-col gap-[12px] pb-[100px]">
      <CustomerInformationForm form={customerInformationForm} />
      <ProductList form={productListForm} />
      <PaymentMethodForm form={paymentMethodForm} />
      <OrderFormSubmit onSubmit={handleSubmit} />
    </div>
  );
};

export default OrderForm;
