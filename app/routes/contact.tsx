import type { Route } from "./+types/contact";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Princessential Management - Contact" },
    { name: "description", content: "Get in touch with us." },
  ];
}

export default function Contact() {
  return (
    <span>Hello World</span>
  );
}
