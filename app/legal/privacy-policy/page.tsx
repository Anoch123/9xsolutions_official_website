import LegalLayout, { LegalSection } from "@/components/legal-layout";
import { pageSEO } from "@/lib/constants/helper-constants";

export const metadata = pageSEO["/legal/privacy-policy"];

const COMPANY = "9X Solutions";
const CONTACT_EMAIL = "hello@yourdomain.com"; // TODO: your real contact email

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: [
      `${COMPANY} is a software company based in Sri Lanka. This policy explains what personal information we collect through our website, how we use it, and the choices you have.`,
      "For privacy questions, you can reach us at the email address at the bottom of this page.",
    ],
  },
  {
    id: "collect",
    title: "What we collect",
    body: [
      "Information you give us when you use the contact form:",
      [
        "Your name, work email address, and phone number",
        "Your company name, if you choose to give it",
        "The services you are interested in",
        "The message you write about your project",
      ],
      "Information collected automatically when you visit the site: basic technical data such as IP address, browser type, device, pages viewed, and the time of the visit. This is typically recorded in server and hosting logs.",
    ],
  },
  {
    id: "use",
    title: "How we use it",
    body: [
      "We use your information to:",
      [
        "Read and reply to your enquiry, and arrange a call if you want one",
        "Send you a confirmation that your message was received",
        "Keep the website secure, and detect spam and abuse",
        "Understand how the site is used so we can improve it",
      ],
      "We do not use your enquiry details for unrelated marketing, and we do not sell your personal information.",
    ],
  },
  {
    id: "basis",
    title: "Why we are allowed to",
    body: [
      "We process the details you send in a contact form because you ask us to respond, and so that we can take steps toward a possible project with you. We process technical data for our legitimate interest in running and protecting the website.",
      "Where we rely on your consent, you can withdraw it at any time.",
    ],
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: [
      "We share personal information only with the service providers that help us run the website and handle your enquiry, and only as needed:",
      [
        "Our email provider, which delivers your message to our team and sends your confirmation",
        "Our hosting and infrastructure providers, which serve the website",
      ],
      "We may also disclose information if the law requires it, or to protect our rights, our users, or the security of the site.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and tracking",
    body: [
      "This website does not use advertising or cross-site tracking cookies. Our hosting provider may use essential technical data to deliver and secure the site.",
      "If we add analytics or other cookies in future, we will update this page and ask for consent where the law requires it.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: [
      "We keep enquiry details for as long as we need them to respond to you and manage any resulting relationship, and for a reasonable period afterwards in case of follow-up questions. After that, we delete or anonymize them.",
      "If you become a client, the information we hold about the project is handled under your project agreement.",
    ],
  },
  {
    id: "security",
    title: "How we protect it",
    body: [
      "We use reasonable technical and organizational measures to protect your information, including encrypted connections and limiting access to the people who need it. No online service can be completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    id: "rights",
    title: "Your rights",
    body: [
      "Under Sri Lanka's Personal Data Protection Act, and similar laws that may apply to you, you may have the right to:",
      [
        "Ask what personal data we hold about you and get a copy",
        "Ask us to correct information that is wrong or incomplete",
        "Ask us to delete your information, or restrict how we use it",
        "Object to certain uses, or withdraw consent you previously gave",
        "Complain to the relevant data protection authority",
      ],
      "To use any of these rights, email us. We may need to confirm your identity first, and we will respond within a reasonable time.",
    ],
  },
  {
    id: "transfers",
    title: "International transfers",
    body: [
      "Some of our service providers may process data on servers outside Sri Lanka. Where that happens, we take steps to make sure your information stays protected in line with this policy and applicable law.",
    ],
  },
  {
    id: "children",
    title: "Children",
    body: [
      "Our website and services are meant for businesses and adults. We do not knowingly collect personal information from children. If you believe a child has sent us their details, contact us and we will delete them.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: [
      "We may update this policy as our website or the law changes. The date at the top shows the latest revision. For significant changes, we will make that clear on the site.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      eyebrow="Privacy policy"
      line1="Your details stay"
      line2="yours. Here's how."
      intro="We collect only what we need to reply to you and run this website. This page explains what that is, who sees it, and how you stay in control."
      updated="November 19, 2026"
      sections={sections}
      contactEmail={CONTACT_EMAIL}
      other={{ href: "/terms-and-conditions", label: "Read our Terms" }}
    />
  );
}