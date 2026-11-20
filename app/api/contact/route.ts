import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SERVICES = new Set([
  "SEO Services",
  "Social Media Marketing",
  "Influencer Marketing",
  "Branding",
  "Web Development",
]);

type Enquiry = {
  name?: unknown;
  email?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown; // honeypot, never show in the UI
};

function isEnquiry(input: Enquiry) {
  return (
    typeof input.name === "string" &&
    input.name.trim().length >= 2 &&
    input.name.length <= 120 &&
    typeof input.email === "string" &&
    input.email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email) &&
    typeof input.service === "string" &&
    SERVICES.has(input.service) &&
    typeof input.message === "string" &&
    input.message.trim().length >= 10 &&
    input.message.length <= 5000
  );
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) =>
    ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[char] || char)
  );
}

export async function POST(request: NextRequest) {
  const length = Number(request.headers.get("content-length") || 0);
  if (length > 16_384) {
    return NextResponse.json({ error: "Message is too long." }, { status: 413 });
  }

  let input: Enquiry;
  try {
    input = await request.json();
    if (!input || typeof input !== "object") throw new Error("Invalid body");
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Quietly absorb obvious bot form fills.
  if (input.website) return NextResponse.json({ ok: true });

  if (!isEnquiry(input)) {
    return NextResponse.json(
      { error: "Please check your details and try again." },
      { status: 400 }
    );
  }

  const name = (input.name as string).trim();
  const email = (input.email as string).trim();
  const service = input.service as string;
  const message = (input.message as string).trim();

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  // In development/test mode without Resend API keys, log inquiry and succeed gracefully
  if (!apiKey || !recipient || !sender) {
    console.log("⚡ [Dev/Demo Mode] Contact Enquiry Received:", {
      name,
      email,
      service,
      message,
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true, devMode: true });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `One Impact contact: ${service}`,
        html: `
          <h2>New enquiry from ${escapeHtml(name)}</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        `,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Contact email provider failed", response.status);
      return NextResponse.json(
        { error: "We couldn't send your message right now. Please email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email network error", error);
    return NextResponse.json(
      { error: "The message service is currently unavailable. Please email us directly." },
      { status: 502 }
    );
  }
}
