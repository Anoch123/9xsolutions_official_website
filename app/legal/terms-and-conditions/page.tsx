import LegalLayout, { LegalSection } from "@/components/legal-layout";
import { pageSEO } from "@/lib/constants/helper-constants";

export const metadata = pageSEO["/legal/terms-and-conditions"];

const COMPANY = "9X Solutions";
const CONTACT_EMAIL = "hello@yourdomain.com"; // TODO: your real contact email

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    body: [
      `By accessing or using the ${COMPANY} website, you agree to these Terms and Conditions. If you do not agree, please do not use the site.`,
      "We may update these terms from time to time. The date at the top of this page shows when they were last changed, and continuing to use the site after a change means you accept the new version.",
    ],
  },
  {
    id: "about",
    title: "About our website and services",
    body: [
      `This website provides information about the software, cloud, and AI services offered by ${COMPANY}. Content on the site is for general information and is not a binding offer.`,
      "Any actual project work is governed by a separate written agreement, proposal, or statement of work. If that document conflicts with these terms, the signed agreement takes priority for that work.",
    ],
  },
  {
    id: "use",
    title: "Using the website",
    body: [
      "You agree to use the site lawfully and in a way that does not harm it or other people. In particular, you must not:",
      [
        "Attempt to gain unauthorized access to the site, our servers, or any connected systems",
        "Introduce malware, or interfere with the site's normal operation",
        "Scrape, copy, or republish our content in bulk without written permission",
        "Use the contact form to send spam, unlawful, or misleading content",
        "Pretend to be another person or organization",
      ],
    ],
  },
  {
    id: "enquiries",
    title: "Enquiries and submissions",
    body: [
      "When you send us a message through the contact form, you confirm that the details you provide are accurate and that you have the right to share them.",
      "Sending an enquiry does not create a client relationship or any obligation on either side. A project begins only once we both agree to terms in writing.",
      "We handle your personal details as described in our Privacy Policy.",
    ],
  },
  {
    id: "ip",
    title: "Intellectual property",
    body: [
      `The website, including its text, design, graphics, logos, and code, belongs to ${COMPANY} or its licensors and is protected by intellectual property laws.`,
      "You may view and share links to the site for personal or internal business purposes. You may not copy, modify, or distribute our content or branding without our written permission.",
      "Ownership of work delivered to clients is set out in the relevant project agreement.",
    ],
  },
  {
    id: "third-party",
    title: "Third-party links and services",
    body: [
      "The site may link to or display content from third parties, such as technology logos or external websites. We do not control those sites or services and are not responsible for their content, availability, or practices.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimers",
    body: [
      "We work to keep the site accurate and available, but it is provided on an \"as is\" and \"as available\" basis. We do not guarantee that it will always be error-free, secure, or uninterrupted.",
      "Information on the site, including descriptions of technologies and example stacks, is general in nature and should not be treated as professional advice for your specific situation.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: [
      `To the fullest extent permitted by law, ${COMPANY} will not be liable for any indirect, incidental, or consequential loss arising from your use of, or inability to use, the website.`,
      "Nothing in these terms excludes liability that cannot be excluded under applicable law.",
    ],
  },
  {
    id: "changes",
    title: "Changes to the site",
    body: [
      "We may change, suspend, or remove any part of the website at any time, and we may restrict access if we believe these terms have been broken.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    body: [
      "These terms are governed by the laws of Sri Lanka. Any dispute that cannot be resolved informally will be subject to the exclusive jurisdiction of the courts of Sri Lanka.",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <LegalLayout
      eyebrow="Terms and conditions"
      line1="The ground rules,"
      line2="in plain language."
      intro="These terms explain how you can use our website and what to expect when you get in touch with us. We have kept them short and readable."
      updated="November 19, 2026"
      sections={sections}
      contactEmail={CONTACT_EMAIL}
      other={{ href: "/privacy-policy", label: "Read our Privacy Policy" }}
    />
  );
}