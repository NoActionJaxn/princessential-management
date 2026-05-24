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

interface LoaderData {
  contactPageData: ContactPageRequest;
}

export function meta({ data }: { data?: LoaderData }) {
  return metaFromSeo(data?.contactPageData?.seo ?? defaultSeo);
}

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  company: string;
  event?: string;
  purpose: string;
  message: string;
};

const eventOptions = [
  { value: "none", label: "None" },
  { value: "conference", label: "Conference" },
  { value: "workshop", label: "Workshop" },
  { value: "other", label: "Other" },
];

const purposeOptions = [
  { value: "booking", label: "Booking" },
  { value: "inquiry", label: "Inquiry" },
  { value: "press", label: "Press" },
  { value: "other", label: "Other" },
];

export async function loader() {
  const contactPageData = await fetchContactPageData();

  return { contactPageData };
}

export default function Contact() {
  const { contactPageData } = useLoaderData<LoaderData>();

  const { register, control, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    defaultValues: { event: "", purpose: "" }
  });

  const onSubmit = async (data: FormValues) => {

    const res = await fetch("/api/sanity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _type: "contact",
        ...data,
      }),
    });

    const result = await res.json();

    if (result.success) {
      console.log("Contact form submitted successfully, document ID:", result.id);
      reset();
    } else {
      console.error(result.error);
    }
  };

  return (
    <div>
      {contactPageData.title && (
        <Title level="h1" size="xl" className="text-center pt-16 pb-5">
          {contactPageData.title}
        </Title>
      )}
      {contactPageData.content && (
        <div className="max-w-5xl mx-auto">
          <BlockRenderer content={contactPageData.content} withStyles />
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto space-y-6 p-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          <TextInput label="Name" {...register("name", { required: "Name is required" })} error={errors.name?.message} />

          <TextInput label="Email" type="email" {...register("email", { required: "Email is required", pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "Invalid email" } })} error={errors.email?.message} />

          <TextInput label="Phone" type="tel" {...register("phone")} />

          <TextInput label="Company" {...register("company", { required: "Company is required" })} error={errors.company?.message} />

          <div>
            <Controller
              name="event"
              control={control}
              render={({ field }) => (
                <SelectInput label="Event (optional)" options={eventOptions} value={field.value} onChange={field.onChange} />
              )}
            />
          </div>

          <div>
            <Controller
              name="purpose"
              control={control}
              rules={{ required: "Purpose is required" }}
              render={({ field }) => (
                <SelectInput label="Purpose" options={purposeOptions} value={field.value} onChange={field.onChange} error={errors.purpose?.message} />
              )}
            />
          </div>
        </div>

        <div>
          <label className="block">
            <span className="block text-sm font-medium mb-1">Message</span>
            <textarea {...register("message", { required: "Message is required" })} className="w-full rounded-md border px-3 py-2 h-36" />
            {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
          </label>
        </div>

        <div className="space-x-4">
          <Button type="submit" label="Submit" />
          <Button type="button" variant="ghost" label="Reset" onClick={() => reset()} />
        </div>
      </form>
    </div>
  );
}
