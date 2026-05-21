import { Link } from "react-router";
import Button from "./Button";
import Title from "./Title";
import Typography from "./Typography";
import Container from "./Container";
import type { ImageProps } from "./Image";

type LinkType = {
  label?: string;
  url?: string;
}

export interface HeroProps {
  title?: string;
  content?: string;
  ctaButton?: LinkType;
  ghostButton?: LinkType;
  image?: ImageProps;
}

export default function Hero({
  title,
  content,
  ctaButton,
  ghostButton,
  image
}: HeroProps) {
  return (
    <div
      className="w-full h-180 bg-stone-300"
      style={{
        backgroundImage: `url(${image?.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
      <Container className="flex flex-col justify-center gap-16 h-full col-span-3">
        <div className="space-y-4">
          {title && (
            <Title size="xl">{title}</Title>
          )}
          {content && (
            <Typography size="sm">{content}</Typography>
          )}
        </div>
        <div className="space-x-4">
          {ctaButton && (<Link to={ctaButton?.url ?? "#"}>
            <Button label={ctaButton?.label ?? "Button"} variant="default" />
          </Link>)}
          {ghostButton && (<Link to={ghostButton?.url ?? "#"}>
            <Button label={ghostButton?.label ?? "Button"} variant="ghost" />
          </Link>)}
        </div>
      </Container>
    </div>
  );
}
