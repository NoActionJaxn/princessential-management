import type { ActionFunctionArgs } from "react-router";
import { getSanityClient } from "~/util/client";

interface SanityRequestBody {
  _type: string;
  name: string;
  email: string;
  phone?: string;
  company: string;
  event?: string;
  purpose: string;
  message: string;
}

export async function action({ request }: ActionFunctionArgs) {
  const client = getSanityClient({ token: process.env.SANITY_WRITE_TOKEN });

  const requiredFields = ["name", "email", "company", "purpose", "message"];

  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    if (!request.body) {
      return Response.json({ error: "Missing request body" }, { status: 400 });
    }

    const body = await request.json() as SanityRequestBody;

    for (const field of requiredFields) {
      if (!body[field as keyof SanityRequestBody]) {
        return Response.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const doc = await client.create({
      ...body,
      _type: "businessInquiry",
    });

    return Response.json({ success: true, id: doc._id }, { status: 201 });
  } catch (err) {
    console.error("Sanity write error:", err);
    return Response.json({ error: "Failed to write to Sanity" }, { status: 500 });
  }
}