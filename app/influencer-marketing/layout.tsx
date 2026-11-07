import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Influencer Marketing Agency in Mumbai | OneImpact",
  description:
    "Influencer marketing agency in Mumbai: creator discovery, outreach, content and reporting across Instagram, YouTube and LinkedIn. Book a free consultation.",
  openGraph: {
    title: "Influencer Marketing Agency in Mumbai | OneImpact",
    description:
      "Influencer marketing agency in Mumbai: creator discovery, outreach, content and reporting across Instagram, YouTube and LinkedIn. Book a free consultation.",
    url: "https://oneimpact.agency/influencer-marketing",
    siteName: "One Impact",
    type: "website",
  },
};

export default function InfluencerMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
