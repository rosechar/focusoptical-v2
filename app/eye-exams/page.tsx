import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { BUSINESS, PEOPLE, SITE_URL } from "@/lib/business";
import { BUSINESS_ID, OPTOMETRIST_ID, faqJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Eye Doctor & Eye Exams in Rochester Hills, MI",
  description:
    `Eye exams and contact lens exams in Rochester Hills, MI with our eye doctor, Dr. Diane Galper, OD, every Tuesday. Glasses made in our own lab, most ready next day. Most vision insurance accepted. Call ${BUSINESS.phoneDisplay}.`,
  alternates: {
    canonical: "/eye-exams",
  },
};

const included = [
  {
    title: "Vision & prescription check",
    description:
      "Refraction to find your exact prescription for glasses or contacts, near and far.",
  },
  {
    title: "Eye health evaluation",
    description:
      "A look at the front and back of the eye for early signs of cataracts, glaucoma, and other conditions.",
  },
  {
    title: "Eye pressure test",
    description: "A quick, painless glaucoma screening.",
  },
  {
    title: "Contact lens fitting",
    description:
      "If you wear or want contacts, we measure your eyes, check the fit, and send you home with trial lenses.",
  },
];

const steps = [
  {
    step: "1",
    title: "Book online or call",
    description: `Dr. Galper sees patients on Tuesdays. Pick a time or call ${BUSINESS.phoneDisplay}.`,
  },
  {
    step: "2",
    title: "See Dr. Galper",
    description:
      "Bring your current glasses or contacts and your insurance card if you have one.",
  },
  {
    step: "3",
    title: "Pick your glasses, same visit",
    description:
      "Tom cuts your lenses in our own lab on site. Most prescriptions are ready the next day.",
  },
];

const faqs = [
  {
    q: "How much does an eye exam cost in Rochester Hills?",
    a: `It depends on whether you have vision insurance and whether you need a contact lens fitting. Call ${BUSINESS.phoneDisplay} and we'll give you a straight answer before you come in. Plenty of our customers pay out of pocket.`,
  },
  {
    q: "Do you take my vision insurance?",
    a: "We accept most of the common vision plans. Call us with your plan name and we'll confirm your coverage before your visit.",
  },
  {
    q: "How often should I get an eye exam?",
    a: "Once a year, at any age. Prescriptions change, and many eye conditions have no symptoms early on. If you wear contacts, an annual exam is required to renew your prescription.",
  },
  {
    q: "Do you do eye exams for kids?",
    a: "Yes. Dr. Galper sees patients of all ages, including school-age children.",
  },
  {
    q: "Does a contact lens exam include a regular eye exam?",
    a: "Yes. A contact lens exam includes a full eye exam plus the measurements and fitting for contacts, so it's one visit.",
  },
  {
    q: "Can I get glasses the same day as my exam?",
    a: "You can pick your frames right after your exam. Tom cuts and edges every lens in our on-site lab, so most pairs are ready the next day instead of being shipped out.",
  },
  {
    q: "Do I need an appointment?",
    a: "Yes, for eye exams and contact lens exams. Book online or call ahead. Free adjustments and cleaning don't need one.",
  },
  {
    q: "What days does the eye doctor see patients?",
    a: `Dr. Galper sees patients on Tuesdays. Book online or call ${BUSINESS.phoneDisplay} to get on her schedule. The shop is open Monday through Saturday for glasses, contacts, and adjustments.`,
  },
];

const jsonLd = {
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/eye-exams`,
      name: "Eye Exams in Rochester Hills, MI",
      about: { "@id": BUSINESS_ID },
      mainEntity: { "@id": `${SITE_URL}/eye-exams#service` },
    },
    {
      "@type": "MedicalProcedure",
      "@id": `${SITE_URL}/eye-exams#service`,
      name: "Comprehensive eye exam",
      procedureType: "https://schema.org/NoninvasiveProcedure",
      bodyLocation: "Eye",
      description:
        "Annual comprehensive eye exam including refraction, eye health evaluation, and glaucoma screening, performed on Tuesdays by eye doctor Dr. Diane Galper, OD at Focus Optical in Rochester Hills, MI.",
      url: `${SITE_URL}/eye-exams`,
      provider: { "@id": BUSINESS_ID },
      performer: { "@id": OPTOMETRIST_ID },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Eye exams",
          item: `${SITE_URL}/eye-exams`,
        },
      ],
    },
    faqJsonLd(faqs),
  ],
};

export default function EyeExamsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="max-w-295 mx-auto lg:px-10 lg:pt-14 lg:pb-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">
          <div className="relative h-75 lg:h-115 lg:rounded-2.5xl overflow-hidden lg:order-last">
            <Image
              src="/images/tool.jpeg"
              alt="Eye exam equipment at Focus Optical in Rochester Hills"
              fill
              preload
              className="object-cover duotone"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="px-5 pt-7 lg:p-0">
            <p className="eyebrow mb-2.5 lg:mb-3">
              Rochester Hills · Dr. Diane Galper, OD
            </p>
            <h1 className="text-3xl lg:text-5xl lg:leading-none font-extrabold text-ink tracking-tight mb-3 lg:mb-5 text-balance">
              Eye exams in Rochester Hills, MI
            </h1>
            <p className="text-md lg:text-lg leading-normal text-body mb-4.5 lg:mb-8 lg:max-w-135">
              Comprehensive eye exams and contact lens exams with our eye
              doctor, Dr. Diane Galper, every Tuesday. Pick your glasses the
              same visit, and most are ready the next day. Most vision insurance
              accepted.
            </p>
            <div className="flex gap-2.5 lg:gap-3.25">
              <Button href="/contact" size="lg" className="flex-1 lg:flex-none">
                Book an eye exam
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

      <section className="page-container pt-8 lg:pt-4">
        <h2 className="text-xl lg:text-3xl font-extrabold text-ink tracking-tight mb-4 lg:mb-6">
          What&apos;s included
        </h2>
        <ul className="grid sm:grid-cols-2 gap-3.5 lg:gap-5">
          {included.map(({ title, description }) => (
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

      <section className="page-container pt-8 lg:pt-14">
        <div className="rounded-2xl lg:rounded-2.5xl bg-accent-soft p-5 lg:p-8 lg:flex lg:items-center lg:gap-10">
          <div className="lg:flex-1">
            <p className="eyebrow mb-2 lg:mb-3">
              Your eye doctor
            </p>
            <h2 className="text-xl lg:text-2xl font-extrabold text-ink mb-2 lg:mb-3">
              {PEOPLE.optometrist.name}
            </h2>
            <p className="text-sm lg:text-base leading-relaxed text-body">
              Dr. Galper is the optometrist who performs every eye exam and
              contact lens exam at Focus Optical, on Tuesdays. She sees patients
              of all ages, takes the time to explain what she finds, and
              won&apos;t push anything you don&apos;t need.{" "}
              <Link
                href="/about"
                className="font-semibold text-accent hover:text-accent-hover transition-colors"
              >
                Meet the team →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="page-container pt-8 lg:pt-14">
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

      <section className="page-container pt-8 lg:pt-14">
        <div className="flex items-start lg:items-center gap-3.25 lg:gap-3.5 rounded-2xl bg-surface px-5 py-4.5 lg:px-6 lg:py-5.5">
          <span
            aria-hidden
            className="flex h-9 w-9 lg:h-10.5 lg:w-10.5 shrink-0 items-center justify-center rounded-xl bg-white border border-card-border text-accent text-lg lg:text-xl"
          >
            ☑
          </span>
          <div>
            <p className="font-bold text-ink text-md lg:text-base mb-0.75">
              Insurance &amp; cost
            </p>
            <p className="text-sm text-body leading-normal">
              We take most common vision plans, and you don&apos;t need insurance
              to be seen.{" "}
              <Link
                href="/insurance"
                className="font-semibold text-accent hover:text-accent-hover transition-colors"
              >
                Insurance &amp; pricing details
              </Link>{" "}
              or{" "}
              <a
                href={BUSINESS.phoneHref}
                className="font-semibold text-accent hover:text-accent-hover transition-colors"
              >
                call to confirm coverage.
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="page-container pt-8 lg:pt-14">
        <h2 className="text-xl lg:text-3xl font-extrabold text-ink tracking-tight mb-4 lg:mb-6">
          Eye exam questions
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
