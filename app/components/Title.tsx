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
  ({ children, level = "h1", size = "md", className, ...rest }, ref) => {

    return createElement(
      level,
      {
        ref,
        className: classNames({
          "text-xl md:text-2xl lg:text-3xl font-subtitle text-stone-700": size === "xs",
          "text-2xl md:text-3xl lg:text-4xl font-subtitle text-stone-700": size === "sm",
          "text-3xl md:text-4xl lg:text-5xl font-semibold font-title text-stone-00": size === "md",
          "text-4xl md:text-5xl lg:text-6xl font-semibold font-title text-stone-900": size === "lg",
          "text-5xl md:text-6xl lg:text-7xl font-semibold font-title text-stone-900 ": size === "xl",
        }, className),
        ...rest,
      },
      children
    );
  }
);

Title.displayName = "Title";

export default Title;
