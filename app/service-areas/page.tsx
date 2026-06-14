import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Navigation, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { CITIES } from "@/lib/cities";

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
  alternates: {
    canonical: "/service-areas",
  },
};

const otherCommunities = [
  { city: "Shelby Township", zip: "48315, 48316, 48317" },
  { city: "Pontiac", zip: "48340, 48341, 48342" },
  { city: "Clarkston", zip: "48346, 48348" },
  { city: "Waterford", zip: "48327, 48328, 48329" },
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
              href={BUSINESS.phoneHref}
              data-umami-event="call-phone"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/15 font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <Phone size={16} />
              {BUSINESS.phoneDisplay}
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
            {CITIES.map(({ slug, city, zips, summary, primary }) => (
              <Link
                key={slug}
                href={`/service-areas/${slug}`}
                className={`group rounded-2xl p-6 border transition-shadow hover:shadow-md ${
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
                      ZIP: {zips.join(", ")}
                    </p>
                  </div>
                  <MapPin
                    size={18}
                    className={primary ? "text-blue-300" : "text-blue-400"}
                  />
                </div>
                <p
                  className={`text-base leading-relaxed mb-4 ${
                    primary ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {summary}
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                    primary
                      ? "text-blue-200 group-hover:text-white"
                      : "text-blue-600 group-hover:text-blue-700"
                  } transition-colors`}
                >
                  {city} eye care
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="font-bold text-slate-900 text-lg mb-3">
              Also Serving
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {otherCommunities.map(({ city, zip }) => (
                <div
                  key={city}
                  className="bg-white rounded-xl px-4 py-3 border border-slate-100 shadow-sm"
                >
                  <p className="font-semibold text-slate-900 text-sm">{city}</p>
                  <p className="text-xs text-slate-400 mt-0.5">ZIP: {zip}</p>
                </div>
              ))}
            </div>
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
                      {BUSINESS.address.street}, {BUSINESS.address.city},{" "}
                      {BUSINESS.address.state} {BUSINESS.address.zip}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-blue-600 mt-0.5 shrink-0" size={18} />
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <a
                      href={BUSINESS.phoneHref}
                      data-umami-event="call-phone"
                      className="text-slate-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-umami-event="get-directions"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-80">
              <iframe
                src={BUSINESS.mapsEmbedUrl}
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
