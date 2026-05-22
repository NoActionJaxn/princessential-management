import Title from "~/components/Title";
import type { Route } from "./+types/about";
import type { AboutPageRequest } from "~/types/requests";
import { fetchAboutPageData } from "~/util/requests";
import { useLoaderData } from "react-router";
import BlockRenderer from "~/components/BlockRenderer";

interface LoaderData {
  aboutPageData: AboutPageRequest;
}

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Princessential Management - About" },
    { name: "description", content: "Who We Are." },
  ];
}

export async function loader() {
  const aboutPageData = await fetchAboutPageData();

  return { aboutPageData };
}

export default function About() {
  const { aboutPageData } = useLoaderData<LoaderData>();

  return (
    <div>
      {aboutPageData.title && (
        <Title level="h1" size="xl" className="text-center pt-16 pb-5">
          {aboutPageData.title}
        </Title>
      )}
      <div className="space-y-5 indent-8">
        <BlockRenderer content={aboutPageData.content} withStyles />
      </div>
    </div>
  );
}
