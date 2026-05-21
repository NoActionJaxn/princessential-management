import classNames from "classnames";
import type { HTMLAttributes } from "react";
import { createElement, forwardRef } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type SizeVariant = "xs" | "sm" | "md" | "lg" | "xl";

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  size?: SizeVariant;
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, level = "h1", size, className, ...rest }, ref) => {

    return createElement(
      level,
      {
        ref,
        className: classNames("font-semibold font-title text-stone-900", {
          "text-xl md:text-2xl lg:text-3xl": size === "xs",
          "text-2xl md:text-3xl lg:text-4xl": size === "sm",
          "text-3xl md:text-4xl lg:text-5xl": size === "md",
          "text-4xl md:text-5xl lg:text-6xl": size === "lg",
          "text-5xl md:text-6xl lg:text-7xl": size === "xl",
        }, className),
        ...rest,
      },
      children
    );
  }
);

Title.displayName = "Title";

export default Title;
