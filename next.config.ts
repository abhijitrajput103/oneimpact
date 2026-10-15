import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable WebP/AVIF output from Next.js Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache for optimized images
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Aggressive caching headers for static assets + pages
  async headers() {
    return [
      {
        // Cache all static assets (images, fonts, videos, JS, CSS) for 1 year
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|mp4|webm|woff|woff2|ttf|eot|js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache logo images specifically
        source: "/LOGO/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache video assets
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Pages — cache for 1 hour, revalidate in background
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  // Compression
  compress: true,

  // Performance: bundle optimization
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
