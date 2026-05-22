import type { PortableTextBlock } from "@portabletext/react";

export interface HomePageRequest {
  _createdAt: string;
  _id: string;
  _originalId: string;
  _rev: string;
  _type: "homePage";
  _updatedAt: string;
  pageTitle: string;
  heroBlock: HeroBlock;
  sponsorsBlock: Sponsor[];
  contentBlocks: ContentBlock[];
  carouselBlock: CarouselBlock;
}

export interface HeroBlock {
  title: string;
  subtitle: string;
  content: string;
  backgroundImage: ImageReference;
  callToAction: CallToAction;
  ghostButton: CallToAction;
}

export interface CarouselBlock {
  title: string;
  images: ImageBlock[];
  footNoteBlock: FootNoteBlock;
  seo: Seo;
}

export interface FootNoteBlock {
  title: string;
  content: string;
  callToAction: CallToAction;
}

export interface ImageBlock {
  _key?: string;
  _type?: "imageBlock";
  image: ImageReference;
  altText: string;
}

export interface Sponsor {
  _key?: string;
  _type?: "sponsor";
  image: ImageReference;
  url: string;
  altText: string;
}

export interface CallToAction {
  text: string;
  url: string;
}

export interface ImageReference {
  _type?: "image";
  asset: ReferenceAsset;
}

export interface ReferenceAsset {
  _ref: string;
  _type: "reference";
}

export interface Seo {
  _type?: "seo";
  metaTitle: string;
  metaDescription: string;
  metaAuthor: string;
  metaViewport: string;
  metaCharset: string;
  metaLanguage: string;
  metaKeywords?: string[];
  metaImage?: ImageReference;
  metaRobots: string;
  canonicalURL?: string;
  structuredData?: string;
  type: "website" | "article" | "profile";
}

export interface ContentBlock {
  _key?: string;
  _type?: "contentBlock";
  title: string;
  subtitle: string;
  content: string;
  color: Color;
  callToAction: CallToAction;
}

export interface Color {
  _type?: "color";
  hex: string;
  rgb?: ColorChannel;
  hsl?: ColorChannel;
  hsv?: ColorChannel;
  alpha?: number;
}

export interface ColorChannel {
  [key: string]: number | string;
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

export interface BlockChild {
  _key: string;
  _type: string;
  text: string;
  marks: string[];
}
