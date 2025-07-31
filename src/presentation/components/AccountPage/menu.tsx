import React from "react";
import CustomerImg from "../../static/customer.png";
import { Divider } from "antd";
import ChevronLeft from "../../static/icons/chevron-left.png";
import UserIcon from "../../static/icons/user-icon-2.png";
import BadgeIcon from "../../static/icons/badge-icon.png";
import ShareIcon from "../../static/icons/share-icon.png";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="flex gap-[16px] px-[16px] py-[12px]">
        <img
          src={CustomerImg}
          alt=""
          className="size-[48px] rounded-full border-[1.2px] border-white object-cover"
          style={{ boxShadow: "0px 4.8px 8px 0px #89878733" }}
        />
        <div className="flex flex-col gap-[4px]">
          <div className="text-base font-semibold">Nguyễn Mỹ Linh</div>
          <div className="text-sm font-normal text-[#7E7E7E]">0293439435</div>
        </div>
      </div>
      <Divider className="m-0 border-[4px] border-[#F9F3F3]" />
      <div className="flex flex-col gap-[14px] p-[16px]">
        <div
          className="flex items-center justify-between"
          onClick={() => navigate("/profile")}
        >
          <div className="flex items-center gap-[12px]">
            <div className="flex size-[40px] items-center justify-center rounded-full bg-green6">
              <img
                src={UserIcon}
                alt=""
                className="size-[18px] object-contain"
              />
            </div>
            <div className="text-sm font-medium">Thông tin tài khoản</div>
          </div>
          <img
            src={ChevronLeft}
            className="size-[16px] rotate-180 object-cover"
          />
        </div>
        <Divider className="m-0" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            <div className="flex size-[40px] items-center justify-center rounded-full bg-yellow7">
              <img
                src={BadgeIcon}
                alt=""
                className="size-[18px] object-contain"
              />
            </div>
            <div className="text-sm font-medium">Reward Hub</div>
          </div>
          <img
            src={ChevronLeft}
            className="size-[16px] rotate-180 object-cover"
          />
        </div>
        <Divider className="m-0" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            <div className="flex size-[40px] items-center justify-center rounded-full bg-purple5">
              <img
                src={ShareIcon}
                alt=""
                className="size-[18px] object-contain"
              />
            </div>
            <div className="text-sm font-medium">Chia sẻ ứng dụng</div>
          </div>
          <img
            src={ChevronLeft}
            className="size-[16px] rotate-180 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
