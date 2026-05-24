import { isRouteErrorResponse, Outlet, useLoaderData } from "react-router";
import type { LinksFunction } from "react-router";
import PageLayout from "./components/PageLayout";
import "./app.css";
import { fetchSocials } from "./util/requests";
import type { SocialRequest } from "./types/requests";
import type { Social } from "./types/socials";

interface LoaderData {
  socialNetworkData: SocialRequest[];
}

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://challenges.cloudflare.com" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export async function loader() {
  const socialNetworkData = await fetchSocials();

  return { socialNetworkData };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const {socialNetworkData} = useLoaderData<LoaderData>();

  const socials: Social[] = socialNetworkData.map((social) => ({
    key: social._id,
    label: social.label,
    url: social.url,
    faIcon: social.faIcon,
    faPackage: social.faIconType,
  }));
  
  return <PageLayout socials={socials}>{children}</PageLayout>;
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: unknown }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
