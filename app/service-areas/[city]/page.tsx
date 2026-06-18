import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Clock, Navigation, Check } from "lucide-react";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { CITIES, getCity } from "@/lib/cities";

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
    keywords: [
      `optician ${area.city} MI`,
      `eye exam ${area.city}`,
      `eye exam near ${area.city} MI`,
      `glasses ${area.city} Michigan`,
      `contact lenses ${area.city} MI`,
      `optometrist near ${area.city}`,
      `eyeglass shop near ${area.city}`,
    ],
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
      {
        "@type": "FAQPage",
        mainEntity: area.faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page header */}
      <section className="bg-blue-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-blue-300 font-semibold text-sm tracking-widest uppercase mb-2">
            Serving {area.city}, Michigan
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            {area.primary
              ? `Your Optician in ${area.city}`
              : `Optician & Eye Exams Near ${area.city}`}
          </h1>
          <p className="text-blue-200 mt-4 text-lg max-w-2xl leading-relaxed">
            Focus Optical has served {area.city} and {area.county} since 1984 —
            eye exams, prescription glasses, contact lenses, and free
            adjustments from an independently owned optical store.
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
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/15 font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <Phone size={16} />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2.5 text-slate-600">
            <Clock size={18} className="text-blue-600 shrink-0" />
            {area.driveTime}
            {!area.primary && ` from ${area.city}`}
          </div>
          <div className="flex items-center gap-2.5 text-slate-600">
            <MapPin size={18} className="text-blue-600 shrink-0" />
            {BUSINESS.address.street}, {BUSINESS.address.city}, MI
          </div>
          <div className="flex items-center gap-2.5 text-slate-600">
            <Navigation size={18} className="text-blue-600 shrink-0" />
            Serving ZIP codes {area.zips.join(", ")}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              {area.primary
                ? `Quality Optical Care in ${area.city}`
                : `Why ${area.city} Chooses Focus Optical`}
            </h2>
            {area.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              <Navigation size={16} />
              Get directions from {area.city}
            </a>
          </div>

          <aside className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-fit">
            <h3 className="font-bold text-slate-900 text-lg mb-4">
              Services for {area.city} Patients
            </h3>
            <ul className="space-y-2.5 mb-6">
              {SERVICES.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2.5 text-sm text-slate-600"
                >
                  <Check size={16} className="text-blue-600 mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
            >
              View all services →
            </Link>
          </aside>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 sm:py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">
            Common Questions from {area.city} Patients
          </h2>
          <div className="space-y-4">
            {area.faqs.map(({ q, a }) => (
              <div
                key={q}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
              >
                <h3 className="font-bold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + other areas */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-blue-900 rounded-2xl p-8 sm:p-10 text-center text-white mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Ready for Better Vision Care?
            </h2>
            <p className="text-blue-200 mb-6 max-w-xl mx-auto">
              Book an eye exam or stop in for a free adjustment — we&apos;re{" "}
              {area.primary
                ? "right here in Rochester Hills"
                : `${area.driveTime.toLowerCase()} from ${area.city}`}
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
              >
                Schedule an Appointment
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/15 font-semibold px-7 py-3.5 rounded-full transition-colors"
              >
                <Phone size={16} />
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4">
            Other Communities We Serve
          </h2>
          <div className="flex flex-wrap gap-2">
            {CITIES.filter((c) => c.slug !== area.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="text-sm bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-600 border border-slate-100 px-4 py-2 rounded-full transition-colors"
              >
                {c.city}, MI
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="text-sm bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-600 border border-slate-100 px-4 py-2 rounded-full transition-colors"
            >
              All service areas →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
