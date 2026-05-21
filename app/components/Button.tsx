import classNames from "classnames";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "default" | "ghost";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  label?: string;
  variant?: ButtonVariant;
}

export default function Button({
  label = "button",
  variant = "default",
  type = "button",
  disabled,
  className,
  ...rest
}: ButtonProps) {
  const buttonVariant = classNames({
    "border-transparent bg-stone-900 hover:bg-stone-700 text-stone-100": variant === "default",
    "bg-transparent hover:bg-stone-200": variant === "ghost"
  });

  return (
    <button
      className={
        classNames(
          buttonVariant,
          "space-x-2 px-5 py-3 border rounded-md uppercase cursor-pointer", {
          "cursor-not-allowed opacity-80": disabled,
        }, className)}
      {...rest}>
      <span>{label}</span>
    </button>
  );
}
