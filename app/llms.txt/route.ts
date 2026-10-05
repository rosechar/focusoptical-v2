import { BUSINESS, FULL_ADDRESS, HOURS, PEOPLE, SITE_URL } from "@/lib/business";
import { CITIES } from "@/lib/cities";
import { SERVICES } from "@/lib/services";

// Plain-language summary for AI assistants (llmstxt.org format), built from the same
// data as the site so facts like hours and services can't drift out of sync.
export const dynamic = "force-static";

export function GET() {
  const body = `# ${BUSINESS.name}

> Independent, family-owned optician in Rochester Hills, Michigan (Oakland County), open since 1984. Eye exams with an on-site eye doctor, prescription glasses cut and edged in our own lab with most ready the next day, contact lenses, and free eyeglass adjustments for anyone.

## Key facts

- Address: ${FULL_ADDRESS}
- Phone: ${BUSINESS.phoneDisplay}
- Next-day glasses: lenses are cut and edged in the shop's own lab, so most prescriptions are ready the next day. Some lens types and coatings take longer.
- Eye doctor: ${PEOPLE.optometrist.name}, performs eye exams and contact lens exams on Tuesdays.
- Optician: ${PEOPLE.owner.name}, owner, has made eyeglasses since 1977 and opened ${BUSINESS.name} in 1984.
- New lenses can be cut for frames customers already own.
- Adjustments and cleaning are free for anyone, no purchase or appointment needed.
- Most common vision insurance plans accepted; customers without insurance are welcome.
- Appointments are required for eye exams and for glasses or contacts.

## Hours

${HOURS.map(({ day, display }) => `- ${day}: ${display}`).join("\n")}

## Services

${SERVICES.map(({ title, description, href, id }) => `- [${title}](${SITE_URL}${href ?? `/services#${id}`}): ${description}`).join("\n")}

## Areas served

All of Oakland County, MI, and nearby Macomb County, including:

${CITIES.map(({ slug, city, driveTime }) => `- [${city}, MI](${SITE_URL}/service-areas/${slug}): ${driveTime}`).join("\n")}

## Pages

- [Home](${SITE_URL}/)
- [Next-day glasses](${SITE_URL}/glasses)
- [Eye exams](${SITE_URL}/eye-exams)
- [All services](${SITE_URL}/services)
- [Insurance & pricing](${SITE_URL}/insurance)
- [About Tom and Dr. Galper](${SITE_URL}/about)
- [Book a visit, hours & directions](${SITE_URL}/contact)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
