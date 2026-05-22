import type { Route } from "./+types/contact";
import { useForm, Controller } from "react-hook-form";
import TextInput from "~/components/TextInput";
import SelectInput from "~/components/SelectInput";
import Button from "~/components/Button";
import Title from "~/components/Title";
import Typography from "~/components/Typography";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Princessential Management - Contact" },
    { name: "description", content: "Get in touch with us." },
  ];
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

export default function Contact() {
  const { register, control, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    defaultValues: { event: "", purpose: "" }
  });

  const onSubmit = (data: FormValues) => {
    // submission not needed yet - placeholder
    // keep client-side only for now; SSR-compatible (no window usage)
    // eslint-disable-next-line no-console
    console.log("contact form", data);
  };

  return (
    <div>
      <Title level="h1" size="xl" className="text-center pt-16 pb-5">
        Business Inquiries
      </Title>
      <div className="max-w-5xl mx-auto space-y-6">
        <Typography>
          We would love to hear from you! Whether you have a question about our services, want to discuss a potential collaboration, or just want to say hello, feel free to reach out. Our team is here to assist you and will get back to you as soon as possible.
        </Typography>
        <Typography>
          Please fill out the form below with your contact information and message, and we will be in touch shortly. Thank you for considering Princessential Management!
        </Typography>
      </div>
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
