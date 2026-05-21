import type React from "react";

export interface PageWrapperProps {
  children?: React.ReactNode;
}

export default function PageWrapper({children}: PageWrapperProps) {
  return (
    <main className="flex flex-col w-screen min-h-screen">
      {children}
    </main>
  )
}

PageWrapper.displayName = "PageWrapper";