import Title from "~/components/Title";
import Typography from "~/components/Typography";
import type { Route } from "./+types/talent";
import RosterCard from "~/components/RosterCard";

const REPLACE_SPACE_REGEX = /\s+/g;

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Princessential Management - Talent" },
    { name: "description", content: "Explore opportunities with Princessential Management." },
  ];
}

export default function Talent() {

  const roster = [
    {
      name: "Jane Doe",
      role: "Content Creator",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
      image: {
        src: "https://picsum.photos/300/300",
        alt: "Jane Doe",
        width: 300,
        height: 300,
      },
    },
    {
      name: "John Smith",
      role: "Influencer",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
      image: {
        src: "https://picsum.photos/300/300",
        alt: "John Smith",
        width: 300,
        height: 300,
      },
    },
    {
      name: "Emily Johnson",
      role: "Brand Ambassador",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
      image: {
        src: "https://picsum.photos/300/300",
        alt: "Emily Johnson",
        width: 300,
        height: 300,
      },
    },
    {
      name: "Michael Brown",
      role: "Model",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
      image: {
        src: "https://picsum.photos/300/300",
        alt: "Michael Brown",
        width: 300,
        height: 300,
      },
    }
  ];

  return (
    <div className="py-16 space-y-12">
      <div className="text-center space-y-4">
        <Title level="h1" size="xl" className="text-center">
          Talent Management
        </Title>
        <Title level="h2" size="sm" className="text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
        </Title>
      </div>
      <div className="space-y-8 indent-8">
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {roster.map((member) => (
          <RosterCard key={member.name.replace(REPLACE_SPACE_REGEX, '-')} {...member} />
        ))}
      </div>
    </div>
  );
}
