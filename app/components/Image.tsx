import classnames from "classnames";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export default function Image({ src, alt, width, height, className, ...rest }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classnames("object-contain", className)}
      {...rest}
    />
  )
}

Image.displayName = "Image";