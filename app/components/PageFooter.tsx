import { Link } from "react-router";
import classNames from "classnames";
import Container from "./Container";
import type { Social } from "~/types/socials";
import Typography from "./Typography";

export interface PageFooterProps {
  socials?: Social[];
}

export default function PageFooter({ socials = [] }: PageFooterProps) {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-stone-900 text-stone-300/80 font-subtitle" data-dark>
      <Container className="flex items-center justify-between h-18 p-4">
        <div>
          <Link to="/" className="hover:text-stone-300 transition-colors">
            <span className="uppercase text-sm">Princessential Management {year}</span>
          </Link>
        </div>
        <nav className="flex items-baseline gap-4">
          <span className="relative uppercase text-xs text-stone-300!">Follow Us</span>
          <ul className="inline-block space-x-2">
            {socials.map((social) => (
              <li key={social.key} className="inline">
                <Link to={social.url} target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">{social.label}</span>
                  <i className={classNames(social.faPackage, social.faIcon, "hover:text-stone-300 transition-colors")}></i>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}