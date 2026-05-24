
import { Controller, useForm } from "react-hook-form";
import { Form } from "react-router";
import Button from "./Button";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import { useState } from "react";
import Typography from "./Typography";
import Title from "./Title";

const VITE_TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;

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

export type FormValues = {
  name: string;
  email: string;
  phone?: string;
  company: string;
  event?: string;
  purpose: string;
  message: string;
};

interface ContactFormProps {
  onSubmit: (data: FormValues) => Promise<Response>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const { register, control, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    defaultValues: { event: "", purpose: "" }
  });

  const submissionHandler = async (data: FormValues) => {
    setFormState("submitting");
    const res = await onSubmit(data);
    const result = await res.json();


    if (result.success) {
      setFormState("success");
      reset();
    } else {
      setFormState("error");
      console.error(result.error);
    }
  };

  if (formState === "success") {
    return (
      <div className="py-8 text-center space-y-4">
        <Title level="h2">
          Thank you for reaching out!
        </Title>
        <Typography>We'll get back to you soon.</Typography>
        <div className="pt-4">
          <Button label="Start Over" onClick={() => setFormState("idle")} />
        </div>
      </div>
    );
  }

  if (formState === "error") {
    return (
      <div className="py-8 text-center space-y-4">
        <Title level="h2">
          Oops! Something went wrong.
        </Title>
        <Typography>There was an error submitting your message.</Typography>
        <div className="pt-4">
          <Button label="Try Again" onClick={() => setFormState("idle")} />
        </div>
      </div>
    );
  }

  if (formState === "submitting") {
    return (
      <div className="flex items-center justify-center h-64 py-8">
        <i className="fas fa-spinner fa-spin text-2xl text-stone-500"></i>
      </div>
    );
  }

  return (
    <Form onSubmit={handleSubmit(submissionHandler)} className="space-y-6">
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
        <div className="cf-turnstile" data-sitekey={VITE_TURNSTILE_SITE_KEY}></div>
        <Button type="submit" label="Submit" />
        <Button type="button" variant="ghost" label="Reset" onClick={() => reset()} />
      </div>
    </Form>
  );
}