import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Clock, Navigation, Check } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { CITIES, getCity } from "@/lib/cities";
import { faqJsonLd } from "@/lib/schema";

interface Props {
  params: Promise<{ city: string }>;
}

const SERVICES = [
  "Comprehensive Eye Exams (Dr. Diane Galper, OD)",
  "Contact Lens Exams & Fittings",
  "Prescription Eyeglasses & Sunglasses",
  "New Lenses for Existing Frames",
  "On-Site Lens Cutting & Edging",
  "Free Eyeglass Adjustments & Cleaning",
];

export function generateStaticParams() {
  return CITIES.map(({ slug }) => ({ city: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const area = getCity(slug);
  if (!area) return {};

  const title = area.primary
    ? `Optician & Eye Exams in ${area.city}, MI`
    : `Optician & Eye Exams Near ${area.city}, MI`;

  return {
    title,
    description: `Focus Optical serves ${area.city}, MI with eye exams, prescription glasses, contact lenses, and free adjustments. Independent optician since 1984, ${
      area.primary
        ? "located in Rochester Hills"
        : `${area.driveTime.toLowerCase()} from ${area.city}`
    }. Call (248) 852-8830.`,
    alternates: {
      canonical: `/service-areas/${area.slug}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const area = getCity(slug);
  if (!area) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Service Areas",
            item: `${SITE_URL}/service-areas`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: area.city,
            item: `${SITE_URL}/service-areas/${area.slug}`,
          },
        ],
      },
      faqJsonLd(area.faqs),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb + header */}
      <section className="pt-10 sm:pt-14 pb-10">
        <div className="max-w-295 mx-auto px-5 sm:px-10">
          <nav aria-label="Breadcrumb" className="text-sm text-body mb-5">
            <Link href="/service-areas" className="hover:text-accent transition-colors">
              Service areas
            </Link>
            <span className="mx-2 text-hairline">/</span>
            <span className="text-ink">{area.city}</span>
          </nav>
          <p className="text-accent font-semibold text-xs tracking-eyebrow uppercase mb-3">
            Serving {area.city}, Michigan
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight leading-tight">
            {area.primary
              ? `Your optician in ${area.city}`
              : `Optician & eye exams near ${area.city}`}
          </h1>
          <p className="text-body mt-4 text-lg max-w-2xl leading-relaxed">
            We&apos;ve taken care of {area.city} and {area.county} since 1984. Eye
            exams, glasses, contacts, and free adjustments, from a shop that&apos;s
            family owned.
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

      {/* Quick facts */}
      <section className="bg-surface py-5">
        <div className="max-w-295 mx-auto px-5 sm:px-10 grid sm:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2.5 text-body">
            <Clock size={18} className="text-accent shrink-0" />
            {area.driveTime}
            {!area.primary && ` from ${area.city}`}
          </div>
          <div className="flex items-center gap-2.5 text-body">
            <MapPin size={18} className="text-accent shrink-0" />
            {BUSINESS.address.street}, {BUSINESS.address.city}, MI
          </div>
          <div className="flex items-center gap-2.5 text-body">
            <Navigation size={18} className="text-accent shrink-0" />
            Serving ZIP codes {area.zips.join(", ")}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-295 mx-auto px-5 sm:px-10 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              {area.primary
                ? `Quality optical care in ${area.city}`
                : `Why ${area.city} chooses Focus Optical`}
            </h2>
            {area.paragraphs.map((p, i) => (
              <p key={i} className="text-body leading-relaxed">
                {p}
              </p>
            ))}
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors"
            >
              <Navigation size={16} />
              Get directions from {area.city}
            </a>
          </div>

          <aside className="bg-surface rounded-2xl p-6 h-fit">
            <h3 className="font-bold text-ink text-lg mb-4">
              Services for {area.city} patients
            </h3>
            <ul className="space-y-2.5 mb-6">
              {SERVICES.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm text-body">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="text-accent hover:text-accent-hover font-semibold text-sm transition-colors"
            >
              View all services →
            </Link>
          </aside>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-230 mx-auto px-5 sm:px-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-8">
            Common questions from {area.city} patients
          </h2>
          <div className="space-y-4">
            {area.faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-hairline">
                <h3 className="font-semibold text-ink mb-2">{q}</h3>
                <p className="text-body text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + other areas */}
      <CtaBand
        subtext={
          area.primary
            ? "Right here in Rochester Hills. Open Monday to Saturday."
            : `${area.driveTime} from ${area.city}. Open Monday to Saturday.`
        }
      />

      <section className="pb-14">
        <div className="max-w-295 mx-auto px-5 sm:px-10">
          <h2 className="text-lg font-bold text-ink tracking-normal mb-4">
            Other communities we serve
          </h2>
          <div className="flex flex-wrap gap-2">
            {CITIES.filter((c) => c.slug !== area.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="text-sm bg-surface hover:bg-accent-soft hover:text-accent text-body border border-hairline px-4 py-2 rounded-full transition-colors"
              >
                {c.city}, MI
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="text-sm bg-surface hover:bg-accent-soft hover:text-accent text-body border border-hairline px-4 py-2 rounded-full transition-colors"
            >
              All service areas →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
