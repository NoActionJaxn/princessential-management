import classnames from "classnames";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div className={classnames("container px-8 mx-auto", className)} {...rest}>
      {children}
    </div>
  );
}

Container.displayName = "Container";