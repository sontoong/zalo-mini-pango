import React, { FC } from "react";

export const FilterButton: FC<Props> = ({ text, className, ...rest }) => {
  return (
    <button
      className={`shadow-filter-button w-fit rounded ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
};

type Props = {
  text?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
