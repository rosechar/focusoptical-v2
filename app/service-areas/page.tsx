import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Navigation, ArrowRight, Check } from "lucide-react";
import MapEmbed from "@/components/MapEmbed";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import { BUSINESS, FULL_ADDRESS } from "@/lib/business";
import { CITIES } from "@/lib/cities";
import { SERVICE_HIGHLIGHTS } from "@/lib/services";

export const metadata: Metadata = {
  title: "Service Areas | Optician Near Rochester Hills, Troy & Oakland County",
  description:
    "Focus Optical serves Rochester Hills, Rochester, Troy, Lake Orion, Royal Oak, Bloomfield Hills, Auburn Hills, Sterling Heights, Shelby Township, Pontiac, Clarkston, Waterford, and all of Oakland County, MI. Eye exams, glasses, and contact lenses from an independent optician.",
  alternates: {
    canonical: "/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* Page header */}
      <section className="max-w-295 mx-auto px-5 pt-7 pb-8 lg:px-10 lg:pt-14 lg:pb-12">
        <p className="text-accent font-bold text-xs tracking-eyebrow uppercase mb-2.5 lg:mb-3">
          Oakland County &amp; surrounding communities
        </p>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-ink tracking-tight text-balance">
          Serving Rochester Hills &amp; all of Oakland County
        </h1>
        <p className="text-md lg:text-lg leading-normal text-body mt-3 lg:mt-4 max-w-155">
          We&apos;ve been the local optician in Rochester Hills since 1984, and
          folks drive in from all over Oakland County. Need an eye exam, new
          glasses, or contacts? Come see us.
        </p>
        <div className="flex gap-2.5 lg:gap-3.25 mt-5 lg:mt-7">
          <Button href="/contact" size="lg" className="flex-1 sm:flex-none">
            Book a visit
          </Button>
          <Button href={BUSINESS.phoneHref} variant="outline" size="lg" className="flex-1 sm:flex-none">
            <Phone size={16} className="hidden sm:inline" aria-hidden />
            <span className="sm:hidden">Call us</span>
            <span className="hidden sm:inline">{BUSINESS.phoneDisplay}</span>
          </Button>
        </div>
      </section>

      {/* Services available */}
      <section className="bg-surface py-8 lg:py-12">
        <div className="max-w-295 mx-auto px-5 lg:px-10">
          <h2 className="text-xl lg:text-2xl font-extrabold text-ink tracking-tight mb-4 lg:mb-6">
            Available to all Oakland County patients
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2.5">
            {SERVICE_HIGHLIGHTS.map((s) => (
              <li key={s} className="flex items-center gap-2.5 text-sm lg:text-md text-body">
                <Check size={16} className="text-accent shrink-0" aria-hidden />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cities grid */}
      <section className="max-w-295 mx-auto px-5 py-8 lg:px-10 lg:py-16">
        <h2 className="text-xl lg:text-3xl font-extrabold text-ink tracking-tight mb-2 lg:mb-3">
          Cities &amp; communities we serve
        </h2>
        <p className="text-md lg:text-base text-body leading-normal mb-6 lg:mb-9 max-w-155">
          We&apos;re an easy drive from most of Oakland and Macomb County. Here
          are the towns we see folks from most:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 lg:gap-5">
          {CITIES.map(({ slug, city, zips, summary, primary }) => (
            <Link
              key={slug}
              href={`/service-areas/${slug}`}
              className={`group rounded-2xl p-5 lg:p-6 border transition-colors ${
                primary
                  ? "bg-accent border-accent text-white"
                  : "bg-white border-hairline lg:shadow-card hover:border-accent"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2.5 lg:mb-3">
                <div>
                  <h3 className={`font-bold text-base lg:text-lg ${primary ? "text-white" : "text-ink"}`}>
                    {city}
                    {primary && (
                      <span className="ml-2 align-middle text-xs font-semibold bg-white/20 text-white px-2 py-0.5 rounded-full">
                        Our location
                      </span>
                    )}
                  </h3>
                  <p className={`text-xs mt-0.5 ${primary ? "text-white/70" : "text-body"}`}>
                    ZIP: {zips.join(", ")}
                  </p>
                </div>
                <MapPin size={18} className={primary ? "text-white/80" : "text-accent"} aria-hidden />
              </div>
              <p className={`text-sm leading-normal mb-3.5 lg:mb-4 ${primary ? "text-white/85" : "text-body"}`}>
                {summary}
              </p>
              <span
                className={`inline-flex items-center gap-1.5 text-sm font-bold ${
                  primary ? "text-white" : "text-accent group-hover:text-accent-hover"
                }`}
              >
                {city} eye care
                <ArrowRight size={14} aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Find us + map */}
      <section className="bg-surface py-8 lg:py-16">
        <div className="max-w-295 mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-6 lg:gap-14 items-start">
          <div>
            <h2 className="text-xl lg:text-3xl font-extrabold text-ink tracking-tight mb-3 lg:mb-4">
              Find us in Rochester Hills
            </h2>
            <p className="text-md lg:text-base text-body leading-normal mb-5 lg:mb-6">
              We&apos;re on W Auburn Rd in Rochester Hills, an easy drive from
              Rochester, Troy, Auburn Hills, and the rest of Oakland County.
              Plenty of free parking right out front.
            </p>
            <div className="flex flex-col gap-3.5 mb-6 lg:mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="text-accent mt-0.5 shrink-0" size={18} aria-hidden />
                <div>
                  <p className="font-bold text-ink text-md">Address</p>
                  <p className="text-sm text-body">{FULL_ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-accent mt-0.5 shrink-0" size={18} aria-hidden />
                <div>
                  <p className="font-bold text-ink text-md">Phone</p>
                  <a href={BUSINESS.phoneHref} className="text-sm text-body hover:text-accent transition-colors">
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
            <Button href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation size={16} aria-hidden />
              Get directions
            </Button>
          </div>

          <MapEmbed showInfo={false} className="h-64 lg:h-80 rounded-2xl overflow-hidden border border-hairline" />
        </div>
      </section>

      {/* SEO content block */}
      <section className="max-w-295 mx-auto px-5 py-8 lg:px-10 lg:py-14">
        <h2 className="text-xl lg:text-2xl font-extrabold text-ink tracking-tight mb-3 lg:mb-4">
          Your local Oakland County optician
        </h2>
        <div className="text-md lg:text-base text-body leading-relaxed space-y-4 max-w-3xl">
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
            <strong>Royal Oak, Bloomfield Hills, Auburn Hills, Sterling Heights</strong>,
            wherever you are around here, come on in. And{" "}
            <strong>adjustments are free</strong> for anybody, even if you
            didn&apos;t buy the glasses from us.
          </p>
        </div>
      </section>

      <CtaBand className="pb-10 lg:pb-20" />
    </>
  );
}
