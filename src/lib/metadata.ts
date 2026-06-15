import type { Metadata } from "next";
import { siteConfig } from "./constants/site";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.lawyer.fullName} — ${siteConfig.lawyer.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.lawyer.description,
  keywords: [
    "advogado",
    "advocacia",
    "JV Sousa",
    "João Vitor Sousa",
    "direito civil",
    "direito trabalhista",
    "direito empresarial",
    "consultoria jurídica",
    "advogado São Paulo",
  ],
  authors: [{ name: siteConfig.lawyer.fullName }],
  creator: siteConfig.lawyer.fullName,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.lawyer.fullName} — ${siteConfig.lawyer.title}`,
    description: siteConfig.lawyer.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.lawyer.fullName} — Advocacia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.lawyer.fullName} — ${siteConfig.lawyer.title}`,
    description: siteConfig.lawyer.description,
    images: ["/og-image.jpg"],
  },
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
  alternates: {
    canonical: siteConfig.url,
  },
};

export function getJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.name,
    description: siteConfig.lawyer.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.lawyer.fullName,
      jobTitle: siteConfig.lawyer.title,
    },
    areaServed: "BR",
    priceRange: "$$",
  };
}
