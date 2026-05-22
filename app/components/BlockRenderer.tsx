import { PortableText, type PortableTextBlock, type PortableTextComponents } from '@portabletext/react'
import { Link } from 'react-router';
import classNames from 'classnames';
import Title from './Title';
import Typography from './Typography';

export interface BlockRendererProps {
  readonly content: PortableTextBlock[];
  className?: string;
  withStyles?: boolean;
}

const styledComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <Title level="h2" size="lg" className='pb-5'>{children}</Title>,
    h2: ({ children }) => <Title level="h3" size="md">{children}</Title>,
    h3: ({ children }) => <Title level="h4" size="sm">{children}</Title>,
    h4: ({ children }) => <Title level="h5" size="xs">{children}</Title>,
    normal: ({ children }) => <Typography>{children}</Typography>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <Link
        to={value?.href ?? '#'}
        className="underline underline-offset-4 decoration-[3px] hover:opacity-80 transition-colors text-blue-600 dark:text-blue-400"
      >
        {children}
      </Link>
    ),
  },
};

export default function BlockRenderer({
  content,
  className,
  withStyles = false,
}: BlockRendererProps) {
  return (
    <div className={classNames("space-y-4", className)}>
      <PortableText value={content} components={withStyles ? styledComponents : {}} />
    </div>
  );
}