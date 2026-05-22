import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "./Image";
import type { ImageProps } from "./Image";
import Container from "./Container";
import Title from "./Title";

export interface ImageWithUrl extends ImageProps {
  url?: string;
}

export interface TrustBarProps {
  images?: ImageWithUrl[];
}

export default function TrustBar({ images = [] }: TrustBarProps) {
  return (
    <div className="bg-amber-300 h-auto pt-8 pb-20" id="trust-bar">
      <Container className="flex flex-col justify-center h-full overflow-visible">
        <div>
          <Title level="h2" size="xs" className="text-center mb-8">
            Trusted by leading brands
          </Title>
        </div>
        <div>
          <Swiper
            className="trust-swiper"
            modules={[Navigation]}
            spaceBetween={56}
            navigation
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1920: { slidesPerView: 7 },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={`${image.src}-${index}`} className="h-full w-48">
                {(image.url) ? (
                  <Link to={image.url ?? "#"} className="inline-flex h-full w-full items-center justify-center">
                    <Image
                      className="h-24 w-auto object-contain"
                      width={image.width}
                      height={image.height}
                      src={image.src}
                      alt={image.alt ?? "Image"}
                    />
                  </Link>) : (
                  <Image
                    className="h-full w-auto"
                    width={image.width}
                    height={image.height}
                    src={image.src}
                    alt={image.alt ?? "Image"}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

TrustBar.displayName = "TrustBar";