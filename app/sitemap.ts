import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/business";
import { CITIES } from "@/lib/cities";

const routes = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/service-areas", priority: 0.8 },
  { path: "/insurance", priority: 0.7 },
  ...CITIES.map(({ slug }) => ({
    path: `/service-areas/${slug}`,
    priority: 0.7,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
