import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimitWindowMs = 60_000;
const maxRequestsPerWindow = 3;
const requestLog = new Map<string, { count: number; resetAt: number }>();

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function getClientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  return forwardedFor || realIp || "anonymous";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = requestLog.get(key);

  if (!current || current.resetAt <= now) {
    requestLog.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  current.count += 1;
  requestLog.set(key, current);
  return current.count > maxRequestsPerWindow;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  const clientKey = getClientKey(request);

  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      { message: "Too many submissions. Please wait a minute and try again." },
      { status: 429 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = isString(payload.name) ? payload.name.trim() : "";
  const email = isString(payload.email) ? payload.email.trim() : "";
  const company = isString(payload.company) ? payload.company.trim() : "";
  const message = isString(payload.message) ? payload.message.trim() : "";
  const website = isString(payload.website) ? payload.website.trim() : "";

  if (website) {
    return NextResponse.json({ message: "Thanks for your message." }, { status: 200 });
  }

  if (!name || !emailPattern.test(email) || message.length < 20) {
    return NextResponse.json(
      { message: "Please provide your name, a valid email, and a message of at least 20 characters." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      { message: "The contact form is not configured yet. Please email us directly." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      reply_to: email,
      subject: `New ScaleVeda inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.55; color: #111111;">
          <h1 style="font-size: 22px; margin-bottom: 16px;">New ScaleVeda inquiry</h1>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company:</strong> ${safeCompany}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
      text: `New ScaleVeda inquiry\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\n\nMessage:\n${message}`,
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form email failed", error);
    return NextResponse.json(
      { message: "The message could not be sent. Please try again or email us directly." },
      { status: 502 },
    );
  }
}
