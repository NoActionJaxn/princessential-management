import { useForm, Controller } from "react-hook-form";
import TextInput from "~/components/TextInput";
import SelectInput from "~/components/SelectInput";
import Button from "~/components/Button";
import Title from "~/components/Title";
import type { ContactPageRequest } from "~/types/requests";
import { fetchContactPageData } from "~/util/requests";
import { useLoaderData } from "react-router";
import BlockRenderer from "~/components/BlockRenderer";
import { defaultSeo, metaFromSeo } from "~/util/seo";
import type { FormValues } from "~/components/ContactForm";
import ContactForm from "~/components/ContactForm";

interface LoaderData {
  contactPageData: ContactPageRequest;
}

export function meta({ data }: { data?: LoaderData }) {
  return metaFromSeo(data?.contactPageData?.seo ?? defaultSeo);
}

export async function loader() {
  const contactPageData = await fetchContactPageData();

  return { contactPageData };
}


export default function Contact() {
  const { contactPageData } = useLoaderData<LoaderData>();

  const onSubmit = async (data: FormValues) => {
    const res = await fetch("/api/sanity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _type: "contact",
        ...data,
      }),
    });

    return res;
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto">
        {contactPageData.title && (
          <Title level="h1" size="xl" className="text-center pt-16 pb-5">
            {contactPageData.title}
          </Title>
        )}
        {contactPageData.content && (
          <BlockRenderer content={contactPageData.content} withStyles />
        )}
      </div>

      <div className="max-w-5xl mx-auto mt-8">
        <ContactForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}
