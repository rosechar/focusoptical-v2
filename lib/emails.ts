import { BUSINESS, SITE_URL } from "@/lib/business";

export interface AppointmentRequest {
  name: string;
  email: string;
  phone: string;
  appointmentLabel: string;
  details: string;
}

interface EmailContent {
  subject: string;
  html: string;
  text: string;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const fullAddress = `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}`;

const layout = (heading: string, body: string) => `
  <div style="background:#f1f5f9;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
      <div style="background:#2563eb;padding:24px 28px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding-right:10px;vertical-align:middle;">
              <img src="${SITE_URL}/images/email-logo.png" width="32" height="32" alt="" style="display:block;border:0;border-radius:7px;" />
            </td>
            <td style="vertical-align:middle;">
              <span style="font-size:18px;font-weight:700;color:#ffffff;">${BUSINESS.name}</span>
            </td>
          </tr>
        </table>
      </div>
      <div style="padding:28px;">
        <h2 style="margin:0 0 16px;font-size:20px;font-weight:700;color:#0f172a;">${heading}</h2>
        ${body}
      </div>
      <div style="padding:20px 28px;border-top:1px solid #e2e8f0;font-size:13px;color:#64748b;line-height:1.6;">
        ${BUSINESS.name} &middot; ${fullAddress}<br />
        <a href="${BUSINESS.phoneHref}" style="color:#2563eb;text-decoration:none;">${BUSINESS.phoneDisplay}</a>
      </div>
    </div>
  </div>
`;

const detailRow = (label: string, value: string) => `
  <tr>
    <td style="padding:8px 0;font-size:14px;color:#64748b;width:140px;vertical-align:top;">${label}</td>
    <td style="padding:8px 0;font-size:14px;color:#0f172a;font-weight:500;">${value}</td>
  </tr>
`;

export function ownerNotificationEmail(req: AppointmentRequest): EmailContent {
  const name = escapeHtml(req.name);
  const email = escapeHtml(req.email);
  const phone = escapeHtml(req.phone);
  const appointment = escapeHtml(req.appointmentLabel);
  const details = escapeHtml(req.details || "No additional details provided.");

  const body = `
    <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#334155;">
      A new appointment request was submitted through the website.
    </p>
    <table style="width:100%;border-collapse:collapse;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;">
      ${detailRow("Name", name)}
      ${detailRow("Email", `<a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a>`)}
      ${detailRow("Phone", `<a href="tel:${phone}" style="color:#2563eb;text-decoration:none;">${phone}</a>`)}
      ${detailRow("Appointment", appointment)}
      ${detailRow("Details", details)}
    </table>
  `;

  const text = [
    "New appointment request",
    "",
    `Name: ${req.name}`,
    `Email: ${req.email}`,
    `Phone: ${req.phone}`,
    `Appointment: ${req.appointmentLabel}`,
    `Details: ${req.details || "No additional details provided."}`,
  ].join("\n");

  return {
    subject: `New appointment request — ${req.name}`,
    html: layout("New appointment request", body),
    text,
  };
}

export function customerConfirmationEmail(req: AppointmentRequest): EmailContent {
  const name = escapeHtml(req.name);
  const appointment = escapeHtml(req.appointmentLabel);
  const hasDetails = req.details.trim().length > 0;
  const details = escapeHtml(req.details);

  const body = `
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#334155;">
      Hi ${name},
    </p>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#334155;">
      Thank you for requesting an appointment with ${BUSINESS.name}. We've received
      your request and will contact you within one business day to confirm a time.
    </p>
    <table style="width:100%;border-collapse:collapse;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;">
      ${detailRow("Appointment", appointment)}
      ${hasDetails ? detailRow("Your details", details) : ""}
    </table>
    <p style="margin:20px 0 0;font-size:15px;line-height:1.6;color:#334155;">
      Need to reach us sooner? Call
      <a href="${BUSINESS.phoneHref}" style="color:#2563eb;text-decoration:none;font-weight:500;">${BUSINESS.phoneDisplay}</a>.
    </p>
  `;

  const text = [
    `Hi ${req.name},`,
    "",
    `Thank you for requesting an appointment with ${BUSINESS.name}. We've received your request and will contact you within one business day to confirm a time.`,
    "",
    `Appointment: ${req.appointmentLabel}`,
    ...(hasDetails ? [`Your details: ${req.details}`] : []),
    "",
    `Need to reach us sooner? Call ${BUSINESS.phoneDisplay}.`,
    "",
    `${BUSINESS.name} — ${fullAddress}`,
  ].join("\n");

  return {
    subject: `We received your appointment request — ${BUSINESS.name}`,
    html: layout("Request received", body),
    text,
  };
}
