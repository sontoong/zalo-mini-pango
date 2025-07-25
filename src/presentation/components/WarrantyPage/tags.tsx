import React, { FC, useState } from "react";
import { Radio } from "../common/radio";
import { Button } from "../common/button";

const Tags: FC<Props> = (props) => {
  return (
    <Radio.ButtonGroup
      items={types}
      render={(item) => (
        <Button
          text={
            <div className="text-xs font-medium text-green6">{item?.label}</div>
          }
          className="w-[102px] rounded-[40px] border border-green5 bg-white py-[8px]"
        />
      )}
      activeRender={(item) => (
        <Button
          text={
            <div className="text-xs font-medium text-white">{item?.label}</div>
          }
          className="w-[102px] rounded-[40px] border border-green5 bg-green5 py-[8px]"
        />
      )}
      itemFlex={false}
      className="flex gap-[8px]"
      {...props}
    />
  );
};

export { Tags };

type Props = {
  value?: any;
  onChange?: (value: any) => void;
};

const types = [
  { label: "Còn bảo hành", value: "1" },
  { label: "Hết bảo hành", value: "2" },
];
