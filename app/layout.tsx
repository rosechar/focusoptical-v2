import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
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
  name: "Focus Optical",
  image: "https://focusoptical.vercel.app/images/shop.jpeg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2046 W Auburn Rd",
    addressLocality: "Rochester Hills",
    addressRegion: "MI",
    postalCode: "48309",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.6625,
    longitude: -83.1332,
  },
  telephone: "+12488528830",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "09:00",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "12:00",
    },
  ],
  url: "https://focusoptical.vercel.app",
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
    <html lang="en" className={inter.variable}>
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
