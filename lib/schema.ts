import { BUSINESS, HOURS, PEOPLE, SITE_URL, SOCIAL_PROFILES } from "@/lib/business";
import { CITIES } from "@/lib/cities";

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const OWNER_ID = `${SITE_URL}/#tom-hamilton`;
export const OPTOMETRIST_ID = `${SITE_URL}/#diane-galper`;

/** Services offered, mirrored in the LocalBusiness offer catalog and the /services page anchors. */
export const SERVICE_CATALOG = [
  {
    id: "eye-exams",
    name: "Comprehensive Eye Exams",
    description: "Annual vision assessments for all ages, performed by Dr. Diane Galper, OD.",
  },
  {
    id: "contact-exams",
    name: "Contact Lens Exams & Fittings",
    description: "Fit and eye-health check with a full eye exam included in the same visit.",
  },
  {
    id: "retail",
    name: "Prescription Glasses & Contact Lenses",
    description: "Frames for every budget, contact lens brands, and new lenses cut for frames you already own. Most prescriptions ready next day.",
  },
  {
    id: "adjustments",
    name: "Free Eyeglass Adjustments & Cleaning",
    description: "Free for anyone, on glasses bought anywhere. No purchase or appointment needed.",
  },
] as const;

const owner = {
  "@type": "Person",
  "@id": OWNER_ID,
  name: PEOPLE.owner.name,
  jobTitle: PEOPLE.owner.jobTitle,
  description: PEOPLE.owner.description,
  worksFor: { "@id": BUSINESS_ID },
  image: `${SITE_URL}/images/tom.jpg`,
  url: `${SITE_URL}/about`,
};

const optometrist = {
  "@type": "Person",
  "@id": OPTOMETRIST_ID,
  name: PEOPLE.optometrist.name,
  jobTitle: PEOPLE.optometrist.jobTitle,
  description: PEOPLE.optometrist.description,
  worksFor: { "@id": BUSINESS_ID },
  url: `${SITE_URL}/about`,
};

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Optician",
      "@id": BUSINESS_ID,
      name: BUSINESS.name,
      foundingDate: "1984",
      founder: { "@id": OWNER_ID },
      employee: [{ "@id": OWNER_ID }, { "@id": OPTOMETRIST_ID }],
      hasMap: BUSINESS.mapsUrl,
      image: `${SITE_URL}/images/shop.jpeg`,
      logo: `${SITE_URL}/images/email-logo.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        postalCode: BUSINESS.address.zip,
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 42.6354,
        longitude: -83.1718,
      },
      telephone: BUSINESS.phoneE164,
      openingHoursSpecification: HOURS.filter((h) => h.opens).map(
        ({ day, opens, closes }) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: day,
          opens,
          closes,
        }),
      ),
      url: SITE_URL,
      ...(SOCIAL_PROFILES.length && { sameAs: SOCIAL_PROFILES }),
      priceRange: "$$",
      description:
        "Focus Optical is a full-service, independently owned optical store in Rochester Hills, MI. We offer eye exams by Dr. Diane Galper, a wide selection of frames and contact lenses, and free eyeglass adjustments. Serving Oakland County since 1984.",
      areaServed: CITIES.map(({ city, county }) => ({
        "@type": "City",
        name: `${city}, MI`,
        containedInPlace: { "@type": "AdministrativeArea", name: `${county}, MI` },
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Optical services",
        itemListElement: SERVICE_CATALOG.map(({ id, name, description }) => ({
          "@type": "Offer",
          url: `${SITE_URL}/services#${id}`,
          itemOffered: {
            "@type": "Service",
            name,
            description,
            provider: { "@id": BUSINESS_ID },
          },
        })),
      },
    },
    owner,
    optometrist,
  ],
};

export function faqJsonLd(faqs: readonly { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
