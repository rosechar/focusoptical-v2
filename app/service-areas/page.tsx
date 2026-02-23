import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas — Optician Near Rochester Hills, Troy & Oakland County",
  description:
    "Focus Optical serves Rochester Hills, Rochester, Troy, Lake Orion, Royal Oak, Bloomfield Hills, Auburn Hills, and all of Oakland County, MI. Find your trusted local optician for eye exams, glasses, and contact lenses.",
  keywords: [
    "optician near me Rochester Hills",
    "eye exam Oakland County Michigan",
    "glasses near Troy MI",
    "eyeglass shop near Rochester MI",
    "optician near Lake Orion MI",
    "contact lenses Royal Oak",
    "optical store Bloomfield Hills",
    "eyeglasses Auburn Hills MI",
    "prescription glasses Sterling Heights",
    "optician Shelby Township",
    "vision care Pontiac MI",
    "eyeglass shop near me Oakland County",
    "Focus Optical service areas",
    "eye doctor near Rochester Hills",
    "local optician Michigan",
  ],
};

const serviceAreas = [
  {
    city: "Rochester Hills",
    zip: "48309, 48307",
    description:
      "Focus Optical is located right here in Rochester Hills at 2046 W Auburn Rd. We're your neighborhood optician for eye exams, prescription glasses, contact lenses, and free eyeglass adjustments. Rochester Hills residents have trusted us for over 40 years.",
    primary: true,
  },
  {
    city: "Rochester",
    zip: "48306, 48307",
    description:
      "Just minutes from downtown Rochester, Focus Optical offers Rochester residents comprehensive optical services — from annual eye exams with Dr. Diane Galper to a wide selection of frames and contact lenses.",
    primary: false,
  },
  {
    city: "Troy",
    zip: "48083, 48084, 48085, 48098",
    description:
      "Troy residents looking for a quality optician choose Focus Optical for our craftsmanship, personalized service, and no-pressure environment. We cut and edge all lenses on-site for superior quality.",
    primary: false,
  },
  {
    city: "Lake Orion",
    zip: "48360, 48362",
    description:
      "Lake Orion patients make the short drive to Focus Optical for our reputation as one of Oakland County's most experienced independent opticians. Worth the trip for glasses you'll love.",
    primary: false,
  },
  {
    city: "Royal Oak",
    zip: "48067, 48068, 48073",
    description:
      "Royal Oak residents appreciate our independent, no-franchise approach to optical care. No sales pressure, just expert craftsmanship and honest service from Tom Hamilton.",
    primary: false,
  },
  {
    city: "Bloomfield Hills",
    zip: "48301, 48302, 48304",
    description:
      "We serve Bloomfield Hills patients seeking a trusted, experienced optician. Our attention to detail and on-site lens cutting sets us apart from chain optical stores.",
    primary: false,
  },
  {
    city: "Auburn Hills",
    zip: "48326",
    description:
      "Auburn Hills residents trust Focus Optical for eye exams, new glasses, and free adjustments on existing eyewear. Conveniently located on W Auburn Rd.",
    primary: false,
  },
  {
    city: "Sterling Heights",
    zip: "48310, 48312, 48313, 48314",
    description:
      "Sterling Heights patients come to Focus Optical for the expert, personalized service you can only get at an independently owned optical store with over 45 years of experience.",
    primary: false,
  },
  {
    city: "Shelby Township",
    zip: "48315, 48316, 48317",
    description:
      "Focus Optical serves Shelby Township residents with comprehensive optical services including eye exams, contact lens fittings, and a curated selection of eyeglass frames.",
    primary: false,
  },
  {
    city: "Pontiac",
    zip: "48340, 48341, 48342",
    description:
      "Pontiac area residents find quality optical care at Focus Optical in Rochester Hills — close enough for the personalized service and craftsmanship you deserve.",
    primary: false,
  },
  {
    city: "Clarkston",
    zip: "48346, 48348",
    description:
      "Clarkston patients choose Focus Optical for our unmatched experience and dedication to quality. We've been crafting eyeglasses for Oakland County since 1984.",
    primary: false,
  },
  {
    city: "Waterford",
    zip: "48327, 48328, 48329",
    description:
      "Waterford Township residents rely on Focus Optical for honest, experienced optical care. From eye exams to custom-fitted glasses — all under one roof.",
    primary: false,
  },
];

const services = [
  "Eye Exams (Dr. Diane Galper, OD)",
  "Contact Lens Exams & Fittings",
  "Prescription Eyeglasses",
  "Sunglasses & Specialty Lenses",
  "Contact Lens Retail",
  "Free Eyeglass Adjustments",
  "On-Site Lens Cutting & Edging",
  "Next Day Service (most prescriptions)",
  "New Lenses for Existing Frames",
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-blue-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-blue-300 font-semibold text-sm tracking-widest uppercase mb-2">
            Oakland County & Surrounding Communities
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Serving Rochester Hills &<br />
            All of Oakland County
          </h1>
          <p className="text-blue-200 mt-4 text-lg max-w-2xl leading-relaxed">
            Focus Optical has been the trusted local optician for Rochester
            Hills and surrounding Michigan communities since 1984. If you&apos;re
            searching for an eye exam, new glasses, or contact lenses near
            Oakland County — we&apos;re here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full transition-colors"
            >
              Schedule an Appointment
            </Link>
            <a
              href="tel:+12488528830"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/15 font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <Phone size={16} />
              (248) 852-8830
            </a>
          </div>
        </div>
      </section>

      {/* Services we offer */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
            Services Available to All Oakland County Patients
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {services.map((s) => (
              <div
                key={s}
                className="flex items-center gap-2.5 text-sm text-slate-600 py-1"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas grid */}
      <section className="py-10 sm:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
            Cities & Communities We Serve
          </h2>
          <p className="text-slate-500 mb-10 max-w-2xl">
            Our Rochester Hills location is easily accessible to patients
            throughout Oakland County and Macomb County. Here&apos;s a look at the
            communities we serve most frequently:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map(({ city, zip, description, primary }) => (
              <div
                key={city}
                className={`rounded-2xl p-6 border ${
                  primary
                    ? "bg-blue-900 border-blue-800 text-white"
                    : "bg-white border-slate-100 shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3
                      className={`font-bold text-lg ${
                        primary ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {city}
                      {primary && (
                        <span className="ml-2 text-xs font-medium bg-white/20 text-blue-200 px-2 py-0.5 rounded-full">
                          Our Location
                        </span>
                      )}
                    </h3>
                    <p
                      className={`text-xs mt-0.5 ${
                        primary ? "text-blue-300" : "text-slate-400"
                      }`}
                    >
                      ZIP: {zip}
                    </p>
                  </div>
                  <MapPin
                    size={18}
                    className={primary ? "text-blue-300" : "text-blue-400"}
                  />
                </div>
                <p
                  className={`text-base leading-relaxed ${
                    primary ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions & map */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Find Us in Rochester Hills
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Focus Optical is conveniently located on W Auburn Rd in
                Rochester Hills, MI — easily accessible from Rochester, Troy,
                Auburn Hills, and across Oakland County. Ample free parking
                available.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-600 mt-0.5 shrink-0" size={18} />
                  <div>
                    <p className="font-semibold text-slate-900">Address</p>
                    <p className="text-slate-600 text-sm">
                      2046 W Auburn Rd, Rochester Hills, MI 48309
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-blue-600 mt-0.5 shrink-0" size={18} />
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <a
                      href="tel:+12488528830"
                      className="text-slate-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      (248) 852-8830
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=2046+W+Auburn+Rd,+Rochester+Hills,+MI+48309"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-80">
              <iframe
                src="https://maps.google.com/maps?q=2046+W+Auburn+Rd,+Rochester+Hills,+MI+48309&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Focus Optical location map — 2046 W Auburn Rd, Rochester Hills MI"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO content block */}
      <section className="py-10 sm:py-14 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
            Your Local Oakland County Optician
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-4">
            <p>
              Searching for an <strong>optician in Rochester Hills, MI</strong>?
              Focus Optical has been serving Oakland County residents since 1984.
              Whether you need an <strong>eye exam in Rochester Hills</strong>,{" "}
              <strong>prescription glasses near Troy</strong>, or{" "}
              <strong>contact lenses in Lake Orion</strong>, we provide expert
              optical care for patients across the region.
            </p>
            <p>
              As an independently owned optical store, we offer something the
              chain stores can&apos;t:{" "}
              <strong>personalized service, on-site lens cutting</strong>, and
              over four decades of expertise. Tom Hamilton has been making
              eyeglasses since 1977 and takes pride in crafting every pair with
              care and precision.
            </p>
            <p>
              Whether you&apos;re in <strong>Royal Oak</strong>,{" "}
              <strong>Bloomfield Hills</strong>, <strong>Auburn Hills</strong>,{" "}
              <strong>Sterling Heights</strong>, or anywhere in{" "}
              <strong>Oakland County</strong> — we welcome you to Focus Optical.
              We offer <strong>free eyeglass adjustments</strong> to anyone,
              even if you didn&apos;t buy your glasses from us.
            </p>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Schedule an Appointment
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
