import React from "react";
import {
  Radio as OriginRadio,
  RadioGroupProps as OriginRadioGroupProps,
} from "antd";
import clsx from "clsx";

type RecordType = {
  value: any;
  [key: string]: any;
};

function Radio() {}

function RadioGroup({
  render,
  divider,
  items,
  className,
  ...props
}: RadioGroupProps<RecordType>) {
  return (
    <OriginRadio.Group className={`custom-radio ${className}`} {...props}>
      {items?.map((item, index) => (
        <React.Fragment key={index}>
          <OriginRadio value={item.value}>{render(item)}</OriginRadio>
          {index < items.length - 1 && divider}
        </React.Fragment>
      ))}
    </OriginRadio.Group>
  );
}

function RadioButtonGroup({
  activeRender,
  items,
  render,
  direction = "row",
  className,
  itemFlex = true,
  divider,
  ...rest
}: RadioButtonGroupProps<RecordType>) {
  const handleClick = (value: number) => {
    if (rest.onChange) {
      rest.onChange(value);
    }
  };

  if (Array.isArray(items)) {
    if (items.length === 0) {
      return <></>;
    }
    return (
      <div className={className} style={{ flexDirection: direction }}>
        {items.map((item, index) => (
          <div
            className={clsx("cursor-pointer", { "flex-1": itemFlex })}
            onClick={() => handleClick(item.value)}
            key={index}
          >
            {rest.value === item.value ? activeRender(item) : render(item)}
            {index < items.length - 1 && divider}
          </div>
        ))}
      </div>
    );
  }
  return null;
}

Radio.Group = RadioGroup;
Radio.ButtonGroup = RadioButtonGroup;

export { Radio };

type RadioGroupProps<RecordType> = {
  items: RecordType[];
  render: (item?: RecordType) => React.ReactNode;
  divider?: React.ReactNode;
} & OriginRadioGroupProps;

type RadioButtonGroupProps<RecordType> = {
  items: RecordType[]; //an array of object ([{name: "abc"}, {name: "abcd"}])
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  render: (item?: RecordType) => React.ReactNode; //specify how to render, eg: render={(item) => <div>{item?.name}</div>}
  activeRender: (item?: RecordType) => React.ReactNode; //specify how to render when focused, eg: activeRender={(item) => (<div className="text-primary">{item?.name}</div>)}
  itemFlex?: boolean;
  divider?: React.ReactNode;
  value?: any;
  onChange?: (value: any) => void;
  className?: string;
};
