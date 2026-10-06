import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services — One Impact | Search Engine Optimization Agency",
  description:
    "Smart, Search-First SEO that brings lasting results. Rank higher, beat competition, and grow organically with One Impact.",
  openGraph: {
    title: "SEO Services — One Impact",
    description:
      "Smart, Search-First SEO that brings lasting results. Rank higher, beat competition, and grow organically with One Impact.",
    url: "https://oneimpact.agency/seo",
    siteName: "One Impact",
    type: "website",
  },
};

export default function SeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
