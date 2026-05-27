import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zapp Freelance — Elegant software for your growing business",
  description:
    "We build SaaS applications, REST APIs, and admin dashboards for micro businesses across Indonesia. Affordable, clean code, fast delivery.",
  metadataBase: new URL("https://zapp.web.id"),
  keywords: ['Farras Adhani Zayn', 'Full Stack Developer', 'Laravel Developer', 'Indonesia', 'Zapp'],
  authors: [{ name: 'Farras Adhani Zayn', url: 'https://portfolio.zapp.web.id' }],
  creator: 'Farras Adhani Zayn',
  openGraph: {
    title: "Zapp Freelance — Elegant software for your growing business.",
    description:
      "We build SaaS applications, REST APIs, and admin dashboards for micro businesses across Indonesia. Affordable, clean code, fast delivery.",
    url: "https://zapp.web.id",
    siteName: "Zapp Freelance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zapp Freelance — Elegant software for your growing business",
    description:
      "We build SaaS applications, REST APIs, and admin dashboards for micro businesses across Indonesia. Affordable, clean code, fast delivery.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Farras Adhani Zayn',
  url: 'https://portfolio.zapp.web.id',
  jobTitle: 'Full Stack Developer',
  description: 'Full Stack Developer from Indonesia specializing in Laravel, REST APIs, and web applications for businesses.',
  image: 'https://portfolio.zapp.web.id/og-image.jpg',
  sameAs: [
    'https://www.linkedin.com/in/farras-zayn/',
    'https://github.com/Zeinshirou04',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ID',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
