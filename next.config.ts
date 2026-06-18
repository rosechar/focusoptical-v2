import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Inline the page's CSS into the HTML so it no longer render-blocks LCP/FCP.
  experimental: {
    inlineCss: true,
  },
  // Serve AVIF (smaller than WebP) first, falling back to WebP, to cut LCP image bytes.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
