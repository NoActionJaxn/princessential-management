import Title from "~/components/Title";
import { fetchAboutPageData } from "~/util/requests";
import { useLoaderData } from "react-router";
import BlockRenderer from "~/components/BlockRenderer";
import Image from "~/components/Image";
import type { AboutPageRequest } from "~/types/requests";
import { imageBuilder } from "~/util/imageBuilder";
import { defaultSeo, metaFromSeo } from "~/util/seo";

interface LoaderData {
  aboutPageData: AboutPageRequest;
}

export function meta({ data }: { data?: LoaderData }) {
  return metaFromSeo(data?.aboutPageData?.seo ?? defaultSeo);
}

export async function loader() {
  const aboutPageData = await fetchAboutPageData();

  return { aboutPageData };
}

export default function About() {
  const { aboutPageData } = useLoaderData<LoaderData>();

  return (
    <div className="w-full max-w-5xl mx-auto px-4 space-y-8">
      {aboutPageData.title && (
        <Title level="h1" size="xl" className="text-center pt-16">
          {aboutPageData.title}
        </Title>
      )}
      {aboutPageData.image && (
        <Image
          src={imageBuilder(aboutPageData.image).width(1200).url()}
          alt={"About Us"}
          className="max-w-2xl w-full h-auto mx-auto"
        />
      )}
      {aboutPageData.content && (
        <div>
          <BlockRenderer content={aboutPageData.content} withStyles />
        </div>
      )}
    </div>
  );
}
