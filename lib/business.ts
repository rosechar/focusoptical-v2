export const SITE_URL = "https://focusopticalrochesterhills.com";

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
    "https://maps.google.com/maps?q=2046+W+Auburn+Rd,+Rochester+Hills,+MI+48309&t=&z=15&ie=UTF8&iwloc=&output=embed",
} as const;

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
