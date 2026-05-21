import classNames from "classnames";
import type { HTMLAttributes, ReactNode } from "react";
import { createElement, forwardRef } from "react";

type SizeVariant = "xs" | "sm" | "md" | "lg" | "xl";

export interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "string";
  size?: SizeVariant;
}

const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, as = "p", size = "md", className, ...rest }, ref) => {
    return createElement(
      as,
      {
        ref,
        className: classNames("font-sans text-stone-800", {
          "text-2xs md:text-xs lg:text-sm": size === "xs",
          "text-xs md:text-sm lg:text-base": size === "sm",
          "text-sm md:text-base lg:text-lg": size === "md",
          "text-base md:text-lg lg:text-xl": size === "lg",
          "text-lg md:text-xl lg:text-2xl": size === "xl",
        }, className),
        ...rest,
      },
      children
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
