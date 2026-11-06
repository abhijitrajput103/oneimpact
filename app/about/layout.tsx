import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About One Impact | Our Story, Mission & Team",
  description:
    "Born in 2020, One Impact is a creative digital agency crafting premium branding, social media marketing, SEO, and web experiences that leave a lasting impact.",
  openGraph: {
    title: "About One Impact | Our Story, Mission & Team",
    description:
      "Born in 2020, One Impact is a creative digital agency crafting premium branding, social media marketing, SEO, and web experiences that leave a lasting impact.",
    url: "https://oneimpact.agency/about",
    siteName: "One Impact",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
