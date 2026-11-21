import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable WebP/AVIF output from Next.js Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache for optimized images
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Redirect legacy /services routes and aliases to canonical top-level routes
  async redirects() {
    return [
      {
        source: "/services/seo",
        destination: "/seo",
        permanent: true,
      },
      {
        source: "/services/social-media-marketing",
        destination: "/social-media-marketing",
        permanent: true,
      },
      {
        source: "/services/influencer-marketing",
        destination: "/influencer-marketing",
        permanent: true,
      },
      {
        source: "/services/branding",
        destination: "/branding-services",
        permanent: true,
      },
      {
        source: "/services/branding-services",
        destination: "/branding-services",
        permanent: true,
      },
      {
        source: "/branding",
        destination: "/branding-services",
        permanent: true,
      },
      {
        source: "/services/web-development",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/services/website-development",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/website-development",
        destination: "/web-development",
        permanent: true,
      },
    ];
  },

  // Aggressive caching headers for static assets + pages (production only)
  async headers() {
    if (process.env.NODE_ENV !== "production") {
      return [];
    }

    const pages = ["/", "/about", "/contact", "/seo", "/social-media-marketing", "/influencer-marketing", "/branding-services", "/web-development"];
    return [
      {
        // Only content-addressed assets live in /media.
        source: "/media/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      ...pages.map((source) => ({
        source,
        headers: [{ key: "Cache-Control", value: "public, s-maxage=3600, stale-while-revalidate=86400" }],
      })),
    ];
  },

  // Compression & Security
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Performance: bundle optimization & tree-shaking
  experimental: {
    optimizePackageImports: ["lucide-react", "gsap", "@gsap/react", "lenis"],
  },
};

export default nextConfig;
