import type { Metadata } from "next";
import { Footer } from "@/components/common/Footer";
import ContactExperience from "@/components/contact/ContactExperience";

export const metadata: Metadata = {
  title: "Contact Us | One Impact — Digital Creative Agency",
  description:
    "Have a project in mind, a question, or simply an idea worth exploring? Get in touch with One Impact. Let's create impact together.",
};

export default function ContactPage() {
  return (
    <ContactExperience>
      <Footer />
    </ContactExperience>
  );
}
