import Image from "~/components/Image";
import type { ImageProps } from "./Image";
import Title from "./Title";
import Button from "./Button";
import { Link } from "react-router";
import type { PortableTextBlock } from "@portabletext/react";
import BlockRenderer from "./BlockRenderer";

export interface RosterCardProps {
  name: string;
  role: string;
  description: PortableTextBlock[];
  image: ImageProps;
  url?: string;
}

export default function RosterCard({ name, role, description, image, url }: RosterCardProps) {
  return (
    <div className="overflow-hidden rounded-md border border-stone-900">
      <div className="w-full h-64 aspect-video">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <Title level="h3" size="md">
          {name}
        </Title>
        <Title level="h4" size="sm">
          {role}
        </Title>
        <BlockRenderer content={description} className="line-clamp-4" withStyles />
      </div>
      {url && (
        <div className="p-4">
          <Link to={url} className="w-full">
            <Button className="w-full" label="Learn More" />
          </Link>
        </div>
      )}
    </div>
  );
}

RosterCard.displayName = "RosterCard";