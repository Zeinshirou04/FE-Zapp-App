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
  openGraph: {
    title: "Zapp Freelance — Elegant software for your growing business.",
    description: "We build SaaS applications, REST APIs, and admin dashboards for micro businesses across Indonesia. Affordable, clean code, fast delivery.",
    url: "https://zapp.web.id",
    siteName: "Zapp Freelance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zapp Freelance — Elegant software for your growing business",
    description: "We build SaaS applications, REST APIs, and admin dashboards for micro businesses across Indonesia. Affordable, clean code, fast delivery.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lato.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white dark:bg-zinc-950 text-gray-900 dark:text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
