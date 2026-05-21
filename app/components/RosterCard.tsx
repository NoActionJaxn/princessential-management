import Image from "~/components/Image";
import type { ImageProps } from "./Image";
import Title from "./Title";
import Typography from "./Typography";
import Button from "./Button";
import { Link } from "react-router";

export interface RosterCardProps {
  name: string;
  role: string;
  description: string;
  image: ImageProps;
}

export default function RosterCard({ name, role, description, image }: RosterCardProps) {
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
        <Typography className="line-clamp-4 mb-2">
          {description}
        </Typography>
      </div>
      <div className="p-4">
        <Link to="#" className="w-full">
          <Button className="w-full" label="Learn More" />
        </Link>
      </div>
    </div>
  );
}

RosterCard.displayName = "RosterCard";