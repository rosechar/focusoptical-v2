import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import { BUSINESS, PEOPLE, SITE_URL } from "@/lib/business";
import { BUSINESS_ID, faqJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Next-Day Prescription Glasses in Rochester Hills, MI",
  description:
    "Prescription glasses cut and edged in our own lab in Rochester Hills, MI, with most ready the next day. Frames for every budget, new lenses in your frames, progressives, and free adjustments. Serving Oakland County.",
  alternates: {
    canonical: "/glasses",
  },
};

const offerings = [
  {
    title: "Everyday prescription glasses",
    description:
      "A wide selection of frames for every budget, fitted to your face and adjusted before you leave.",
  },
  {
    title: "Progressives & specialty lenses",
    description:
      "Progressives and specialty lenses, measured carefully and cut in our own lab.",
  },
  {
    title: "Prescription sunglasses",
    description:
      "Prescription and non-prescription sunglasses, fitted and adjusted in the shop.",
  },
  {
    title: "New lenses, your frames",
    description:
      "Love the frames you have? Bring them in and we'll cut new lenses for them.",
  },
];

const steps = [
  {
    step: "1",
    title: "Bring a prescription or get an exam",
    description:
      "Bring a current prescription, or see Dr. Galper here for an eye exam on a Tuesday.",
  },
  {
    step: "2",
    title: "Pick your frames",
    description:
      "Tom helps you choose frames that fit and takes the measurements for your lenses.",
  },
  {
    step: "3",
    title: "Pick up the next day",
    description:
      "Your lenses are cut and edged in our lab. Most pairs are ready the next day, fitted before you go.",
  },
];

const faqs = [
  {
    q: "How fast can I get new glasses?",
    a: "Most prescriptions are ready the next day. Tom cuts and edges every lens in our own lab on site, so nothing gets shipped out to an outside lab.",
  },
  {
    q: "Which glasses take longer than next day?",
    a: "Some lens types and coatings have to be ordered and take a little longer. We'll tell you exactly when your glasses will be ready before you leave.",
  },
  {
    q: "Can I bring a prescription from another eye doctor?",
    a: "Yes. Bring a current prescription from any eye doctor and we'll make your glasses. Need a new prescription? Dr. Galper does eye exams here on Tuesdays.",
  },
  {
    q: "Can you put new lenses in frames I already own?",
    a: "Yes. Bring in the frames you like and we'll cut new lenses for them, so you don't have to buy new frames.",
  },
  {
    q: "Can I use vision insurance for glasses?",
    a: `We accept most common vision plans. Call ${BUSINESS.phoneDisplay} with your plan name and we'll confirm what's covered before your visit.`,
  },
  {
    q: "Are adjustments free?",
    a: "Yes. Adjustments and cleaning are free for anyone, on any pair, no purchase or appointment needed.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/glasses`,
      name: "Next-Day Prescription Glasses in Rochester Hills, MI",
      about: { "@id": BUSINESS_ID },
      mainEntity: { "@id": `${SITE_URL}/glasses#service` },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/glasses#service`,
      name: "Next-day prescription glasses",
      serviceType: "Prescription eyeglasses",
      description:
        "Prescription eyeglasses with lenses cut and edged in Focus Optical's on-site lab in Rochester Hills, MI. Most prescriptions are ready the next day.",
      url: `${SITE_URL}/glasses`,
      provider: { "@id": BUSINESS_ID },
      areaServed: { "@type": "AdministrativeArea", name: "Oakland County, MI" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Glasses",
          item: `${SITE_URL}/glasses`,
        },
      ],
    },
    faqJsonLd(faqs),
  ],
};

export default function GlassesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="max-w-295 mx-auto lg:px-10 lg:pt-14 lg:pb-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">
          <div className="relative h-75 lg:h-115 lg:rounded-2.5xl overflow-hidden lg:order-last">
            <Image
              src="/images/glasses2.jpeg"
              alt="Eyeglass frames on display at Focus Optical in Rochester Hills"
              fill
              priority
              className="object-cover duotone"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="px-5 pt-7 lg:p-0">
            <p className="text-accent font-bold text-xs tracking-eyebrow uppercase mb-2.5 lg:mb-3">
              Rochester Hills · On-site lens lab
            </p>
            <h1 className="text-3xl lg:text-5xl lg:leading-none font-extrabold text-ink tracking-tight mb-3 lg:mb-5 text-balance">
              Next-day glasses in Rochester Hills, MI
            </h1>
            <p className="text-md lg:text-lg leading-normal text-body mb-4.5 lg:mb-8 lg:max-w-135">
              We cut and edge prescription lenses in our own lab, so most glasses
              are ready the next day. Frames for every budget, plus the contact
              lens brands you need, for Oakland County since 1984.
            </p>
            <div className="flex gap-2.5 lg:gap-3.25">
              <Button href="/contact" size="lg" className="flex-1 lg:flex-none">
                Book a visit
              </Button>
              <Button
                href={BUSINESS.phoneHref}
                variant="outline"
                size="lg"
                className="flex-1 lg:flex-none"
              >
                <Phone size={18} aria-hidden />
                Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-295 mx-auto px-5 pt-8 lg:px-10 lg:pt-4">
        <h2 className="text-xl lg:text-3xl font-extrabold text-ink tracking-tight mb-4 lg:mb-6">
          What we make
        </h2>
        <ul className="grid sm:grid-cols-2 gap-3.5 lg:gap-5">
          {offerings.map(({ title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-hairline bg-white p-5 lg:p-6 shadow-card"
            >
              <h3 className="text-md lg:text-lg font-bold text-ink mb-1">
                {title}
              </h3>
              <p className="text-sm lg:text-md text-body leading-relaxed">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-295 mx-auto px-5 pt-8 lg:px-10 lg:pt-14">
        <div className="rounded-2xl lg:rounded-2.5xl bg-accent-soft p-5 lg:p-8">
          <p className="text-accent font-bold text-xs tracking-eyebrow uppercase mb-2 lg:mb-3">
            Why it&apos;s next day
          </p>
          <h2 className="text-xl lg:text-2xl font-extrabold text-ink mb-2 lg:mb-3">
            Our own lab, not a shipping box
          </h2>
          <p className="text-sm lg:text-base leading-relaxed text-body">
            Many shops send lenses out to a lab and wait days for them to come
            back. {PEOPLE.owner.name} has made glasses since 1977 and cuts and
            edges every lens right here in the shop, so most pairs are ready the
            next day and he checks the fit himself.{" "}
            <Link
              href="/about"
              className="font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              Meet the team →
            </Link>
          </p>
        </div>
      </section>

      <section className="max-w-295 mx-auto px-5 pt-8 lg:px-10 lg:pt-14">
        <h2 className="text-xl lg:text-3xl font-extrabold text-ink tracking-tight mb-4 lg:mb-6">
          How it works
        </h2>
        <ol className="grid sm:grid-cols-3 gap-3.5 lg:gap-5">
          {steps.map(({ step, title, description }) => (
            <li
              key={step}
              className="rounded-2xl bg-surface p-5 lg:p-6 flex gap-4 sm:block"
            >
              <span
                aria-hidden
                className="font-display text-2xl lg:text-3xl font-extrabold text-accent leading-none sm:mb-3 sm:block"
              >
                {step}
              </span>
              <div>
                <h3 className="text-md lg:text-lg font-bold text-ink mb-1">
                  {title}
                </h3>
                <p className="text-sm lg:text-md text-body leading-relaxed">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="max-w-295 mx-auto px-5 lg:px-10 pt-8 lg:pt-14">
        <h2 className="text-xl lg:text-3xl font-extrabold text-ink tracking-tight mb-4 lg:mb-6">
          Glasses questions
        </h2>
        <Faq
          items={faqs}
          className="flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-4 lg:items-start"
        />
      </section>

      <CtaBand className="pt-6 pb-10 lg:pt-10 lg:pb-20" />
    </>
  );
}
