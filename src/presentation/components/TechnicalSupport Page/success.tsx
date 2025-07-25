import React from "react";
import SuccessImg from "../../static/mail-success.png";
import { Button } from "../common/button";

const Success = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-[20px]">
      <img src={SuccessImg} alt="" className="size-[120px] object-cover" />
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col items-center gap-[12px]">
          <div className="text-xl font-semibold leading-[120%]">
            Đã gửi yêu cầu hỗ trợ
          </div>
          <div className="text-xs font-medium leading-[120%] text-gray6">
            Chúng tôi sẽ liên hệ lại trong 1 - 2 ngày tới
          </div>
        </div>
        <Button
          text={
            <div className="text-lg font-medium leading-[120%] text-white">
              Về trang chủ
            </div>
          }
          className="flex items-center justify-center rounded-[12px] bg-green6 py-[14px]"
        />
      </div>
    </div>
  );
};

export default Success;
