import { Link } from "react-router";
import Image from "./Image";
import type { ImageProps } from "./Image";
import Container from "./Container";

export interface ImageWithUrl extends ImageProps {
  url?: string;
}

export interface TrustBarProps {
  images?: ImageWithUrl[];
}

export default function TrustBar({ images = [] }: TrustBarProps) {
  return (
    <div className="bg-amber-300 h-64 ">
      <Container className=" h-full px-0!">
        <div className="flex w-full items-center overflow-x-auto snap-proximity snap-x gap-20 h-full">
          {images.map((image, index) => (
            <Link
              key={`${image.src}-${index}`}
              to={image.url ?? "#"}
              className="size-42 inline-block shrink-0 snap-start">
              <Image
                className="w-full h-auto"
                width={image.width}
                height={image.height}
                src={image.src}
                alt={image.alt ?? "Image"}
              />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

TrustBar.displayName = "TrustBar";