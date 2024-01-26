import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-md",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-bs",
    black_900_04: "bg-black-900_04 text-white-A700",
    blue_A700: "bg-blue-A700 text-white-A700",
    blue_gray_50: "bg-blue_gray-50 text-gray-900_01",
    blue_50: "bg-blue-50 text-blue-A700",
    gray_50_05: "bg-gray-50_05 text-gray-600",
  },
  outline: {
    gray_100: "border border-gray-100 border-solid",
    blue_A700: "border border-blue-A700 border-solid text-blue-A700",
  },
  gradient: { white_A700_white_A700_66: "bg-gradient " },
} as const;
const sizes = {
  xs: "p-px",
  sm: "p-1",
  md: "p-[7px]",
  lg: "px-2.5 py-3",
  xl: "p-3.5",
  "2xl": "pr-[15px] py-[15px]",
  "3xl": "p-[17px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "3xl",
  variant = "fill",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
