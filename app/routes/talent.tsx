import Title from "~/components/Title";
import Typography from "~/components/Typography";
import type { Route } from "./+types/talent";
import RosterCard from "~/components/RosterCard";
import type { TalentPageRequest, TalentRequest } from "~/types/requests";
import { fetchTalentPageData, fetchAllTalentData } from "~/util/requests";
import { useLoaderData } from "react-router";
import BlockRenderer from "~/components/BlockRenderer";
import { imageBuilder } from "~/util/imageBuilder";

interface LoaderData {
  talentPageData: TalentPageRequest;
  talentsData: TalentRequest[];
}

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Princessential Management - Talent" },
    { name: "description", content: "Explore opportunities with Princessential Management." },
  ];
}

export async function loader() {
  const [talentPageData, talentsData] = await Promise.all([
    fetchTalentPageData(),
    fetchAllTalentData(),
  ]);

  return { talentPageData, talentsData };
}

export default function Talent() {
  const { talentPageData, talentsData } = useLoaderData<LoaderData>();

  return (
    <div className="py-16 space-y-12">
      <div className="text-center space-y-4">
        {talentPageData.title && (
          <Title level="h1" size="xl" className="text-center">
            {talentPageData.title}
          </Title>
        )}
        {talentPageData.subtitle && (
          <Title level="h2" size="sm" className="text-center">
            {talentPageData.subtitle}
          </Title>
        )}
      </div>
      <div className="space-y-8">
        {talentPageData.content && (
          <BlockRenderer content={talentPageData.content} withStyles />
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {talentsData.map((member) => (
          <RosterCard
            key={member._id}
            name={member.name}
            role={member.role}
            image={{
              src: imageBuilder(member.photo).url(),
              alt: member.name,
            }}
            description={member.bio}
            url={`/talent/${member.slug.current}`}
          />
        ))}
      </div>
    </div>
  );
}
