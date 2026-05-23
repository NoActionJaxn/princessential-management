import { useLoaderData, useNavigate } from "react-router";
import Image from "~/components/Image";
import Title from "~/components/Title";
import Button from "~/components/Button";
import BlockRenderer from "~/components/BlockRenderer";
import { imageBuilder } from "~/util/imageBuilder";
import { fetchTalentBySlug } from "~/util/requests";
import type { TalentRequest } from "~/types/requests";

interface LoaderData {
  talent: TalentRequest;
}

export function meta({ data }: { data?: LoaderData }) {
  if (!data?.talent) {
    return [
      { title: "Talent not found | Princessential Management" },
    ];
  }

  return [
    { title: `${data.talent.name} | Princessential Management` },
    { name: "description", content: `${data.talent.name} is available through Princessential Management as a ${data.talent.role}.` },
  ];
}

export async function loader({ params }: { params: Record<string, string | undefined> }) {
  const slug = params.slug;
  if (!slug) {
    throw new Response("Talent slug is required", { status: 400 });
  }

  const talent = await fetchTalentBySlug(slug);

  if (!talent) {
    throw new Response("Talent not found", { status: 404 });
  }

  return { talent };
}

export default function TalentProfile() {
  const { talent } = useLoaderData<LoaderData>();
  const navigate = useNavigate();

  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          {talent.photo && (
            <div className="overflow-hidden rounded-lg border border-stone-900">
              <Image
                src={imageBuilder(talent.photo).url()}
                alt={talent.name ?? "Talent Photo"}
                className="w-full h-96 object-cover"
              />
            </div>
          )}
          <div className="space-y-3 px-2">
            {talent.name && (
              <Title size="xl">
                {talent.name}
              </Title>
            )}
            {talent.role && (
              <Title level="h3" size="sm" className="text-stone-500">
                {talent.role}
              </Title>
            )}
            <BlockRenderer content={talent.bio} withStyles />
          </div>
        </div>
        <div className="mt-8">
          <Button
            label="Back"
            className="uppercase"
            onClick={() => navigate(-1)}
          />
        </div>
      </div>
    </div>
  );
}
