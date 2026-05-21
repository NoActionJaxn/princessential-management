import { Meta, Links, ScrollRestoration, Scripts } from "react-router";
import PageHeader from "./PageHeader";
import PageContent from "./PageContent";
import PageFooter from "./PageFooter";
import PageWrapper from "./PageWrapper";
import { ROUTES } from "~/constants/routes";

export interface LayoutProps {
  children?: React.ReactNode;
}

export default function PageLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <PageWrapper>
          <PageHeader routes={ROUTES} />
          <PageContent>
            {children}
          </PageContent>
          <PageFooter />
        </PageWrapper>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}