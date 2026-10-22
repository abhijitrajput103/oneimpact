import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing Services in India | OneImpact",
  description:
    "Social media marketing agency in Mumbai for strategy, content, community, influencer marketing and paid campaigns on Instagram, LinkedIn, YouTube and more.",
  openGraph: {
    title: "Social Media Marketing Services in India | OneImpact",
    description:
      "Social media marketing agency in Mumbai for strategy, content, community, influencer marketing and paid campaigns on Instagram, LinkedIn, YouTube and more.",
    url: "https://oneimpact.agency/social-media-marketing",
    siteName: "One Impact",
    type: "website",
  },
};

export default function SmmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
