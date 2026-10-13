import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import CallButton from "@/components/CallButton";
import CtaBand from "@/components/CtaBand";
import Faq, { type FaqItem } from "@/components/Faq";
import OfferCard from "@/components/OfferCard";
import JsonLd from "@/components/JsonLd";
import { bookingHref, type AppointmentValue } from "@/lib/appointments";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { BUSINESS_ID, faqJsonLd } from "@/lib/schema";

interface Card {
  title: string;
  description: string;
}

interface TextLink {
  href: string;
  label: string;
}

export interface ServicePageProps {
  /** Route path, e.g. "/eye-exams". Used for structured data ids and URLs. */
  path: string;
  /** Pre-selected on the booking form by every book button on the page. */
  service: AppointmentValue;
  hero: {
    title: string;
    intro: string;
    image: string;
    alt: string;
    bookLabel: string;
  };
  cards: { heading: string; items: readonly Card[] };
  /** Accent panel between the cards and the steps. */
  feature: { eyebrow: string; heading: string; text: string; link: TextLink };
  /** Numbered "How it works" steps, in order. */
  steps: readonly Card[];
  /** Adds the "Insurance & cost" note above the FAQs. */
  insuranceNote?: boolean;
  /** Shows the current offer (lib/promo.ts) under the hero. */
  offer?: boolean;
  faq: { heading: string; items: readonly FaqItem[] };
  schema: {
    /** WebPage name. */
    pageName: string;
    /** Breadcrumb label for this page. */
    breadcrumb: string;
    /** The page's main service node; its @id and url are added here. */
    service: Record<string, unknown>;
  };
}

const linkClass = "font-semibold text-accent hover:text-accent-hover transition-colors";
const sectionHeadingClass =
  "text-xl lg:text-3xl font-extrabold text-ink tracking-tight mb-4 lg:mb-6";

// Shared layout for the dedicated service pages (/eye-exams, /contact-lenses, /glasses):
// hero, card grid, feature panel, steps, optional insurance note, FAQs, closing CTA.
export default function ServicePage({
  path,
  service,
  hero,
  cards,
  feature,
  steps,
  insuranceNote = false,
  offer = false,
  faq,
  schema,
}: ServicePageProps) {
  const url = `${SITE_URL}${path}`;
  const jsonLd = {
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        name: schema.pageName,
        about: { "@id": BUSINESS_ID },
        mainEntity: { "@id": `${url}#service` },
      },
      { ...schema.service, "@id": `${url}#service`, url },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: schema.breadcrumb, item: url },
        ],
      },
      faqJsonLd(faq.items),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="max-w-295 mx-auto lg:px-10 lg:pt-14 lg:pb-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">
          <div className="relative h-75 lg:h-115 lg:rounded-2.5xl overflow-hidden lg:order-last">
            <Image
              src={hero.image}
              alt={hero.alt}
              fill
              preload
              fetchPriority="high"
              className="object-cover duotone"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="px-5 pt-7 lg:p-0">
            <h1 className="text-3xl lg:text-5xl lg:leading-none font-extrabold text-ink tracking-tight mb-3 lg:mb-5 text-balance">
              {hero.title}
            </h1>
            <p className="text-md lg:text-lg leading-normal text-body mb-4.5 lg:mb-8 lg:max-w-135">
              {hero.intro}
            </p>
            <div className="flex gap-2.5 lg:gap-3.25">
              <Button href={bookingHref(service)} size="lg" className="flex-1 lg:flex-none">
                {hero.bookLabel}
              </Button>
              <CallButton className="flex-1 lg:flex-none" />
            </div>
          </div>
        </div>
      </section>

      {offer && <OfferCard className="page-container pt-7 lg:pt-0 lg:pb-10" />}

      <section className="page-container pt-8 lg:pt-4">
        <h2 className={sectionHeadingClass}>{cards.heading}</h2>
        <ul className="grid sm:grid-cols-2 gap-3.5 lg:gap-5">
          {cards.items.map(({ title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-hairline bg-white p-5 lg:p-6 shadow-card"
            >
              <h3 className="text-md lg:text-lg font-bold text-ink mb-1">{title}</h3>
              <p className="text-sm lg:text-md text-body leading-relaxed">{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="page-container pt-8 lg:pt-14">
        <div className="rounded-2xl lg:rounded-2.5xl bg-accent-soft p-5 lg:p-8">
          <p className="eyebrow mb-2 lg:mb-3">{feature.eyebrow}</p>
          <h2 className="text-xl lg:text-2xl font-extrabold text-ink mb-2 lg:mb-3">
            {feature.heading}
          </h2>
          <p className="text-sm lg:text-base leading-relaxed text-body">
            {feature.text}{" "}
            <Link href={feature.link.href} className={linkClass}>
              {feature.link.label}
            </Link>
          </p>
        </div>
      </section>

      <section className="page-container pt-8 lg:pt-14">
        <h2 className={sectionHeadingClass}>How it works</h2>
        <ol className="grid sm:grid-cols-3 gap-3.5 lg:gap-5">
          {steps.map(({ title, description }, i) => (
            <li key={title} className="rounded-2xl bg-surface p-5 lg:p-6 flex gap-4 sm:block">
              <span
                aria-hidden
                className="font-display text-2xl lg:text-3xl font-extrabold text-accent leading-none sm:mb-3 sm:block"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-md lg:text-lg font-bold text-ink mb-1">{title}</h3>
                <p className="text-sm lg:text-md text-body leading-relaxed">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {insuranceNote && (
        <section className="page-container pt-8 lg:pt-14">
          <div className="flex items-start lg:items-center gap-3.25 lg:gap-3.5 rounded-2xl bg-surface px-5 py-4.5 lg:px-6 lg:py-5.5">
            <span
              aria-hidden
              className="flex h-9 w-9 lg:h-10.5 lg:w-10.5 shrink-0 items-center justify-center rounded-xl bg-white border border-hairline text-accent text-lg lg:text-xl"
            >
              ☑
            </span>
            <div>
              <p className="font-bold text-ink text-md lg:text-base mb-0.75">Insurance &amp; cost</p>
              <p className="text-sm text-body leading-normal">
                We take most common vision plans, and you don&apos;t need insurance to be seen.{" "}
                <Link href="/insurance" className={linkClass}>
                  Insurance &amp; pricing details
                </Link>{" "}
                or{" "}
                <a href={BUSINESS.phoneHref} className={linkClass}>
                  call to confirm coverage.
                </a>
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="page-container pt-8 lg:pt-14">
        <h2 className={sectionHeadingClass}>{faq.heading}</h2>
        <Faq
          items={faq.items}
          className="flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-4 lg:items-start"
        />
      </section>

      <CtaBand href={bookingHref(service)} className="pt-6 pb-10 lg:pt-10 lg:pb-20" />
    </>
  );
}
