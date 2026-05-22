import Hero from "~/components/Hero";
import type { Route } from "./+types/home";
import TrustBar from "~/components/TrustBar";
import SwiperCarousel from "~/components/SwiperCarousel";
import ContentBlock from "~/components/ContentBlock";
import MoreInfoBlock from "~/components/MoreInfoBlock";
import { fetchHomePageData } from "~/util/requests";
import type { HomePageRequest } from "~/types/requests";
import { useLoaderData } from "react-router";
import { imageBuilder } from "~/util/imageBuilder";
interface LoaderData {
  homePageData: HomePageRequest;
}

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Princessential Management - Home" },
    { name: "description", content: "Where creators reign." },
  ];
}

export async function loader() {
  const homePageData = await fetchHomePageData();

  return { homePageData };
}

export default function Home() {
  const { homePageData } = useLoaderData<LoaderData>();
  console.log("homePageData", homePageData);
  return (
    <div>
      <Hero
        title={homePageData.heroBlock.title}
        subtitle={homePageData.heroBlock.subtitle}
        content={homePageData.heroBlock.content}
        image={{
          src: imageBuilder(homePageData.heroBlock.backgroundImage.asset).url(),
          alt: homePageData.heroBlock.title,
        }}
        ctaButton={{
          label: homePageData.heroBlock.callToAction.text,
          url: homePageData.heroBlock.callToAction.url,
        }}
        ghostButton={{
          label: homePageData.heroBlock.ghostButton.text,
          url: homePageData.heroBlock.ghostButton.url,
        }}
        isDark={homePageData.heroBlock.dark}
      />
      <TrustBar
        images={
          homePageData.sponsorsBlock.map((sponsor) => ({
            src: imageBuilder(sponsor.image.asset).url(),
            alt: sponsor.altText,
            url: sponsor.url,
            width: 200,
            height: 200,
          }))} />

      {homePageData.contentBlocks.map((block) => (
        <div key={block._key} style={{ backgroundColor: block.color.hex }}>
          <ContentBlock
            title={block.title}
            subtitle={block.subtitle}
            content={block.content}
            ctaButton={{
              label: block.callToAction.text,
              url: block.callToAction.url,
            }}
          />
        </div>
      ))}
      {homePageData.carouselBlock && homePageData.carouselBlock.images.length && (
        <SwiperCarousel
          title={homePageData.carouselBlock.title}
          images={homePageData.carouselBlock.images.map((image) => ({
            src: image.image.asset ? imageBuilder(image.image.asset).url() : "",
            alt: image.altText ?? "Image",
          }))}
        />
      )}
      {homePageData.footNoteBlock && (
        <div className="bg-stone-900">
          <MoreInfoBlock
            title={homePageData.footNoteBlock.title}
            content={homePageData.footNoteBlock.content}
            ctaButton={{
              label: homePageData.footNoteBlock.callToAction.text,
              url: homePageData.footNoteBlock.callToAction.url,
            }}
            isDark
          />
        </div>
      )}
    </div>
  );
}
