import {
  Checkbox as OriginalCheckbox,
  CheckboxProps as OriginalCheckboxProps,
  Collapse,
  Divider,
  ConfigProvider,
  theme,
} from "antd";
import React, { FC, useState } from "react";
import ChevronBlue from "../../static/icons/chevron-right-blue.png";
import clsx from "clsx";

const { useToken } = theme;

const Checkbox: CheckboxType = (props) => {
  const { token } = useToken();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryHover: token.colorPrimary,
        },
      }}
    >
      <OriginalCheckbox {...props} />
    </ConfigProvider>
  );
};
Checkbox.Group = OriginalCheckbox.Group;

const NestedCheckbox: FC<NestedCheckboxProps> = ({
  defaultCheckedList,
  option,
}) => {
  const [checkedList, setCheckedList] = useState<string[]>(
    defaultCheckedList ?? [],
  );
  const plainOptions = option.children.map((child) => child.value);

  const checkAll = plainOptions.length === checkedList.length;
  // const indeterminate =
  //   checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onInnerChange = (list: string[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: OriginalCheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  return (
    <Collapse
      defaultActiveKey={1}
      ghost
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
        <img
          src={ChevronBlue}
          className={clsx("size-[20px] object-cover", {
            "rotate-90": isActive,
          })}
        />
      )}
      items={[
        {
          key: 1,
          label: (
            <div onClick={(e) => e.stopPropagation()} className="w-fit">
              <Checkbox
                // indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
                skipGroup
              >
                {option.label}
              </Checkbox>
            </div>
          ),
          children: (
            <Checkbox.Group
              value={checkedList}
              className="w-full"
              onChange={onInnerChange}
            >
              <div className="flex w-full flex-col gap-[12px]">
                <Divider className="mb-0 mt-[12px]" />
                {option.children.map((item, index) => (
                  <React.Fragment key={index}>
                    <Checkbox
                      value={item.value}
                      className="custom-checkbox ml-[12px]"
                    >
                      {item.label}
                    </Checkbox>
                    {index < option.children.length - 1 && (
                      <Divider className="m-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </Checkbox.Group>
          ),
          styles: { header: { padding: 0 }, body: { padding: 0 } },
        },
      ]}
    />
  );
};

export { NestedCheckbox, Checkbox };

type CheckboxType = FC<OriginalCheckboxProps> & {
  Group: typeof OriginalCheckbox.Group;
};

type NestedCheckboxProps = {
  value?: any;
  onChange?: (value: any) => void;
  defaultCheckedList?: string[];
  option: {
    label: React.ReactNode;
    children: {
      label: React.ReactNode;
      value: any;
    }[];
  };
};
