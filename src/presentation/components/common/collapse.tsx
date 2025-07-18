import React, { FC } from "react";
import { CollapseProps, Collapse as OriginalCollapse } from "antd";
import ChevronRight from "../../static/icons/chevron-right.png";
import clsx from "clsx";

const Collapse: FC<CollapseProps> = (props) => {
  return (
    <OriginalCollapse
      expandIcon={({ isActive }) => (
        <img
          src={ChevronRight}
          className={clsx("", { "rotate-90": isActive })}
        />
      )}
      {...props}
    />
  );
};

export { Collapse };
