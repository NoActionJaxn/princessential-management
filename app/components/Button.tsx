import classNames from "classnames";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "default" | "ghost";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  label?: string;
  variant?: ButtonVariant;
  isDark?: boolean;
}

export default function Button({
  label = "button",
  variant = "default",
  type = "button",
  isDark = false,
  disabled,
  className,
  ...rest
}: ButtonProps) {
  const buttonVariant = classNames({
    "border-transparent bg-stone-900 hover:bg-stone-700 text-stone-100": variant === "default" && !isDark,
    "border-transparent bg-stone-200 hover:bg-stone-300 text-stone-900": variant === "default" && isDark,
    "bg-transparent hover:bg-stone-200": variant === "ghost" && !isDark,
    "bg-transparent hover:bg-stone-700 text-stone-100": variant === "ghost" && isDark,
  });

  return (
    <button
      className={
        classNames(
          buttonVariant,
          "space-x-2 px-5 py-3 border rounded-md uppercase cursor-pointer transition-colors", {
          "cursor-not-allowed opacity-80": disabled,
        }, className)}
      {...rest}>
      <span>{label}</span>
    </button>
  );
}
