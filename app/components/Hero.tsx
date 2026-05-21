import { Link } from "react-router";
import Button from "./Button";
import Title from "./Title";
import Typography from "./Typography";

export interface HeroProps {
  title?: string;
  content?: string;
  ctaButton?: {
    label?: string;
    url?: string;
  };
  ghostButton?: {
    label?: string;
    url?: string;
  };
  image?: {
    src: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
  }
}

export default function Hero({
  title,
  content,
  ctaButton,
  ghostButton,
  image
}: HeroProps) {
  return (
    <div className="grid grid-cols-5 w-full h-86">
      <div className="flex flex-col justify-center gap-16 h-full col-span-3">
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
      </div>
      <div></div>
    </div>
  );
}
