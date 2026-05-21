import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("talent", "routes/talent.tsx"),
  route("business-inquiries", "routes/business-inquiries.tsx"),
] satisfies RouteConfig;
