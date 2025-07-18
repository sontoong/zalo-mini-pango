import React, { FC } from "react";

const Button: ButtonComponent = ({ text, className, ...rest }) => {
  return (
    <button type="button" className={`flex-1 rounded ${className}`} {...rest}>
      {text}
    </button>
  );
};

const IconButton: FC<Props> = ({ icon, className, ...rest }) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center rounded-full ${className}`}
      {...rest}
    >
      {icon}
    </button>
  );
};

Button.Icon = IconButton;

export { Button };

type Props = {
  text?: React.ReactNode;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonComponent extends React.FC<Props> {
  Icon: React.FC<Props>;
}
