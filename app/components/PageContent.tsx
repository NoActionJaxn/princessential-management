import type React from "react";

export interface PageContentProps {
  children?: React.ReactNode;
}

export default function PageContent({children}: PageContentProps) {
  return (
    <article className="grow p-4">
      {children}
    </article>
  )
}

PageContent.displayName = "PageContent";