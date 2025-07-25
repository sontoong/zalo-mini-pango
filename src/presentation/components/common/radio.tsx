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
  extraRender,
  ...props
}: RadioGroupProps<RecordType>) {
  return (
    <OriginRadio.Group className={`custom-radio ${className}`} {...props}>
      {items?.map((item, index) => (
        <React.Fragment key={index}>
          <OriginRadio value={item.value}>{render(item)}</OriginRadio>
          {extraRender ? extraRender(item) : null}
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
  multiple = false,
  ...props
}: RadioButtonGroupProps<RecordType>) {
  const handleClick = (value: RecordType) => {
    if (multiple) {
      const currentValue = Array.isArray(props.value) ? props.value : [];
      const newValue = currentValue.includes(value)
        ? currentValue.filter((item) => item !== value)
        : [...currentValue, value];
      props.onChange?.(newValue);
    } else {
      props.onChange?.(value);
    }
  };

  if (Array.isArray(items)) {
    if (items.length === 0) {
      return null;
    }
    return (
      <div className={className} style={{ flexDirection: direction }}>
        {items.map((item, index) => {
          const isActive = multiple
            ? Array.isArray(props.value) && props.value.includes(item.value)
            : props.value === item.value;

          return (
            <div
              className={clsx("cursor-pointer", { "flex-1": itemFlex })}
              onClick={() => handleClick(item.value)}
              key={index}
            >
              {isActive ? activeRender(item) : render(item)}
              {index < items.length - 1 && divider}
            </div>
          );
        })}
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
  extraRender?: (item?: RecordType) => React.ReactNode;
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
  multiple?: boolean;
};
