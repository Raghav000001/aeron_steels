import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";
import { rateLimit } from "@/lib/rate-limit";
import { adminNotification } from "@/emails/admin-notification";
import { customerReply } from "@/emails/customer-reply";

/**
 * Validates and sanitizes the contact form body.
 * Returns { valid: boolean, data: object, errors: string[] }
 */
function validateContactForm(body) {
  const errors = [];
  const data = { name: "", email: "", phone: "", company: "", subject: "", message: "" };

  if (!body || typeof body !== "object") {
    return { valid: false, data, errors: ["Invalid request body."] };
  }

  // Honeypot check — hidden field, bots fill it
  if (body.website) {
    return { valid: false, data, errors: ["Spam detected."] };
  }

  // Name
  if (!body.name || typeof body.name !== "string" || body.name.trim().length < 2) {
    errors.push("Full name is required (min 2 characters).");
  } else {
    data.name = body.name.trim().slice(0, 100);
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!body.email || typeof body.email !== "string" || !emailRegex.test(body.email.trim())) {
    errors.push("A valid email address is required.");
  } else {
    data.email = body.email.trim().toLowerCase().slice(0, 254);
  }

  // Phone (optional)
  if (body.phone && typeof body.phone === "string") {
    data.phone = body.phone.trim().replace(/[^0-9+\-\s()]/g, "").slice(0, 20);
  }

  // Company (optional)
  if (body.company && typeof body.company === "string") {
    data.company = body.company.trim().slice(0, 200);
  }

  // Subject
  if (!body.subject || typeof body.subject !== "string" || body.subject.trim().length < 3) {
    errors.push("Subject is required (min 3 characters).");
  } else {
    data.subject = body.subject.trim().slice(0, 200);
  }

  // Message
  if (!body.message || typeof body.message !== "string" || body.message.trim().length < 10) {
    errors.push("Message is required (min 10 characters).");
  } else {
    data.message = body.message.trim().slice(0, 5000);
  }

  return { valid: errors.length === 0, data, errors };
}

export async function POST(request) {
  try {
    // --- Rate limiting by IP ---
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    const limitCheck = rateLimit(`contact:${ip}`, { limit: 3, windowMs: 60000 });

    if (!limitCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil(limitCheck.resetIn / 1000)),
          },
        }
      );
    }

    // --- Honeypot field check ---
    const body = await request.json();

    // Honeypot: if "website" field is filled, it's a bot
    if (body.website && body.website.length > 0) {
      // Return success to not tip off bots, but don't send anything
      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been received.",
      });
    }

    // --- Validate ---
    const { valid, data, errors } = validateContactForm(body);

    if (!valid) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed.",
          errors,
        },
        { status: 422 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;

    if (!receiverEmail) {
      console.error("CONTACT_RECEIVER_EMAIL is not configured.");
      return NextResponse.json(
        {
          success: false,
          message: "Server configuration error. Please try again later.",
        },
        { status: 500 }
      );
    }

    // --- Send admin notification ---
    const adminHtml = adminNotification({
      ...data,
      submittedAt: new Date().toISOString(),
    });

    await sendMail({
      to: receiverEmail,
      subject: `New Contact Inquiry: ${data.subject} — ${data.name}`,
      html: adminHtml,
    });

    // --- Send customer auto-reply ---
    const customerHtml = customerReply({
      name: data.name,
      subject: data.subject,
    });

    await sendMail({
      to: data.email,
      subject: "Thank You for Contacting Aeron Steels",
      html: customerHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received. We'll get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
