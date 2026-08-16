import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getAppointmentLabel } from "@/lib/appointments";
import { emailRegex, isValidPhone } from "@/lib/validation";
import {
  ownerNotificationEmail,
  customerConfirmationEmail,
  type AppointmentRequest,
} from "@/lib/emails";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const ownerEmail = process.env.OWNER_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const segmentId = process.env.RESEND_SEGMENT_ID;

  if (!apiKey || !ownerEmail || !fromEmail) {
    console.error("Resend environment variables are not configured.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const appointment =
    typeof payload.appointment === "string" ? payload.appointment : "";
  const optIn = payload.optIn !== false;

  // Honeypot: real visitors never see this field, so any value means a bot.
  // Return the normal success shape so the bot has nothing to learn from.
  if (typeof payload.website === "string" && payload.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const appointmentLabel = getAppointmentLabel(appointment);

  // Email is optional — a visitor can request a call with just a phone number.
  // Only validate it when one is supplied.
  const hasEmail = email.length > 0;

  if (
    name.length < 2 ||
    (hasEmail && !emailRegex.test(email)) ||
    !isValidPhone(phone) ||
    !appointmentLabel
  ) {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const req: AppointmentRequest = {
    name,
    email,
    phone,
    appointmentLabel,
  };

  const resend = new Resend(apiKey);
  const owner = ownerNotificationEmail(req);

  try {
    const ownerResult = await resend.emails.send({
      from: fromEmail,
      to: ownerEmail,
      ...(hasEmail ? { replyTo: email } : {}),
      subject: owner.subject,
      html: owner.html,
      text: owner.text,
    });

    if (ownerResult.error) {
      console.error("Owner notification failed:", ownerResult.error);
      return NextResponse.json(
        { error: "Failed to send appointment request." },
        { status: 502 }
      );
    }

    // Only send a customer confirmation (and add to the list) when we have an email.
    if (hasEmail) {
      const customer = customerConfirmationEmail(req);
      const customerResult = await resend.emails.send({
        from: fromEmail,
        to: email,
        replyTo: ownerEmail,
        subject: customer.subject,
        html: customer.html,
        text: customer.text,
      });

      if (customerResult.error) {
        // The business has been notified; a failed customer copy shouldn't fail the request.
        console.error("Customer confirmation failed:", customerResult.error);
      }
    }

    // Marketing opt-in is best effort: skipped when no segment is configured, and a
    // failed add shouldn't fail the appointment request.
    if (optIn && hasEmail && segmentId) {
      try {
        const [firstName, ...rest] = name.split(/\s+/);
        const contactResult = await resend.contacts.create({
          email,
          firstName,
          lastName: rest.join(" ") || undefined,
          unsubscribed: false,
          properties: { phone },
          segments: [{ id: segmentId }],
        });

        if (contactResult.error) {
          console.error("Segment contact add failed:", contactResult.error);
        }
      } catch (contactErr) {
        console.error("Segment contact add error:", contactErr);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend send error:", err);
    return NextResponse.json(
      { error: "Failed to send appointment request." },
      { status: 502 }
    );
  }
}
