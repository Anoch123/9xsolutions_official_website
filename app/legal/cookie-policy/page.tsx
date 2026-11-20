import LegalLayout from "@/components/legal-layout";
import type { Metadata } from "next";
import {
  common_texts,
  cookie_policy_sections,
} from "@/lib/constants/helper-constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn how 9X Solutions uses essential cookies and optional analytics, and how to manage your preferences.",
  alternates: {
    canonical: `${common_texts.Company_website}/legal/cookie-policy`,
  },
};

export default function CookiePolicy() {
  return (
    <LegalLayout
      eyebrow="Cookie policy"
      line1="A little data,"
      line2="on your terms."
      intro="Here is what this website stores in your browser, how optional analytics work, and how to change your choice."
      updated="November 20, 2026"
      sections={cookie_policy_sections}
      contactEmail={common_texts.Company_email}
      other={{ href: "/legal/privacy-policy", label: "Read our Privacy Policy" }}
    />
  );
}