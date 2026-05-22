import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Title from "./Title";
import Image, { type ImageProps } from "./Image";

export interface SwiperCarouselProps {
  title?: string;
  images?: ImageProps[];
}

export default function SwiperCarousel({ title, images = [] }: SwiperCarouselProps) {


  return (
    <div className="relative">
      <div className="absolute top-12 left-0 right-0 text-center z-10">
        {title && (
          <Title level="h2" size="md" className="text-white opacity-90 text-shadow-lg">
            {title}
          </Title>
        )}
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        className="carousel-swiper max-h-screen w-full aspect-video bg-stone-900"
        pagination={{ clickable: true }}
        navigation
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image.src}-${index}`} className="h-full rounded-lg">
            <Image
              className="w-full aspect-video object-contain"
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
