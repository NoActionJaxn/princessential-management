import classNames from "classnames";
import { Link } from "react-router";
import Container from "./Container";
import Title from "./Title";
import Typography from "./Typography";
import Button from "./Button";

export interface ContentBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  content?: string;
  ctaButton?: {
    label?: string;
    url?: string;
  };
  reverse?: boolean;
}

export default function ContentBlock({
  title,
  subtitle,
  content,
  ctaButton,
  className,
  reverse = false,
  ...rest
}: ContentBlockProps) {
  return (
    <Container
      className={classNames("py-28 space-y-12", className)}
      {...rest}>
      <div className={classNames("space-y-2", {
        "text-right": reverse,
        "text-left": !reverse,
      })}>
        {title && <Title level="h2" size="lg">{title}</Title>}
        {subtitle && <Title level="h3" size="sm">{subtitle}</Title>}
      </div>
      {content && (
        <div>
          <Typography>{content}</Typography>
        </div>
      )}
      {ctaButton && (
        <div className={classNames({
          "text-right": !reverse,
          "text-left": reverse,
        })}>
          <Link to={ctaButton.url ?? ""}>
            <Button label={ctaButton.label} variant="default" />
          </Link>
        </div>
      )}
    </Container>
  );
}

ContentBlock.displayName = "ContentBlock";