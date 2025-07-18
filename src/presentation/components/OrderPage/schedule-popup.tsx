import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import CloseIcon from "../../static/icons/close-icon.png";
import { Button } from "../common/button";
import { Divider, FormInstance } from "antd";
import { Scheduler } from "../common/scheduler";
import dayjs from "dayjs";

const SchedulePopup: FC<Props> = ({ children, form }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [schedule, setSchedule] = useState({ date: dayjs(), time: "" });

  function handleSubmit() {
    form.setFieldsValue({
      date: schedule.date.format("DD [tháng] M YYYY"),
      time: schedule.time,
    });
    setVisible(false);
  }

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="absolute inset-x-[16px] flex items-center">
                <div className="text-lg font-semibold">Chọn lịch bảo dưỡng</div>
                <div
                  className="absolute right-0 ml-auto size-[16px]"
                  onClick={() => setVisible(false)}
                >
                  <img
                    src={CloseIcon}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          mask
          handler={false}
          unmountOnClose
          height={"70vh"}
          style={{
            background: "#FFF",
            borderRadius: "12px 12px 0 0",
          }}
        >
          <div className="flex-1 px-[16px]">
            <Divider className="my-[12px]" />
            <Scheduler
              timeSlots={timeSlots}
              selectedDate={schedule.date}
              selectedTime={schedule.time}
              onChange={setSchedule}
            />
          </div>
          <Button
            text={
              <div className="text-lg font-medium text-white">Xác nhận</div>
            }
            className="fixed inset-x-[16px] bottom-[24px] h-[50px] flex-none rounded-[12px] bg-green6"
            onClick={handleSubmit}
          />
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { SchedulePopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
  form: FormInstance;
};

const timeSlots = ["06:00", "07:00", "08:00", "09:00", "10:30", "06:30"].concat(
  Array.from({ length: 19 }).map((_, index) => `06:${30 + index}`),
);
