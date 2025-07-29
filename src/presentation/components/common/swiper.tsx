import React, { FC, useRef } from "react";
import { Swiper as OriginalSwiper, SwiperProps } from "swiper/react";
import { Swiper as OriginalSwiperType } from "swiper";
import PrevIcon from "../../static/icons/chevron-left.png";

const Swiper: FC<Props> = ({ children, ...props }) => {
  const swiperRef = useRef<OriginalSwiperType>();

  return (
    <div className="relative">
      <OriginalSwiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        {...props}
      >
        {children}
      </OriginalSwiper>
      <div className="absolute inset-x-0 top-1/2 z-[999] flex -translate-y-1/2 justify-between px-[16px] text-white">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex size-[32px] items-center justify-center rounded-full border border-gray2 bg-[#FFFFFF] bg-opacity-60"
        >
          <img src={PrevIcon} className="size-[20px]" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex size-[32px] items-center justify-center rounded-full border border-gray2 bg-[#FFFFFF] bg-opacity-60"
        >
          <img src={PrevIcon} className="size-[20px] rotate-180" />
        </button>
      </div>
    </div>
  );
};

export { Swiper };

type Props = SwiperProps;
