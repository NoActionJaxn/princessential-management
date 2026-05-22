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
  isDark?: boolean;
}

export default function MoreInfoBlock({
  title,
  content,
  ctaButton,
  className,
  isDark,
  ...rest
}: MoreInfoBlockProps) {
  return (
    <Container
      className={classNames("py-28 space-y-12 text-center", className)}
      {...rest}
      data-dark={isDark}>
      <div className="space-y-2">
        {title && <Title level="h2" size="lg" className={classNames({ "text-stone-100!": isDark })}>{title}</Title>}
      </div>
      {content && (
        <div>
          <Typography className={classNames({ "text-stone-100!": isDark })}>{content}</Typography>
        </div>
      )}
      {ctaButton && (
        <div>
          <Link to={ctaButton.url ?? ""}>
            <Button label={ctaButton.label} variant="default" isDark={isDark} />
          </Link>
        </div>
      )}
    </Container>
  );
}

MoreInfoBlock.displayName = "MoreInfoBlock";