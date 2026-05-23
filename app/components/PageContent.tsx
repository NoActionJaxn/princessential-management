import type React from "react";
import classnames from "classnames";

export interface PageContentProps {
  children?: React.ReactNode;
  flush?: boolean;
}

export default function PageContent({ children, flush }: PageContentProps) {
  
  return (
    <article className={classnames("grow", { "px-4 pb-32 lg:pt-24 sm:pt-36 pt-58 container mx-auto": !flush })}>
      {children}
    </article>
  )
}

PageContent.displayName = "PageContent";