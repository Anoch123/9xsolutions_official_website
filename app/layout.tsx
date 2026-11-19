import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  common_texts,
  localBusinessSchema,
  organizationSchema,
  webSiteSchema,
} from "@/lib/constants/helper-constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = common_texts.Company_website;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | 9X Solutions",
    default: common_texts.App_title,
  },
  description: common_texts.App_description,
  keywords: common_texts.SEO.keywords,
  authors: [{ name: common_texts.SEO.author, url: baseUrl }],
  creator: common_texts.Company_name,
  publisher: common_texts.Company_name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: common_texts.SEO.locale,
    alternateLocale: ["en_US"],
    siteName: common_texts.SEO.openGraph.siteName,
    title: common_texts.SEO.openGraph.title,
    description: common_texts.SEO.openGraph.description,
    url: baseUrl,
    images: common_texts.SEO.openGraph.images,
  },
  twitter: {
    card: common_texts.SEO.twitter.card as "summary_large_image",
    title: common_texts.SEO.twitter.title,
    description: common_texts.SEO.twitter.description,
    images: common_texts.SEO.twitter.images,
  },
  alternates: {
    canonical: common_texts.SEO.canonical,
    languages: {
      "en-LK": `${baseUrl}`,
      "en-US": `${baseUrl}`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className={`min-h-full flex flex-col ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
