import { Meta, Links, ScrollRestoration, Scripts, useLocation } from "react-router";
import PageHeader from "./PageHeader";
import PageContent from "./PageContent";
import PageFooter from "./PageFooter";
import PageWrapper from "./PageWrapper";
import { ROUTES } from "~/constants/routes";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import type { Social } from "~/types/socials";

export interface LayoutProps {
  children?: React.ReactNode;
  socials?: Social[];
}

export default function PageLayout({ children, socials }: LayoutProps) {
  const flushRoutes = ["/"];
  const {pathname} = useLocation();
  const isFlush = flushRoutes.includes(pathname);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script src="https://kit.fontawesome.com/1aad4926f4.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        <PageWrapper>
          <PageHeader routes={ROUTES} />
          <PageContent flush={isFlush}>
            {children}
          </PageContent>
          <PageFooter socials={socials} />
        </PageWrapper>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

PageLayout.displayName = "PageLayout";