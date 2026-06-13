import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS, HOURS, SITE_URL } from "@/lib/business";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Focus Optical — Rochester Hills, MI",
    default:
      "Focus Optical | Optician & Eye Exams in Rochester Hills, MI",
  },
  description:
    "Focus Optical in Rochester Hills, MI offers eye exams, contact lens fittings, and a wide selection of prescription glasses and frames. Independently owned and operated since 1984. Serving Oakland County.",
  keywords: [
    "optician Rochester Hills MI",
    "eye exam Rochester Hills",
    "book eye exam Rochester Hills",
    "schedule eye appointment near me",
    "eye appointment Rochester Hills MI",
    "glasses Rochester Hills",
    "eyeglass shop Oakland County",
    "contact lenses Rochester Hills",
    "prescription glasses Rochester MI",
    "optometrist near Rochester Hills",
    "Focus Optical",
    "eyeglasses Troy MI",
    "sunglasses Lake Orion",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Focus Optical",
    title: "Focus Optical | Rochester Hills, MI Optician Since 1984",
    description:
      "Full-service optical store in Rochester Hills, MI. Eye exams, glasses, contacts, and free adjustments. Over 45 years of experience.",
    images: [
      {
        url: "/images/shop.jpeg",
        alt: "Focus Optical storefront in Rochester Hills, MI",
      },
    ],
  },
  verification: {
    google: "v35JKAVDznB95Qku6g8b3ceWYkQFHhhnunO81U35wo8",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Optician",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  foundingDate: "1984",
  hasMap: BUSINESS.mapsUrl,
  image: `${SITE_URL}/images/shop.jpeg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.6625,
    longitude: -83.1332,
  },
  telephone: BUSINESS.phoneE164,
  openingHoursSpecification: HOURS.filter((h) => h.opens).map(
    ({ day, opens, closes }) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens,
      closes,
    }),
  ),
  url: SITE_URL,
  priceRange: "$$",
  description:
    "Focus Optical is a full-service, independently owned optical store in Rochester Hills, MI. We offer eye exams by Dr. Diane Galper, a wide selection of frames and contact lenses, and free eyeglass adjustments. Serving Oakland County since 1984.",
  areaServed: [
    "Rochester Hills, MI",
    "Rochester, MI",
    "Troy, MI",
    "Lake Orion, MI",
    "Royal Oak, MI",
    "Bloomfield Hills, MI",
    "Auburn Hills, MI",
    "Oakland County, MI",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // data-scroll-behavior lets Next.js reset scroll instantly on navigation
    // despite the CSS scroll-behavior: smooth used for in-page anchors.
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
