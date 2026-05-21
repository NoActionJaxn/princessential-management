import classNames from "classnames";
import { Link } from "react-router";
import Container from "./Container";
import Title from "./Title";
import Typography from "./Typography";
import Button from "./Button";

export interface MoreInfoBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  content?: string;
  ctaButton?: {
    label?: string;
    url?: string;
  };
}

export default function MoreInfoBlock({
  title,
  content,
  ctaButton,
  className,
  ...rest
}: MoreInfoBlockProps) {
  return (
    <Container
      className={classNames("py-28 space-y-12 text-center", className)}
      {...rest}>
      <div className="space-y-2">
        {title && <Title level="h2" size="lg">{title}</Title>}
      </div>
      {content && (
        <div>
          <Typography>{content}</Typography>
        </div>
      )}
      {ctaButton && (
        <div>
          <Link to={ctaButton.url ?? ""}>
            <Button label={ctaButton.label} variant="default" />
          </Link>
        </div>
      )}
    </Container>
  );
}

MoreInfoBlock.displayName = "MoreInfoBlock";