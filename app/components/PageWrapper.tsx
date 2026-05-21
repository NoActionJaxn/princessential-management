import type React from "react";

export interface PageWrapperProps {
  children?: React.ReactNode;
}

export default function PageWrapper({children}: PageWrapperProps) {
  return (
    <main className="flex flex-col mx-auto container min-h-screen overflow-hidden">
      {children}
    </main>
  )
}

PageWrapper.displayName = "PageWrapper";