import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Focus Optical in Rochester Hills, MI offers eye exams, contact lens exams, prescription glasses, contact lenses, and free eyeglass adjustments. Next day service available on most prescriptions.",
  keywords: [
    "eye exam Rochester Hills MI",
    "contact lens exam Oakland County",
    "prescription glasses Rochester Hills",
    "free eyeglass adjustments",
    "optician services Rochester Hills",
    "contact lenses Michigan",
    "eyeglass fitting Rochester Hills",
  ],
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

export default function ServicesPage() {
  return (
    <>
      <section className="max-w-[1180px] mx-auto px-5 pt-7 lg:px-10 lg:pt-14">
        <h1 className="font-display text-[30px] lg:text-5xl font-extrabold text-ink tracking-[-0.02em] lg:tracking-[-0.03em] mb-2 lg:mb-2.5">
          Services
        </h1>
        <p className="text-[15.5px] lg:text-lg leading-[1.55] text-body mb-[18px] lg:mb-7 lg:max-w-[620px]">
          Exams, glasses, contacts and repairs, all at one shop in Rochester
          Hills.
        </p>

        <div className="flex gap-2 lg:gap-3.5 mb-6 lg:mb-9">
          {stats.map(({ value, label, labelWide }) => (
            <div
              key={value}
              className="flex-1 rounded-xl lg:rounded-[14px] bg-surface px-2.5 py-[13px] lg:p-5 text-center"
            >
              <div className="font-display text-[19px] lg:text-[26px] font-extrabold text-accent">
                {value}
              </div>
              <div className="text-[11.5px] lg:text-[13.5px] text-body mt-0.5 lg:mt-[3px]">
                <span className="lg:hidden">{label}</span>
                <span className="hidden lg:inline">{labelWide}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto lg:px-10">
        <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory px-5 pt-1 pb-2.5 lg:grid lg:grid-cols-2 lg:gap-5 lg:p-0 lg:overflow-visible">
          {services.map(
            ({ id, title, badge, description, image, alt, chips, inverted }) => (
              <article
                key={id}
                id={id}
                className={`scroll-mt-24 flex flex-col shrink-0 w-[290px] lg:w-auto snap-start rounded-[18px] lg:rounded-[20px] overflow-hidden ${
                  inverted
                    ? "bg-accent text-white shadow-[0_2px_10px_rgba(20,24,26,0.06)] lg:justify-center"
                    : "bg-white border border-hairline shadow-[0_2px_10px_rgba(20,24,26,0.04)]"
                }`}
              >
                {!inverted && image && (
                  <div className="relative h-[152px] lg:h-[200px]">
                    <Image
                      src={image}
                      alt={alt ?? ""}
                      fill
                      className="object-cover duotone"
                      sizes="(max-width: 1024px) 290px, 50vw"
                    />
                    <span className="absolute left-3.5 top-3.5 lg:left-4 lg:top-4 rounded-full bg-white/[0.94] backdrop-blur-sm px-[11px] py-1.5 lg:px-3 text-[11px] font-bold uppercase tracking-[0.1em] text-accent-hover">
                      {badge}
                    </span>
                  </div>
                )}
                <div className={inverted ? "px-5 py-[22px] lg:px-6 lg:py-7" : "p-5 lg:p-6"}>
                  {inverted && (
                    <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent-ondark mb-2 lg:mb-2.5">
                      {badge}
                    </div>
                  )}
                  <h2 className="font-display text-xl lg:text-[22px] font-extrabold mb-[7px] lg:mb-2">
                    {title}
                  </h2>
                  <p
                    className={`text-[14.5px] lg:text-[15px] leading-relaxed mb-3.5 lg:mb-4 ${
                      inverted ? "text-white/90" : "text-body"
                    }`}
                  >
                    {description}
                  </p>
                  <ul className="flex flex-wrap gap-[7px] lg:gap-2">
                    {chips.map((chip) => (
                      <li
                        key={chip}
                        className={`inline-flex items-center gap-[5px] rounded-full px-[11px] py-1.5 lg:px-3 lg:py-[7px] text-[12.5px] lg:text-[13px] font-semibold ${
                          inverted ? "bg-white/[0.16]" : "bg-surface-alt text-secondary"
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

        <div className="mx-5 lg:mx-0 mt-[22px] lg:mt-5 flex items-start lg:items-center gap-[13px] lg:gap-3.5 rounded-[14px] lg:rounded-2xl bg-surface px-5 py-[18px] lg:px-6 lg:py-[22px]">
          <span
            aria-hidden
            className="flex h-9 w-9 lg:h-[42px] lg:w-[42px] shrink-0 items-center justify-center rounded-[10px] lg:rounded-xl bg-white border border-card-border text-accent text-lg lg:text-xl"
          >
            ☑
          </span>
          <div>
            <p className="font-bold text-ink text-[15px] lg:text-base mb-[3px]">Insurance</p>
            <p className="text-[13.5px] lg:text-[14.5px] text-body leading-normal">
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

      <CtaBand className="pt-6 pb-10 lg:pt-10 lg:pb-20" />
    </>
  );
}
