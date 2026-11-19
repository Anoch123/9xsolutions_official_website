import LegalLayout, { LegalSection } from "@/components/legal-layout";
import { common_texts, pageSEO, terms_and_conditions_sections } from "@/lib/constants/helper-constants";

export const metadata = pageSEO["/legal/terms-and-conditions"];

export default function TermsAndConditions() {
  return (
    <LegalLayout
      eyebrow="Terms and conditions"
      line1="The ground rules,"
      line2="in plain language."
      intro="These terms explain how you can use our website and what to expect when you get in touch with us. We have kept them short and readable."
      updated="November 19, 2026"
      sections={terms_and_conditions_sections}
      contactEmail={common_texts.Company_email}
      other={{ href: "/legal/privacy-policy", label: "Read our Privacy Policy" }}
    />
  );
}