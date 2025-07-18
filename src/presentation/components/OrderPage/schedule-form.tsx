import { CollapseProps, FormInstance, Input } from "antd";
import React, { FC } from "react";
import { Collapse } from "../common/collapse";
import { Form } from "../common/form";
import CalendarIcon from "../../static/icons/calendar-icon-green.png";
import ClockIcon from "../../static/icons/clock-icon-green.png";
import { SchedulePopup } from "./schedule-popup";

const ScheduleForm: FC<Props> = ({ form }) => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: <div className="text-lg font-semibold">Lịch hẹn</div>,
      children: (
        <Form form={form} className="flex flex-col gap-[8px]">
          <div className="flex items-center gap-[8px]">
            <SchedulePopup form={form}>
              {({ open }) => {
                return (
                  <>
                    <Form.Item
                      name="date"
                      label="Ngày báo đường"
                      required
                      labelCol={{ style: { fontSize: "12px", padding: 0 } }}
                      style={{ margin: 0 }}
                    >
                      <Input
                        className="h-[40px] rounded-[8px] text-xs font-normal"
                        suffix={
                          <img
                            src={CalendarIcon}
                            className="size-[24px] object-cover"
                          />
                        }
                        readOnly
                        onClick={open}
                      />
                    </Form.Item>
                    <Form.Item
                      name="time"
                      label="Thời gian"
                      required
                      labelCol={{ style: { fontSize: "12px", padding: 0 } }}
                      style={{ margin: 0 }}
                    >
                      <Input
                        className="h-[40px] rounded-[8px] text-xs font-normal"
                        suffix={
                          <img
                            src={ClockIcon}
                            className="size-[24px] object-cover"
                          />
                        }
                        readOnly
                        onClick={open}
                      />
                    </Form.Item>
                  </>
                );
              }}
            </SchedulePopup>
          </div>
          <Form.Item
            name="notes"
            label="Ghi chú"
            required
            labelCol={{ style: { fontSize: "12px", padding: 0 } }}
            style={{ margin: 0 }}
          >
            <Input.TextArea
              className="rounded-[8px] text-xs font-normal"
              autoSize={{ minRows: 4 }}
            />
          </Form.Item>
        </Form>
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

export { ScheduleForm };

type Props = {
  form: FormInstance;
};
