import React, { useState, useEffect, FC } from "react";

const TimeCountdown: FC<Props> = (props) => {
  const [time, setTime] = useState({
    hours: props.hours,
    minutes: props.minutes,
    seconds: props.seconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let totalSeconds =
          prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds;

        if (totalSeconds <= 0) {
          return prevTime;
        }

        totalSeconds -= 1;

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="flex items-center justify-center text-lg font-bold">
      {/* Hours */}
      <div className="flex items-center gap-[12px]">
        <div className="flex items-center">
          <div className="bg-coundown-linear-gradient mr-1 rounded-lg px-[6.6px] py-[2px] text-[#F74850]">
            {formatNumber(time.hours)[0]}
          </div>
          <div className="bg-coundown-linear-gradient rounded-lg px-[6.6px] py-[2px] text-[#F74850]">
            {formatNumber(time.hours)[1]}
          </div>
        </div>
        <div className="text-[10px] font-normal">Giờ</div>
      </div>

      {/* Separator */}
      <div className="mx-2 text-[#6D7D93]">:</div>

      {/* Minutes */}
      <div className="flex items-center gap-[12px]">
        <div className="flex items-center">
          <div className="bg-coundown-linear-gradient mr-1 rounded-lg px-[6.6px] py-[2px] text-[#F74850]">
            {formatNumber(time.minutes)[0]}
          </div>
          <div className="bg-coundown-linear-gradient rounded-lg px-[6.6px] py-[2px] text-[#F74850]">
            {formatNumber(time.minutes)[1]}
          </div>
        </div>
        <div className="text-[10px] font-normal">Phút</div>
      </div>

      {/* Separator */}
      <div className="mx-2 text-gray-700">:</div>

      {/* Seconds */}
      <div className="flex items-center gap-[12px]">
        <div className="flex items-center">
          <div className="bg-coundown-linear-gradient mr-1 rounded-lg px-[6.6px] py-[2px] text-[#F74850]">
            {formatNumber(time.seconds)[0]}
          </div>
          <div className="bg-coundown-linear-gradient rounded-lg px-[6.6px] py-[2px] text-[#F74850]">
            {formatNumber(time.seconds)[1]}
          </div>
        </div>
        <div className="text-[10px] font-normal">Giây</div>
      </div>
    </div>
  );
};

export { TimeCountdown };

type Props = {
  hours: number;
  minutes: number;
  seconds: number;
};
