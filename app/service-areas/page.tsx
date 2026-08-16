import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Navigation, ArrowRight, Check } from "lucide-react";
import MapEmbed from "@/components/MapEmbed";
import CtaBand from "@/components/CtaBand";
import { BUSINESS, FULL_ADDRESS } from "@/lib/business";
import { CITIES } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Service Areas | Optician Near Rochester Hills, Troy & Oakland County",
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
      <section className="pt-12 sm:pt-16 pb-10">
        <div className="max-w-295 mx-auto px-5 sm:px-10">
          <p className="text-accent font-semibold text-xs tracking-eyebrow uppercase mb-3">
            Oakland County &amp; surrounding communities
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight leading-tight">
            Serving Rochester Hills &amp; all of Oakland County
          </h1>
          <p className="text-body mt-4 text-lg max-w-2xl leading-relaxed">
            We&apos;ve been the local optician in Rochester Hills since 1984, and
            folks drive in from all over Oakland County. Need an eye exam, new
            glasses, or contacts? Come see us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book a visit
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-field-border text-ink hover:border-accent hover:text-accent font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <Phone size={16} />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="py-10 sm:py-12 bg-surface">
        <div className="max-w-295 mx-auto px-5 sm:px-10">
          <h2 className="text-2xl font-extrabold text-ink tracking-tight mb-6">
            Available to all Oakland County patients
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2.5">
            {services.map((s) => (
              <div key={s} className="flex items-center gap-2.5 text-body">
                <Check size={16} className="text-accent shrink-0" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-295 mx-auto px-5 sm:px-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-3">
            Cities &amp; communities we serve
          </h2>
          <p className="text-body mb-9 max-w-2xl">
            We&apos;re an easy drive from most of Oakland and Macomb County. Here
            are the towns we see folks from most:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CITIES.map(({ slug, city, zips, summary, primary }) => (
              <Link
                key={slug}
                href={`/service-areas/${slug}`}
                className={`group rounded-2xl p-6 border transition-all hover:shadow-card ${
                  primary
                    ? "bg-accent border-accent text-white"
                    : "bg-white border-hairline hover:border-accent"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3
                      className={`font-display font-bold text-lg ${
                        primary ? "text-white" : "text-ink"
                      }`}
                    >
                      {city}
                      {primary && (
                        <span className="ml-2 align-middle text-xs font-medium bg-white/20 text-white px-2 py-0.5 rounded-full">
                          Our location
                        </span>
                      )}
                    </h3>
                    <p
                      className={`text-xs mt-0.5 ${
                        primary ? "text-white/70" : "text-body"
                      }`}
                    >
                      ZIP: {zips.join(", ")}
                    </p>
                  </div>
                  <MapPin
                    size={18}
                    className={primary ? "text-white/80" : "text-accent"}
                  />
                </div>
                <p
                  className={`leading-relaxed mb-4 ${
                    primary ? "text-white/85" : "text-body"
                  }`}
                >
                  {summary}
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                    primary ? "text-white" : "text-accent"
                  }`}
                >
                  {city} eye care
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="font-semibold text-ink text-lg mb-3">Also serving</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {otherCommunities.map(({ city, zip }) => (
                <div key={city} className="rounded-xl px-4 py-3 border border-hairline">
                  <p className="font-semibold text-ink text-sm">{city}</p>
                  <p className="text-xs text-body mt-0.5">ZIP: {zip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Find us + map */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-295 mx-auto px-5 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-4">
                Find us in Rochester Hills
              </h2>
              <p className="text-body leading-relaxed mb-6">
                We&apos;re on W Auburn Rd in Rochester Hills, an easy drive from
                Rochester, Troy, Auburn Hills, and the rest of Oakland County.
                Plenty of free parking right out front.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="text-accent mt-0.5 shrink-0" size={18} />
                  <div>
                    <p className="font-semibold text-ink">Address</p>
                    <p className="text-body text-sm">{FULL_ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-accent mt-0.5 shrink-0" size={18} />
                  <div>
                    <p className="font-semibold text-ink">Phone</p>
                    <a
                      href={BUSINESS.phoneHref}
                      className="text-body hover:text-accent transition-colors text-sm"
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
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <Navigation size={16} />
                Get directions
              </a>
            </div>

            <MapEmbed
              showInfo={false}
              className="h-80 rounded-2xl border border-hairline"
            />
          </div>
        </div>
      </section>

      {/* SEO content block */}
      <section className="py-12 sm:py-14">
        <div className="max-w-295 mx-auto px-5 sm:px-10">
          <h2 className="text-2xl font-extrabold text-ink tracking-tight mb-4">
            Your local Oakland County optician
          </h2>
          <div className="text-body leading-relaxed space-y-4 max-w-3xl">
            <p>
              Looking for an <strong>optician in Rochester Hills</strong>?
              We&apos;ve been at it since 1984. People come to us for an{" "}
              <strong>eye exam in Rochester Hills</strong>,{" "}
              <strong>new glasses near Troy</strong>, or{" "}
              <strong>contacts in Lake Orion</strong>, and plenty of towns in
              between.
            </p>
            <p>
              We&apos;re family owned, not a chain. That means you deal with Tom,
              who&apos;s been making glasses since 1977, and your{" "}
              <strong>lenses get cut right here</strong> instead of shipped off
              somewhere. He takes his time and gets it right.
            </p>
            <p>
              <strong>Royal Oak</strong>, <strong>Bloomfield Hills</strong>,{" "}
              <strong>Auburn Hills</strong>, <strong>Sterling Heights</strong>,
              wherever you are around here, come on in. And{" "}
              <strong>adjustments are free</strong> for anybody, even if you
              didn&apos;t buy the glasses from us.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
