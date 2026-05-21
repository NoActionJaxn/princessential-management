import { Swiper, SwiperSlide } from "swiper/react";
import Image from "./Image";
import type { ImageProps } from "./Image";
import Title from "./Title";

export interface SwiperCarouselProps {
  title?: string;
  images?: ImageProps[];
}

export default function SwiperCarousel({ title, images = [] }: SwiperCarouselProps) {


  return (
    <div className="py-16 space-y-8">
      <div>
        {title && (
          <Title level="h2" size="lg">
            {title}
          </Title>
        )}
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        className="w-full aspect-video rounded-md"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image.src}-${index}`} className="h-full rounded-lg">
            <Image
              className="w-full h-full object-cover"
              width={image.width}
              height={image.height}
              src={image.src}
              alt={image.alt ?? "Image"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

SwiperCarousel.displayName = "SwiperCarousel";
