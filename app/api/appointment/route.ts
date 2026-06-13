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

  if (!apiKey || !ownerEmail || !fromEmail || !segmentId) {
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
  const details =
    typeof payload.details === "string" ? payload.details.trim() : "";
  const optIn = payload.optIn !== false;

  const appointmentLabel = getAppointmentLabel(appointment);

  if (
    name.length < 2 ||
    !emailRegex.test(email) ||
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
    details,
  };

  const resend = new Resend(apiKey);
  const owner = ownerNotificationEmail(req);
  const customer = customerConfirmationEmail(req);

  try {
    const ownerResult = await resend.emails.send({
      from: fromEmail,
      to: ownerEmail,
      replyTo: email,
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

    if (optIn) {
      // A failed segment add shouldn't fail the appointment request.
      try {
        const [firstName, ...rest] = name.split(/\s+/);
        const contactResult = await resend.contacts.create({
          email,
          firstName,
          lastName: rest.join(" ") || undefined,
          phone,
          unsubscribed: false,
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
