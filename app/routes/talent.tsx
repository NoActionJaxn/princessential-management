import type { Route } from "./+types/talent";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Princessential Management - Talent" },
    { name: "description", content: "Explore opportunities with Princessential Management." },
  ];
}

export default function Talent() {
  return (
    <span>Hello World</span>
  );
}
