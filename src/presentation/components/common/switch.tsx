import { ConfigProvider, Switch as OriginalSwitch, SwitchProps } from "antd";
import React, { FC } from "react";

const Switch: FC<Props> = (props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: props.color,
        },
      }}
    >
      <OriginalSwitch {...props} />
    </ConfigProvider>
  );
};

export { Switch };

type Props = { color?: string } & SwitchProps;
