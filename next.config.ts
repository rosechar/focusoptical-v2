import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Inline the page's CSS into the HTML so it no longer render-blocks LCP/FCP.
  experimental: {
    inlineCss: true,
  },
  // Serve AVIF (smaller than WebP) first, falling back to WebP, to cut LCP image bytes.
  images: {
    formats: ["image/avif", "image/webp"],
    // Brand photos rarely change — cache optimized variants for 31 days to avoid re-optimization.
    minimumCacheTTL: 2678400,
    // 75 for hero/portraits, 70 for decorative imagery. Whitelisting both keeps Next from
    // generating unused quality variants.
    qualities: [70, 75],
  },
};

export default nextConfig;
