import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import CloseIcon from "../../static/icons/close-icon.png";
import { Divider } from "antd";
import PhoneIcon from "../../static/icons/call-calling.png";
import PhoneIconGreen from "../../static/icons/phone-icon-green.png";
import PhoneSupport from "../../static/phone-support.png";

const SupportPopup: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="absolute inset-x-[16px] flex items-center">
                <div className="flex items-center gap-[8px]">
                  <img
                    src={PhoneIcon}
                    alt=""
                    className="size-[28px] object-cover"
                  />
                  <div className="text-lg font-semibold">
                    Gọi tổng đài hỗ trợ miễn phí
                  </div>
                </div>
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
          zIndex={1002}
        >
          <div className="flex flex-1 flex-col gap-[20px] px-[16px] pt-[20px]">
            {/* phone */}
            <div className="flex items-center justify-between">
              <div className="flex gap-[14px]">
                <div className="flex size-[40px] items-center justify-center rounded-[10px] bg-[#F5F9FF]">
                  <img src={PhoneSupport} alt="" className="object-contain" />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <div className="text-base font-semibold leading-[120%]">
                    AQUA Việt Nam
                  </div>
                  <div className="text-sm font-medium leading-[120%] text-gray6">
                    0234898534
                  </div>
                </div>
              </div>
              <img
                src={PhoneIconGreen}
                alt=""
                className="size-[32px] object-cover"
              />
            </div>
            <Divider className="m-0" />
            {/* phone */}
            <div className="flex items-center justify-between">
              <div className="flex gap-[14px]">
                <div className="flex size-[40px] items-center justify-center rounded-[10px] bg-[#F5F9FF]">
                  <img src={PhoneSupport} alt="" className="object-contain" />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <div className="text-base font-semibold leading-[120%]">
                    Retail 1
                  </div>
                  <div className="text-sm font-medium leading-[120%] text-gray6">
                    0234898534
                  </div>
                </div>
              </div>
              <img
                src={PhoneIconGreen}
                alt=""
                className="size-[32px] object-cover"
              />
            </div>
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { SupportPopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
