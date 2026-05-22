import Hero from "~/components/Hero";
import type { Route } from "./+types/home";
import TrustBar from "~/components/TrustBar";
import SwiperCarousel from "~/components/SwiperCarousel";
import ContentBlock from "~/components/ContentBlock";
import MoreInfoBlock from "~/components/MoreInfoBlock";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Princessential Management - Home" },
    { name: "description", content: "Where creators reign." },
  ];
}

export default function Home() {
  const images = [
    {
      src: "https://picsum.photos/200/200",
      alt: "Brand 1",
      width: 200,
      height: 200,
      url: "#",
    },
    {
      src: "https://picsum.photos/200/200",
      alt: "Brand 2",
      width: 200,
      height: 200,
      url: "#",
    },
    {
      src: "https://picsum.photos/200/200",
      alt: "Brand 3",
      width: 200,
      height: 200,
      url: "#",
    },
    {
      src: "https://picsum.photos/200/200",
      alt: "Brand 4",
      width: 200,
      height: 200,
      url: "#",
    },
    {
      src: "https://picsum.photos/200/200",
      alt: "Brand 1",
      width: 200,
      height: 200,
      url: "#",
    },
    {
      src: "https://picsum.photos/200/200",
      alt: "Brand 2",
      width: 200,
      height: 200,
      url: "#",
    },
    {
      src: "https://picsum.photos/200/200",
      alt: "Brand 3",
      width: 200,
      height: 200,
      url: "#",
    },
    {
      src: "https://picsum.photos/200/200",
      alt: "Brand 4",
      width: 200,
      height: 200,
      url: "#",
    },
  ];

  return (
    <div>
      <Hero
        title="Hero Section"
        subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit."
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
      <TrustBar images={images} />
      <div className="bg-purple-300">
        <ContentBlock
          title="Content Block"
          subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit."
          content="Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi."
          ctaButton={{
            label: "Continue",
            url: "#",
          }}
        />
      </div>
      <div className="bg-pink-300">
        <ContentBlock
          title="Content Block"
          subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit."
          content="Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi."
          ctaButton={{
            label: "Continue",
            url: "#",
          }}
        />
      </div>
      <SwiperCarousel
        title="Swiper Carousel"
        images={images}
      />
      <div className="bg-pink-300">
        <MoreInfoBlock
          title="Content Block"
          content="Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi."
          ctaButton={{
            label: "Continue",
            url: "#",
          }}
        />
      </div>
    </div>
  );
}
