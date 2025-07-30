import clsx from "clsx";
import React, { useMemo, useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import { Divider } from "antd";

function Steps({
  items,
  render,
  onChange,
  current,
  status,
  setStatus,
  divider,
}: Props) {
  const [currentInternalState, setCurrentInternalState] = useState<number>(0);

  const getCurItemStatus = (index: number) => {
    // Status is defined, force all
    if (status) {
      return status;
    }

    // Status if undefined
    if (index === currentInternal) {
      return "active";
    }
    if (index < currentInternal) {
      return "completed";
    }

    // Custom validate
    if (setStatus) {
      const temptItemStatus = setStatus({ item: items[index], index });
      if (temptItemStatus !== null) {
        return temptItemStatus;
      }
    }

    return "inactive";
  };

  const currentInternal = useMemo(
    () => (current !== undefined ? current : currentInternalState),
    [current, currentInternalState],
  );

  const goTo = (index: number) => {
    setCurrentInternalState(index);
    onChange?.(index);
  };

  return (
    <div className="flex items-center justify-between">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div onClick={() => goTo(index)}>
            {/* Default render */}
            {render ? (
              render({ item, index, itemStatus: getCurItemStatus(index) })
            ) : getCurItemStatus(index) != "completed" ? (
              <div
                className={clsx(
                  "flex flex-1 cursor-pointer flex-col items-center justify-center gap-3 text-center",
                )}
              >
                <div
                  className={clsx(
                    "flex aspect-square size-5 items-center justify-center rounded-full",
                    {
                      "bg-blue-500": getCurItemStatus(index) === "active",
                      "bg-red-500": getCurItemStatus(index) === "error",
                      "bg-gray-400": getCurItemStatus(index) === "inactive",
                    },
                  )}
                >
                  {index + 1}
                </div>
                <div>{item.title}</div>
              </div>
            ) : (
              <CheckOutlined />
            )}
          </div>
          {index < items.length - 1 ? (
            <>
              {divider ? (
                divider
              ) : (
                <Divider className="mx-[4px] min-w-min max-w-10" />
              )}
            </>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}

export { Steps };

type Props = {
  items: ItemProps[];
  render?: ({
    item,
    index,
    itemStatus,
  }: {
    item: ItemProps;
    index: number;
    itemStatus: Status;
  }) => React.ReactNode;
  onChange?: (current: number) => void;
  current?: number;
  status?: Status;
  setStatus?: ({
    item,
    index,
  }: {
    item: ItemProps;
    index: number;
  }) => Status | null;
  divider?: React.ReactNode;
};

type ItemProps = {
  title: React.ReactNode;
  content: React.ReactNode;
};

type Status = "active" | "inactive" | "completed" | "error";
