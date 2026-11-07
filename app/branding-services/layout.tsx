import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding Services in India | OneImpact",
  description:
    "Branding services by OneImpact, Mumbai: brand strategy, positioning, identity and messaging that help your business stand out. Get a free consultation.",
  openGraph: {
    title: "Branding Services in India | OneImpact",
    description:
      "Branding services by OneImpact, Mumbai: brand strategy, positioning, identity and messaging that help your business stand out. Get a free consultation.",
    url: "https://oneimpact.agency/branding-services",
    siteName: "One Impact",
    type: "website",
  },
};

export default function BrandingServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
