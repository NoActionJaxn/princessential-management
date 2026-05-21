import Hero from "~/components/Hero";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Princessential Management - Home" },
    { name: "description", content: "Where creators reign." },
  ];
}

export default function Home() {
  return (
    <div>
      <Hero
        title="Hero Section"
        content="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."
        ctaButton={{
          label: "Continue",
          url: "#",
        }}
        ghostButton={{
          label: "Continue",
          url: "#",
        }}
      />
    </div>
  );
}
