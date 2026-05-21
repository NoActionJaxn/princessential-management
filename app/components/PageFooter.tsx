import type { Social } from "~/types/socials";

export interface PageFooterProps {
  socials: Social[];
}

export default function PageFooter({ socials }: PageFooterProps) {
  const year = new Date().getFullYear()
  return (
    <footer className="flex items-center justify-between h-18 p-4">
      <div>
        <span className="uppercase text-xs">Princessential Management {year}</span>
      </div>
      <div>
        {/* TODO: Add social links*/}
        Socials
      </div>
    </footer>
  );
}