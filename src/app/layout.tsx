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
  keywords: [
    "SaaS Indonesia",
    "Laravel Developer",
    "REST API",
    "Admin Dashboard",
    "Zapp",
    "software untuk UMKM",
  ],
  authors: [
    { name: "Farras Adhani Zayn", url: "https://portfolio.zapp.web.id" },
  ],
  creator: "Farras Adhani Zayn",
  alternates: {
    canonical: "https://zapp.web.id",
  },
  openGraph: {
    title: "Zapp Freelance — Elegant software for your growing business",
    description:
      "We build SaaS applications, REST APIs, and admin dashboards for micro businesses across Indonesia. Affordable, clean code, fast delivery.",
    url: "https://zapp.web.id",
    siteName: "Zapp Freelance",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zapp Freelance — Elegant software for your growing business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zapp Freelance — Elegant software for your growing business",
    description:
      "We build SaaS applications, REST APIs, and admin dashboards for micro businesses across Indonesia. Affordable, clean code, fast delivery.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zapp Freelance",
  url: "https://zapp.web.id",
  description:
    "Zapp builds SaaS applications, REST APIs, and admin dashboards for micro businesses across Indonesia.",
  founder: {
    "@type": "Person",
    name: "Farras Adhani Zayn",
    url: "https://portfolio.zapp.web.id",
    sameAs: [
      "https://www.linkedin.com/in/farras-zayn/",
      "https://github.com/Zeinshirou04",
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
  sameAs: [
    "https://www.linkedin.com/in/farras-zayn/",
    "https://github.com/Zeinshirou04",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
