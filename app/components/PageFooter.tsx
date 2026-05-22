import type { Social } from "~/types/socials";
import Container from "./Container";

export interface PageFooterProps {
  socials?: Social[];
}

export default function PageFooter({ socials = [] }: PageFooterProps) {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-stone-900 text-stone-300">
      <Container className="flex items-center justify-between h-18 p-4">
        <div>
          <span className="uppercase text-xs font-subtitle">Princessential Management {year}</span>
        </div>
        <div>
          {/* TODO: Add social links*/}
          Socials
        </div>
      </Container>
    </footer>
  );
}