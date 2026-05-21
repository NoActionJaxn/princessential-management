import type { Route } from "./+types/about";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Princessential Management - About" },
    { name: "description", content: "Who We Are." },
  ];
}

export default function About() {
  return (
    <span>Hello World</span>
  );
}
