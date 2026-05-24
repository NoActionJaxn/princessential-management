import { Link, useLocation } from "react-router";
import classNames from "classnames";
import type { RoutesType } from "~/types/route";
import Container from "./Container";
import Image from "./Image";
import useIsOverDark from "~/hooks/useIsOverDark";
import { useRef } from "react";
export interface PageHeaderProps {
  routes?: RoutesType;
}

export default function PageHeader({ routes = {} }: PageHeaderProps) {
  const menuItems = Object.entries(routes);

  const { pathname } = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { isOverDark, isScrolled } = useIsOverDark({ ref: containerRef });

  return (
    <header ref={containerRef} className={classNames("fixed top-0 left-0 right-0 z-40 transition-colors", isScrolled ? "bg-stone-100/60 backdrop-blur-sm shadow-md" : "bg-transparent")} data-dark>
      <Container className="flex md:flex-row flex-col justify-between h-auto px-4 pb-4">
        <div className="h-16 pt-4">
          <Link to="/" className="inline-flex h-full items-center">
            <Image
              src={isOverDark && !isScrolled ? "/images/Logo-Light.png" : "/images/Logo-Dark.png"}
              className="h-full w-auto"
              width={1688}
              height={187}
            />
          </Link>
        </div>

        <nav className="flex items-end pt-8 md:text-right text-left">
          <ul className="relative sm:-top-2 md:-top-1 lg:top-1.5 inline-block lg:space-x-4 space-y-0">
            {menuItems.map(([key, route]) => (
              <li className="lg:inline block" key={key}>
                <Link
                  to={route.url}
                  className={
                    classNames("font-title underline-offset-2 decoration-1 transition-colors hover:underline", {
                      "text-stone-100!": isOverDark && !isScrolled,
                      "underline text-violet-500!": pathname === route.url,
                      "decoration-transparent hover:decoration-stone-900": pathname !== route.url,
                    })
                  }>
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

PageHeader.displayName = "PageHeader";