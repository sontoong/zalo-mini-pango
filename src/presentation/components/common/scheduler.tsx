import React, { useState, useRef, useCallback, FC, useEffect } from "react";
import { DatePicker, Divider } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import ChevronDown from "../../static/icons/chevron-down-small.png";
import clsx from "clsx";

const Scheduler: FC<Props> = ({
  timeSlots,
  selectedDate = dayjs(),
  selectedTime,
  onChange,
}) => {
  const [selectedDateState, setSelectedDateState] =
    useState<Dayjs>(selectedDate);
  const [selectedTimeState, setSelectedTimeState] = useState<
    string | undefined
  >(selectedTime);

  useEffect(() => {
    onDateChange(selectedDateState);
    onChange?.({ date: selectedDateState, time: selectedTimeState });
  }, [selectedDateState, selectedTimeState]);

  const swiperRef = useRef<SwiperType | null>(null);

  const weekdays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

  const getWeekDates = useCallback((offset: number) => {
    const startOfWeek = dayjs().startOf("week").add(offset, "week");
    return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
  }, []);

  const onDateChange = (date: Dayjs) => {
    if (date >= dayjs().startOf("day")) {
      setSelectedDateState(date);

      const diffInWeeks = date.diff(dayjs().startOf("week"), "week");

      if (swiperRef.current) {
        swiperRef.current.slideTo(diffInWeeks);
      }
    }
  };

  const onTimeSelect = (time: string) => {
    setSelectedTimeState(time);
  };

  const disabledDate = (date: Dayjs) => {
    return date.isBefore(dayjs().startOf("day"));
  };

  const renderWeekSlide = (offset: number) => {
    const dates = getWeekDates(offset);
    return (
      <div className="flex w-full justify-between">
        {dates.map((date, index) => {
          const isSelected = date.isSame(selectedDateState, "day");
          const isToday = date.isSame(dayjs(), "day");

          return (
            <button
              key={index}
              onClick={() => onDateChange(date)}
              className={clsx(
                "flex h-[64px] flex-col items-center gap-[6px] rounded-[24px] px-[10px] py-[8px]",
                {
                  "bg-green6 text-white": isSelected,
                  "bg-green2": isToday,
                },
              )}
            >
              <div className="text-lg font-medium">{date.date()}</div>
              <div
                className={clsx("text-xs font-normal text-gray7", {
                  "!text-white": isSelected,
                })}
              >
                {weekdays[index]}
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  const virtualSlides = Array.from({ length: 100 }).map((_, index) => {
    const offset = index;
    return { offset };
  });

  return (
    <div className="flex flex-col gap-[20px]">
      {/* Date Selection */}
      <div className="flex flex-col gap-[8px]">
        {/* Head */}
        <div className="flex items-center justify-between">
          <div className="text-base font-semibold">Chọn ngày</div>
          <DatePicker
            disabledDate={disabledDate}
            variant="borderless"
            format="[Tháng] M[/]YYYY"
            allowClear={false}
            className="w-[120px] p-0"
            inputReadOnly
            suffixIcon={
              <img
                src={ChevronDown}
                alt="ChevronDown"
                className="size-[20px] object-contain"
              />
            }
            value={selectedDateState}
            onChange={(date) => date && onDateChange(date)}
          />
        </div>
        <Divider className="m-0" />
        <Swiper
          modules={[Virtual]}
          spaceBetween={0}
          slidesPerView={1}
          virtual
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="size-full"
        >
          {virtualSlides.map((slide, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              {renderWeekSlide(slide.offset)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Time Slots */}
      <div className="flex flex-col gap-[14px]">
        <div className="text-[15px] font-medium">Chọn khung giờ</div>
        <div className="grid grid-cols-5 gap-[12px]">
          {timeSlots.map((time, index) => {
            const isSelected = time === selectedTimeState;
            return (
              <button
                key={index}
                onClick={() => onTimeSelect(time)}
                className={clsx("h-[42px] rounded-[8px] border", {
                  "border-stroke2": !isSelected,
                  "border-green6 bg-green1": isSelected,
                })}
              >
                <div
                  className={clsx("text-[15px]", {
                    "font-normal": !isSelected,
                    "font-medium text-green6": isSelected,
                  })}
                >
                  {time}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Scheduler };

type Props = {
  timeSlots: string[];
  selectedDate?: Dayjs;
  selectedTime?: string;
  onChange?: any;
};
