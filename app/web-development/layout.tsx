import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services in India | OneImpact",
  description:
    "Website design and development by OneImpact, Mumbai: custom, e-commerce and SEO-ready websites that load fast and convert. Get a free website consultation.",
  openGraph: {
    title: "Web Development Services in India | OneImpact",
    description:
      "Website design and development by OneImpact, Mumbai: custom, e-commerce and SEO-ready websites that load fast and convert. Get a free website consultation.",
    url: "https://oneimpact.agency/web-development",
    siteName: "One Impact",
    type: "website",
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
