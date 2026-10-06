import SeoServicesPage from "@/app/seo/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services — One Impact | Search Engine Optimization Agency",
  description:
    "Smart, Search-First SEO that brings lasting results. Rank higher, beat competition, and grow organically with One Impact.",
};

export default function ServicesSeoPage() {
  return <SeoServicesPage />;
}
