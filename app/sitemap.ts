import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/business";
import { CITIES } from "@/lib/cities";

// lastModified/changeFrequency/priority are intentionally omitted: Google ignores the
// latter two, and a build-time lastModified on every URL trains crawlers to ignore it.
const paths = [
  "",
  "/services",
  "/about",
  "/contact",
  "/service-areas",
  "/insurance",
  ...CITIES.map(({ slug }) => `/service-areas/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
