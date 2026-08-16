import type { Metadata } from "next";
import { Schibsted_Grotesk, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoToast from "@/components/PromoToast";
import { SITE_URL } from "@/lib/business";
import { businessJsonLd } from "@/lib/schema";

// Display face: logo, all h1/h2, stat numbers, review quotes.
const display = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-schibsted",
  display: "swap",
});

// Body / UI face: paragraphs, labels, nav, buttons.
const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Focus Optical, Rochester Hills MI",
    default:
      "Focus Optical | Optician & Eye Exams in Rochester Hills, MI",
  },
  description:
    "Focus Optical in Rochester Hills, MI offers eye exams, contact lens fittings, and a wide selection of prescription glasses and frames. Independently owned and operated since 1984. Serving Oakland County.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Focus Optical",
    title: "Focus Optical | Rochester Hills, MI Optician Since 1984",
    description:
      "Full-service optical store in Rochester Hills, MI. Eye exams, glasses, contacts, and free adjustments. Over 45 years of experience.",
  },
  verification: {
    google: "v35JKAVDznB95Qku6g8b3ceWYkQFHhhnunO81U35wo8",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // data-scroll-behavior lets Next.js reset scroll instantly on navigation
    // despite the CSS scroll-behavior: smooth used for in-page anchors.
    <html
      lang="en"
      className={`${display.variable} ${sans.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2.5 focus:text-md focus:font-bold focus:text-accent focus:shadow-float"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <PromoToast />
        <Analytics />
      </body>
    </html>
  );
}
