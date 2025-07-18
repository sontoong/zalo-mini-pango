import React from "react";
import CallIcon from "../../static/icons/call-calling.png";
import { SupportPopup } from "./popup";
import { Tooltip } from "antd";

const CallSupport = () => {
  const toolTipText = (
    <div className="flex flex-col">
      <div className="text-sm font-semibold text-white">Liên hệ</div>
      <div className="text-xs font-normal">Kết nối đến tổng đài viên</div>
    </div>
  );

  return (
    <SupportPopup>
      {({ open }) => (
        <Tooltip placement="bottomRight" title={toolTipText} color="#B2A0EC">
          <img
            src={CallIcon}
            alt=""
            className="size-[24px] object-cover"
            onClick={open}
          />
        </Tooltip>
      )}
    </SupportPopup>
  );
};

export default CallSupport;
