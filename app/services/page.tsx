import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import { BUSINESS } from "@/lib/business";
import { faqJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Focus Optical in Rochester Hills, MI offers eye exams, contact lens exams, prescription glasses, contact lenses, and free eyeglass adjustments. Next day service available on most prescriptions.",
  alternates: {
    canonical: "/services",
  },
};

const stats = [
  { value: "45+", label: "years", labelWide: "years of experience" },
  { value: "Next-day", label: "most Rx", labelWide: "on most prescriptions" },
  { value: "Walk-in", label: "welcome", labelWide: "always welcome" },
];

interface Service {
  id: string;
  title: string;
  badge: string;
  description: string;
  image?: string;
  alt?: string;
  chips: string[];
  inverted?: boolean;
}

const services: Service[] = [
  {
    id: "eye-exams",
    title: "Eye exams",
    badge: "Annual vision assessment",
    description:
      "Comprehensive exams with Dr. Diane Galper, OD. We recommend one every year, at any age.",
    image: "/images/tool.jpeg",
    alt: "Eye exam equipment at Focus Optical",
    chips: ["Licensed optometrist", "Full vision check", "All ages"],
  },
  {
    id: "contact-exams",
    title: "Contact lens exams",
    badge: "Specialized fitting",
    description:
      "A contact exam checks the fit and the health of your eyes. A full eye exam is included, so it's one visit.",
    image: "/images/contact.jpg",
    alt: "Contact lens fitting at Focus Optical",
    chips: ["Proper fit & comfort", "Full exam included", "Trial lenses"],
  },
  {
    id: "retail",
    title: "Glasses & contacts",
    badge: "Wide selection",
    description:
      "Frames for every budget and the contact brands you need. Keep your favorite frames if you like and we'll cut new lenses for them.",
    image: "/images/contact1.jpg",
    alt: "Eyeglass frame selection at Focus Optical",
    chips: ["Every budget", "Re-lens your frames", "Next-day service"],
  },
  {
    id: "adjustments",
    title: "Free adjustments",
    badge: "Free for everyone",
    description:
      "Bring in any pair, bought anywhere. We'll fix the fit and clean them, no charge and no appointment.",
    chips: ["No purchase needed", "Cleaning included", "Just walk in"],
    inverted: true,
  },
];

const faqs = [
  {
    q: "Do you take walk-ins?",
    a: "Yes. Walk in any time for frames, contacts, or a free adjustment. Eye exams with Dr. Galper are by appointment, so call or book online for those.",
  },
  {
    q: "How long does it take to get new glasses?",
    a: "Most prescriptions are ready the next day. Tom cuts and edges every lens in our own lab on site, so nothing gets shipped out.",
  },
  {
    q: "Can you put new lenses in frames I already own?",
    a: "Yes. Bring in the frames you like and we'll cut new lenses for them, so you don't have to buy new frames.",
  },
  {
    q: "Are adjustments really free, even if I bought my glasses somewhere else?",
    a: "Yes. Adjustments and cleaning are free for anyone, on any pair, no purchase or appointment needed.",
  },
  {
    q: "Does a contact lens exam include a regular eye exam?",
    a: "Yes. A contact lens exam checks the fit and the health of your eyes and includes a full eye exam, so it's one visit.",
  },
];

const jsonLd = { "@context": "https://schema.org", ...faqJsonLd(faqs) };

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="max-w-295 mx-auto px-5 pt-7 lg:px-10 lg:pt-14">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-ink tracking-tight mb-2 lg:mb-2.5">
          Services
        </h1>
        <p className="text-md lg:text-lg leading-normal text-body mb-4.5 lg:mb-7 lg:max-w-155">
          Exams, glasses, contacts and repairs, all at one shop in Rochester
          Hills.
        </p>

        <div className="flex gap-2 lg:gap-3.5 mb-6 lg:mb-9">
          {stats.map(({ value, label, labelWide }) => (
            <div
              key={value}
              className="flex-1 rounded-xl lg:rounded-2xl bg-surface px-2.5 py-3.25 lg:p-5 text-center"
            >
              <div className="font-display text-lg lg:text-2xl font-extrabold text-accent">
                {value}
              </div>
              <div className="text-xs lg:text-sm text-body mt-0.5 lg:mt-0.75">
                <span className="lg:hidden">{label}</span>
                <span className="hidden lg:inline">{labelWide}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-295 mx-auto lg:px-10">
        <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory px-5 pt-1 pb-2.5 lg:grid lg:grid-cols-2 lg:gap-5 lg:p-0 lg:overflow-visible">
          {services.map(
            ({ id, title, badge, description, image, alt, chips, inverted }) => (
              <article
                key={id}
                id={id}
                className={`scroll-mt-24 flex flex-col shrink-0 w-72.5 lg:w-auto snap-start rounded-2.5xl lg:rounded-2.5xl overflow-hidden ${
                  inverted
                    ? "bg-accent text-white shadow-card lg:justify-center"
                    : "bg-white border border-hairline shadow-card"
                }`}
              >
                {!inverted && image && (
                  <div className="relative h-38 lg:h-50">
                    <Image
                      src={image}
                      alt={alt ?? ""}
                      fill
                      className="object-cover duotone"
                      sizes="(max-width: 1024px) 290px, 50vw"
                    />
                    <span className="absolute left-3.5 top-3.5 lg:left-4 lg:top-4 rounded-full bg-white/94 backdrop-blur-sm px-2.75 py-1.5 lg:px-3 text-xs font-bold uppercase tracking-widest text-accent-hover">
                      {badge}
                    </span>
                  </div>
                )}
                <div className={inverted ? "px-5 py-5.5 lg:px-6 lg:py-7" : "p-5 lg:p-6"}>
                  {inverted && (
                    <div className="text-xs font-bold uppercase tracking-widest text-accent-ondark mb-2 lg:mb-2.5">
                      {badge}
                    </div>
                  )}
                  <h2 className="text-xl font-extrabold mb-1.75 lg:mb-2">
                    {title}
                  </h2>
                  <p
                    className={`text-sm lg:text-md leading-relaxed mb-3.5 lg:mb-4 ${
                      inverted ? "text-white/90" : "text-body"
                    }`}
                  >
                    {description}
                  </p>
                  <ul className="flex flex-wrap gap-1.75 lg:gap-2">
                    {chips.map((chip) => (
                      <li
                        key={chip}
                        className={`inline-flex items-center gap-1.25 rounded-full px-2.75 py-1.5 lg:px-3 lg:py-1.75 text-xs lg:text-sm font-semibold ${
                          inverted ? "bg-white/16" : "bg-surface-alt text-secondary"
                        }`}
                      >
                        <span aria-hidden className={inverted ? "" : "text-accent"}>
                          ✓
                        </span>
                        {chip}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ),
          )}
        </div>

        <div className="mx-5 lg:mx-0 mt-5.5 lg:mt-5 flex items-start lg:items-center gap-3.25 lg:gap-3.5 rounded-2xl bg-surface px-5 py-4.5 lg:px-6 lg:py-5.5">
          <span
            aria-hidden
            className="flex h-9 w-9 lg:h-10.5 lg:w-10.5 shrink-0 items-center justify-center rounded-xl bg-white border border-card-border text-accent text-lg lg:text-xl"
          >
            ☑
          </span>
          <div>
            <p className="font-bold text-ink text-md lg:text-base mb-0.75">Insurance</p>
            <p className="text-sm text-body leading-normal">
              Have a vision plan? Bring it in and we&apos;ll help you use it.{" "}
              <a
                href={BUSINESS.phoneHref}
                className="font-semibold text-accent hover:text-accent-hover transition-colors"
              >
                Call to confirm coverage.
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-295 mx-auto px-5 lg:px-10 pt-8 lg:pt-14">
        <h2 className="text-xl lg:text-3xl font-extrabold text-ink tracking-tight mb-4 lg:mb-6">
          Common questions
        </h2>
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-hairline p-5 lg:p-6">
              <h3 className="font-bold text-ink text-md lg:text-base mb-1.5">{q}</h3>
              <p className="text-sm lg:text-md text-body leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand className="pt-6 pb-10 lg:pt-10 lg:pb-20" />
    </>
  );
}
