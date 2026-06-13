import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/business";

const routes = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/service-areas", priority: 0.8 },
  { path: "/insurance", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
