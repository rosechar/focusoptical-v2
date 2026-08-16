import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Clock, Navigation, Check } from "lucide-react";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { CITIES, getCity } from "@/lib/cities";
import { faqJsonLd } from "@/lib/schema";
import { SERVICE_HIGHLIGHTS } from "@/lib/services";
import Faq from "@/components/Faq";

const communityChipClass =
  "inline-block text-sm font-semibold bg-surface text-body border border-hairline px-4 py-2 rounded-full hover:bg-accent-soft hover:text-accent transition-colors";

interface Props {
  params: Promise<{ city: string }>;
}

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
      <section className="max-w-295 mx-auto px-5 pt-6 pb-8 lg:px-10 lg:pt-12 lg:pb-12">
        <nav aria-label="Breadcrumb" className="text-sm text-body mb-4 lg:mb-5">
          <Link href="/service-areas" className="hover:text-accent transition-colors">
            Service areas
          </Link>
          <span className="mx-2 text-faint" aria-hidden>/</span>
          <span className="text-ink font-semibold">{area.city}</span>
        </nav>
        <p className="text-accent font-bold text-xs tracking-eyebrow uppercase mb-2.5 lg:mb-3">
          Serving {area.city}, Michigan
        </p>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-ink tracking-tight text-balance">
          {area.primary
            ? `Your optician in ${area.city}`
            : `Optician & eye exams near ${area.city}`}
        </h1>
        <p className="text-md lg:text-lg leading-normal text-body mt-3 lg:mt-4 max-w-155">
          We&apos;ve taken care of {area.city} and {area.county} since 1984. Eye
          exams, glasses, contacts, and free adjustments, from a shop that&apos;s
          family owned.
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

      {/* Quick facts */}
      <section className="bg-surface py-4 lg:py-5">
        <ul className="max-w-295 mx-auto px-5 lg:px-10 grid sm:grid-cols-3 gap-2.5 lg:gap-4 text-sm text-body">
          <li className="flex items-center gap-2.5">
            <Clock size={18} className="text-accent shrink-0" aria-hidden />
            {area.driveTime}
            {!area.primary && ` from ${area.city}`}
          </li>
          <li className="flex items-center gap-2.5">
            <MapPin size={18} className="text-accent shrink-0" aria-hidden />
            {BUSINESS.address.street}, {BUSINESS.address.city}, MI
          </li>
          <li className="flex items-center gap-2.5">
            <Navigation size={18} className="text-accent shrink-0" aria-hidden />
            Serving ZIP codes {area.zips.join(", ")}
          </li>
        </ul>
      </section>

      {/* Main content */}
      <section className="max-w-295 mx-auto px-5 py-8 lg:px-10 lg:py-16 grid lg:grid-cols-3 gap-6 lg:gap-10">
        <div className="lg:col-span-2 flex flex-col gap-4 lg:gap-5">
          <h2 className="text-xl lg:text-3xl font-extrabold text-ink tracking-tight">
            {area.primary
              ? `Quality optical care in ${area.city}`
              : `Why ${area.city} chooses Focus Optical`}
          </h2>
          {area.paragraphs.map((p) => (
            <p key={p} className="text-md lg:text-base text-body leading-relaxed">
              {p}
            </p>
          ))}
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-md font-bold text-accent hover:text-accent-hover transition-colors"
          >
            <Navigation size={16} aria-hidden />
            Get directions from {area.city}
          </a>
        </div>

        <div className="bg-surface rounded-2xl p-5 lg:p-6 h-fit">
          <h3 className="font-bold text-ink text-base lg:text-lg mb-3.5 lg:mb-4">
            Services for {area.city} patients
          </h3>
          <ul className="flex flex-col gap-2.5 mb-5 lg:mb-6">
            {SERVICE_HIGHLIGHTS.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-sm text-body">
                <Check size={16} className="text-accent mt-0.5 shrink-0" aria-hidden />
                {s}
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="text-sm font-bold text-accent hover:text-accent-hover transition-colors"
          >
            View all services →
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-surface py-8 lg:py-16">
        <div className="max-w-230 mx-auto px-5 lg:px-10">
          <h2 className="text-xl lg:text-3xl font-extrabold text-ink tracking-tight mb-4 lg:mb-8">
            Common questions from {area.city} patients
          </h2>
          <Faq items={area.faqs} />
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

      <section className="max-w-295 mx-auto px-5 pb-10 lg:px-10 lg:pb-14">
        <h2 className="text-base lg:text-lg font-bold text-ink mb-3 lg:mb-4">
          Other communities we serve
        </h2>
        <ul className="flex flex-wrap gap-2">
          {CITIES.filter((c) => c.slug !== area.slug).map((c) => (
            <li key={c.slug}>
              <Link href={`/service-areas/${c.slug}`} className={communityChipClass}>
                {c.city}, MI
              </Link>
            </li>
          ))}
          <li>
            <Link href="/service-areas" className={communityChipClass}>
              All service areas →
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
