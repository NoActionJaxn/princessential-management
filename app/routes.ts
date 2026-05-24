import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("talent", "routes/talent/index.tsx"),
  route("talent/:slug", "routes/talent/$slug.tsx"),
  route("contact", "routes/contact.tsx"),
  route("/api/sanity", "routes/api.sanity.ts"),
] satisfies RouteConfig;
