import React, { FC } from "react";
import { ConfigProvider, Select as OriginalSelect, SelectProps } from "antd";
import ChevronDown from "../../static/icons/chevron-down.png";

const Select: FC<Props> = ({
  fontSize = 14,
  optionFontSize = 14,
  colorBorder = "#d9d9d9",
  ...rest
}) => {
  return (
    <ConfigProvider
      theme={{
        token: { fontSize: fontSize, colorBorder: colorBorder },
        components: { Select: { optionFontSize: optionFontSize } },
      }}
    >
      <OriginalSelect
        suffixIcon={<img src={ChevronDown} className="size-[14px]" />}
        {...rest}
      />
    </ConfigProvider>
  );
};

export { Select };

type Props = {
  fontSize?: number;
  optionFontSize?: number;
  colorBorder?: string;
} & SelectProps;
