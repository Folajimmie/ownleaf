import { sizes, variants } from "@/lib/variants";
import { Size, Variant } from "@/types";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = ({
  variant = "default",
  size = "base",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${variants[variant]} ${sizes[size]} ${props.className || ""}`}
    ></button>
  );
};
