import SmmLandingPage from "@/app/social-media-marketing/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing Services — One Impact",
  description:
    "End-to-end social media marketing services. Content creation, strategy, community management, and platform campaigns that stop the scroll.",
};

export default function ServicesSmmPage() {
  return <SmmLandingPage />;
}
