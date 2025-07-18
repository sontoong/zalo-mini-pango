import React, { FC } from "react";
import { ConfigProvider, Rate as OriginalRate, RateProps } from "antd";

const Rate: FC<Props> = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Rate: {
            starColor: props.color ?? "#D9D441",
          },
        },
      }}
    >
      <OriginalRate {...props} />
    </ConfigProvider>
  );
};

export default Rate;

type Props = {
  color?: string;
} & RateProps;
