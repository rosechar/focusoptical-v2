// Production redirects the apex domain to www (308), so www is the canonical host.
export const SITE_URL = "https://www.focusopticalrochesterhills.com";

/** Off-site profiles for the LocalBusiness `sameAs` field. The Google Business Profile
 * uses the stable ?cid= form (maps.app.goo.gl/hfSB43rVQMm9UZvQ9 resolves to it). */
export const SOCIAL_PROFILES: string[] = [
  "https://www.google.com/maps?cid=999085307900063378",
];

export const PEOPLE = {
  owner: {
    name: "Tom Hamilton",
    jobTitle: "Owner & Optician",
    description: "Making eyeglasses by hand since 1977. Opened Focus Optical in 1984 and cuts and edges every lens in the shop's own lab.",
  },
  optometrist: {
    name: "Dr. Diane Galper, OD",
    jobTitle: "Optometrist",
    description: "Performs comprehensive eye exams and contact lens exams at Focus Optical.",
  },
} as const;

export const BUSINESS = {
  name: "Focus Optical",
  phoneE164: "+12488528830",
  phoneHref: "tel:+12488528830",
  phoneDisplay: "(248) 852-8830",
  address: {
    street: "2046 W Auburn Rd",
    city: "Rochester Hills",
    state: "MI",
    zip: "48309",
  },
  mapsUrl:
    "https://maps.google.com/?q=2046+W+Auburn+Rd,+Rochester+Hills,+MI+48309",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=2046%20W%20Auburn%20Rd%2C%20Rochester%20Hills%2C%20MI%2048309&z=14&output=embed",
} as const;

/** Google Business Profile rating, shown on the site. Update when the count grows. */
export const GOOGLE_REVIEWS = {
  rating: "5.0",
  count: 100,
  /** Opens the Maps listing directly on the Reviews tab. */
  url: "https://www.google.com/maps/place/Focus+Optical/data=!4m7!3m6!1s0x8824c18eb6e1bd0d:0xddd76cb4db1ee92!8m2!3d42.6354012!4d-83.1718076!9m1!1b1",
} as const;

/** Single-line street address, e.g. "2046 W Auburn Rd, Rochester Hills, MI 48309". */
export const FULL_ADDRESS = `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}`;

export interface StoreHours {
  day: string;
  display: string;
  /** 24-hour times for structured data; omitted on closed days. */
  opens?: string;
  closes?: string;
}

export const HOURS: StoreHours[] = [
  { day: "Monday", display: "9:00 AM – 6:00 PM", opens: "09:00", closes: "18:00" },
  { day: "Tuesday", display: "9:00 AM – 7:00 PM", opens: "09:00", closes: "19:00" },
  { day: "Wednesday", display: "9:00 AM – 5:30 PM", opens: "09:00", closes: "17:30" },
  { day: "Thursday", display: "9:00 AM – 6:00 PM", opens: "09:00", closes: "18:00" },
  { day: "Friday", display: "9:00 AM – 5:00 PM", opens: "09:00", closes: "17:00" },
  { day: "Saturday", display: "9:00 AM – 12:00 PM", opens: "09:00", closes: "12:00" },
  { day: "Sunday", display: "Closed" },
];
