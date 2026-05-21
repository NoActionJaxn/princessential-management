import { Link } from "react-router";
import type { RoutesType } from "~/types/route";
import Container from "./Container";
import Image from "./Image";
export interface PageHeaderProps {
  routes?: RoutesType;
}

export default function PageHeader({ routes = {} }: PageHeaderProps) {
  const menuItems = Object.entries(routes);

  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <Container className="flex sm:flex-row flex-col justify-between h-auto px-4 pb-4">
        <div className="h-16 pt-4">
          <Image
            src="/images/Logo-Dark.png"
            className="h-full w-auto"
            width={1688}
            height={187}
          />
        </div>

        <nav className="flex items-end pt-8 sm:text-right text-left">
          <ul className="relative sm:top-1.5 top-0 inline-block lg:space-x-4 space-y-0">
            {menuItems.map(([key, route]) => (
              <li className="lg:inline block" key={key}>
                <Link to={route.url} className="font-title underline-offset-2 decoration-1 hover:underline">{route.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

PageHeader.displayName = "PageHeader";