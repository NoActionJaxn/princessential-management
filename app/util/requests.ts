import type { ContactPageRequest, AboutPageRequest, HomePageRequest, TalentRequest, TalentPageRequest, SocialRequest } from "~/types/requests";
import { client } from "./client";

export function handleRequestError<T>(context: string) {
  return (err: unknown): T | null => {
    console.error(`Error fetching ${context}:`, err);
    return null;
  };
}

export async function fetchHomePageData() {
  const request = `
    *[_type == "homePage" && _id == "homePage"][0]{
      ...
    }
  `;
  return await client.fetch<HomePageRequest>(request).catch(handleRequestError);
};

export async function fetchAboutPageData() {
  const request = `
    *[_type == "aboutPage" && _id == "aboutPage"][0]{
      ...
    }
  `;
  return await client.fetch<AboutPageRequest>(request).catch(handleRequestError);
};

export async function fetchContactPageData() {
  const request = `
    *[_type == "contactPage" && _id == "contactPage"][0]{
      ...
    }
  `;
  return await client.fetch<ContactPageRequest>(request).catch(handleRequestError);
};

export async function fetchTalentPageData() {
  const request = `
    *[_type == "talentPage" && _id == "talentPage"][0]{
      ...
    }
  `;
  return await client.fetch<TalentPageRequest>(request).catch(handleRequestError);
};

export async function fetchAllTalentData() {
  const request = `
    *[_type == "talent"]{
      ...
    }
  `;
  return await client.fetch<TalentRequest[]>(request).catch(handleRequestError);
}

export async function fetchTalentBySlug(slug: string) {
  const request = `
    *[_type == "talent" && slug.current == $slug][0]{
      ...
    }
  `;
  return await client.fetch<TalentRequest>(request, { slug }).catch(handleRequestError);
} 

export async function fetchSocials() {
  const request = `
    *[_type == "socials"]{
      ...
    }
  `;
  return await client.fetch<SocialRequest[]>(request).catch(handleRequestError);
}