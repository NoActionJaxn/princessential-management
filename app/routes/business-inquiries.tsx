import type { Route } from "./+types/business-inquiries";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Princessential Management - Business Inquiries" },
    { name: "description", content: "Inquire about business opportunities with Princessential Management." },
  ];
}

export default function BusinessInquiries() {
  return (
    <span>Hello World</span>
  );
}
