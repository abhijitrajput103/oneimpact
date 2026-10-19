import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services — One Impact | Search Engine Optimization Agency",
  description:
    "Your Next Customer is searching for you! We will make sure they find you. Rank higher, beat competition, and grow organically with One Impact.",
  openGraph: {
    title: "SEO Services — One Impact",
    description:
      "Your Next Customer is searching for you! We will make sure they find you. Rank higher, beat competition, and grow organically with One Impact.",
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
