import React from "react";
import { CustomerInformationForm } from "./customer-information-form";
import { ScheduleForm } from "./schedule-form";
import { ServiceInformation } from "./service-information";
import { Form } from "../common/form";
import { OrderFormSubmit } from "./order-form-submit";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const navigate = useNavigate();

  const [customerForm] = Form.useForm();
  const [scheduleForm] = Form.useForm();
  const [serviceForm] = Form.useForm();

  function handleSubmit() {
    const values = {
      ...customerForm.getFieldsValue(),
      ...scheduleForm.getFieldsValue(),
      ...serviceForm.getFieldsValue(),
    };
    console.log(values);
    navigate("/order-success");
  }

  return (
    <div className="flex flex-col gap-[12px] pb-[100px]">
      <CustomerInformationForm form={customerForm} />
      <ScheduleForm form={scheduleForm} />
      <ServiceInformation form={serviceForm} />
      <OrderFormSubmit onSubmit={handleSubmit} />
    </div>
  );
};

export default OrderForm;
