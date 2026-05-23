import type { Seo } from "~/types/requests";

export const defaultSeo: Seo = {
  _type: "seo",
  metaTitle: "Princessential Management",
  metaDescription: "Princessential Management official website.",
  metaAuthor: "Princessential Management",
  metaViewport: "width=device-width, initial-scale=1",
  metaCharset: "utf-8",
  metaLanguage: "en-US",
  metaRobots: "index, follow",
  type: "website",
};

export function metaFromSeo(seo: Seo) {
  return [
    { title: seo.metaTitle },
    { name: "description", content: seo.metaDescription },
    { name: "author", content: seo.metaAuthor },
    { name: "viewport", content: seo.metaViewport },
    { name: "charset", content: seo.metaCharset },
    { name: "language", content: seo.metaLanguage },
    { name: "robots", content: seo.metaRobots },
    ...(seo.metaKeywords ? [{ name: "keywords", content: seo.metaKeywords.join(", ") }] : []),
    ...(seo.canonicalURL ? [{ name: "canonical", content: seo.canonicalURL }] : []),
  ];
}
