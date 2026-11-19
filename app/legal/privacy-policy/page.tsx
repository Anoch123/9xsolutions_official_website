import LegalLayout, { LegalSection } from "@/components/legal-layout";
import { common_texts, pageSEO, privacy_policy_sections } from "@/lib/constants/helper-constants";

export const metadata = pageSEO["/legal/privacy-policy"];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      eyebrow="Privacy policy"
      line1="Your details stay"
      line2="yours. Here's how."
      intro="We collect only what we need to reply to you and run this website. This page explains what that is, who sees it, and how you stay in control."
      updated="November 19, 2026"
      sections={privacy_policy_sections}
      contactEmail={common_texts.Company_email}
      other={{ href: "/legal/terms-and-conditions", label: "Read our Terms" }}
    />
  );
}