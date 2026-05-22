export interface HomePageRequest {
  _createdAt: string;
  _id: string;
  _originalId: string;
  _rev: string;
  _system: Record<string, unknown>;
  base: Record<string, unknown>;
  id: string;
  rev: string;
  _type: "homePage";
  _updatedAt: string;
  carouselBlock: Record<string, unknown>;
  footNoteBlock: Record<string, unknown>;
  callToAction: CallToAction;
  text: string;
  url: string;
  content: string;
  title: string;
  images: ImageBlock[];
  seo: Seo;
  contentBlocks: ContentBlock[];
  heroBlock: HeroBlock;
  pageTitle: string;
  sponsorsBlock: Sponsor[];
}

export interface CallToAction {
  text: string;
  url: string;
}

export interface ImageBlock {
  _key: string;
  _type: "imageBlock";
  altText: string;
  image: ImageReference;
}

export interface ImageReference {
  _type: "image";
  asset: ReferenceAsset;
}

export interface ReferenceAsset {
  _ref: string;
  _type: "reference";
}

export interface Seo {
  _type: "seo";
  metaAuthor: string;
  metaCharset: string;
  metaDescription: string;
  metaLanguage: string;
  metaRobots: string;
  metaTitle: string;
  metaViewport: string;
  structuredData?: Record<string, unknown>;
  type: "website";
}

export interface ContentBlock {
  _key: string;
  _type: "contentBlock";
  callToAction: CallToAction;
  color: Color;
  content: string;
  subtitle: string;
  title: string;
}

export interface Color {
  _type: "color";
  alpha: number;
  hex: string;
  hsl: ColorChannel;
  hsv: ColorChannel;
  rgb: ColorChannel;
}

export interface ColorChannel {
  [key: string]: number | string;
}

export interface HeroBlock {
  backgroundImage: ImageReference;
  callToAction: CallToAction;
  content: string;
  ghostButton: CallToAction;
  subtitle: string;
  title: string;
}

export interface Sponsor {
  _key: string;
  _type: "sponsor";
  altText: string;
  image: ImageReference;
  url: string;
}

export interface AboutPageRequest {
  _createdAt: string;
  _id: string;
  _originalId: string;
  _rev: string;
  _system: Record<string, unknown>;
  base: Record<string, unknown>;
  id: string;
  rev: string;
  _type: "aboutPage";
  _updatedAt: string;
  content: PortableTextBlock[];
  pageTitle: string;
  seo: Seo;
  title: string;
}

export interface ContactPageRequest {
  _createdAt: string;
  _id: string;
  _originalId: string;
  _rev: string;
  _type: "contactPage";
  _updatedAt: string;
  content: PortableTextBlock[];
  pageTitle: string;
  seo: Seo;
  title: string;
}

export interface TalentPageRequest {
  _createdAt: string;
  _id: string;
  _originalId: string;
  _rev: string;
  _system: Record<string, unknown>;
  base: Record<string, unknown>;
  id: string;
  rev: string;
  _type: "talentPage";
  _updatedAt: string;
  content: PortableTextBlock[];
  pageTitle: string;
  seo: Seo;
  subtitle: string;
  title: string;
}

export interface TalentRequest {
  _createdAt: string;
  _id: string;
  _originalId: string;
  _rev: string;
  _type: "talent";
  _updatedAt: string;
  bio: PortableTextBlock[];
  name: string;
  photo: ImageReference;
  role: string;
  slug: Slug;
}

export interface Slug {
  _type: "slug";
  current: string;
}

export interface PortableTextBlock {
  _key: string;
  _type: "block";
  children: BlockChild[];
  markDefs: unknown[];
  style: string;
}

export interface BlockChild {
  _key: string;
  _type: string;
  text: string;
  marks: string[];
}
