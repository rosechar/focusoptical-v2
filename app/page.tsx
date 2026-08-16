import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS, GOOGLE_REVIEWS } from "@/lib/business";
import { SERVICES } from "@/lib/services";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import OpenStatus from "@/components/OpenStatus";

export const metadata: Metadata = {
  title: "Focus Optical | Optician & Eye Exams in Rochester Hills, MI",
  description:
    "Focus Optical in Rochester Hills, MI. Book an eye exam, prescription glasses, contact lenses, and free adjustments. Family owned since 1984. Serving Oakland County.",
  alternates: {
    canonical: "/",
  },
};

const why = [
  { title: "Made by hand", description: "Tom makes every pair himself." },
  {
    title: "Our own lens lab",
    description: "Cut and edged on site, often next day.",
  },
  {
    title: "No sales pressure",
    description: "Keep your frames and we'll re-lens them.",
  },
  {
    title: "Free adjustments",
    description: "Walk in anytime, customer or not.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — photo band with the white card overlapping its bottom edge, plus rating and turnaround tiles */}
      <section className="pb-6.5 lg:pb-6">
        <div className="relative h-80 lg:h-115 lg:bg-dark">
          <Image
            src="/images/glasses1.jpeg"
            alt="Eyeglass frames at Focus Optical in Rochester Hills"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover duotone"
          />
          <div className="hidden lg:block absolute inset-0 bg-linear-to-b from-dark/0 via-dark/0 to-dark/30" />
        </div>
        <div className="lg:max-w-295 lg:mx-auto lg:px-10 lg:flex lg:items-stretch lg:gap-5 lg:-mt-44">
          <div className="relative -mt-14.5 mx-4 sm:mx-auto sm:max-w-140 bg-white rounded-2.5xl px-5.5 py-6 shadow-hero lg:mt-0 lg:mx-0 lg:max-w-none lg:flex-1 lg:px-11 lg:py-10">
            <p className="text-accent font-bold text-xs tracking-eyebrow uppercase mb-2.5 lg:mb-4">
              Rochester Hills · since 1984
            </p>
            <h1 className="text-3xl leading-none tracking-tight lg:text-5xl font-extrabold text-ink mb-2.5 lg:mb-5 text-balance">
              Glasses made by hand in Rochester Hills.
            </h1>
            <p className="text-md leading-normal text-body lg:text-lg lg:leading-relaxed mb-4.5 lg:mb-8 lg:max-w-135">
              Stop by for your annual eye exam, new glasses, or contacts.
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
                <Phone size={16} className="hidden lg:inline" />
                <span className="lg:hidden">Call us</span>
                <span className="hidden lg:inline">{BUSINESS.phoneDisplay}</span>
              </Button>
            </div>
          </div>

          {/* Fact tiles — stacked full-width under the card on mobile, a column beside it on desktop */}
          <div className="relative mx-4 mt-3.5 flex flex-col gap-2.5 sm:mx-auto sm:max-w-140 lg:mt-0 lg:mx-0 lg:max-w-none lg:gap-5 lg:w-105 lg:shrink-0 lg:self-center">
            <a
              href={GOOGLE_REVIEWS.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center justify-center gap-3 lg:flex-col lg:gap-1.5 rounded-2xl lg:rounded-2.5xl bg-white border border-hairline lg:border-0 shadow-card lg:shadow-hero px-4 py-3.5 lg:px-8 lg:py-6 text-center hover:border-accent lg:hover:bg-accent-soft transition-colors"
              aria-label={`${GOOGLE_REVIEWS.rating} stars from ${GOOGLE_REVIEWS.count} Google reviews (opens Google Maps)`}
            >
              <span className="font-display text-xl lg:text-4xl font-extrabold text-ink leading-none">
                {GOOGLE_REVIEWS.rating}
              </span>
              <span aria-hidden className="text-gold text-base lg:text-2xl tracking-eyebrow leading-none">
                ★★★★★
              </span>
              <span className="text-xs lg:text-md text-body">{GOOGLE_REVIEWS.count} Google reviews</span>
            </a>
            <div className="flex items-center justify-center gap-5 lg:gap-6 rounded-2xl lg:rounded-2.5xl bg-accent text-white px-4 py-3.5 lg:px-7 lg:py-6 lg:shadow-hero whitespace-nowrap">
              <div>
                <div className="font-display text-md lg:text-xl font-extrabold leading-none">Next-day</div>
                <div className="text-xs lg:text-sm text-accent-ondark mt-1 lg:mt-1.5">on most prescriptions</div>
              </div>
              <div className="h-8 lg:h-10 w-px bg-white/25" aria-hidden />
              <div>
                <div className="font-display text-md lg:text-xl font-extrabold leading-none">Free adjustments</div>
                <div className="text-xs lg:text-sm text-accent-ondark mt-1 lg:mt-1.5">always</div>
              </div>
            </div>
            <p className="lg:hidden text-center text-xs text-body mt-1">
              <OpenStatus className="text-secondary" /> ·{" "}
              <Link href="/contact" className="font-semibold text-accent">
                Hours &amp; directions
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="max-w-295 mx-auto pt-8 pb-8 lg:pt-18 lg:pb-16">
        <div className="px-5 lg:px-10 flex items-baseline lg:items-end justify-between lg:mb-7">
          <div>
            <h2 className="text-xl lg:text-4xl font-extrabold text-ink tracking-normal lg:tracking-tight lg:mb-1.5">
              What we do
            </h2>
            <p className="hidden lg:block text-base text-body leading-normal">
              Full-service optical care, all in one stop.
            </p>
          </div>
          <Link
            href="/services"
            className="text-sm lg:text-md font-bold text-accent hover:text-accent-hover transition-colors"
          >
            See all<span className="hidden lg:inline"> services</span> →
          </Link>
        </div>
        <div className="flex gap-3.25 overflow-x-auto snap-x snap-mandatory scroll-pl-5 scrollbar-visible px-5 pt-4.5 pb-5.5 lg:grid lg:grid-cols-4 lg:gap-4.5 lg:px-10 lg:pt-0 lg:pb-0 lg:overflow-visible">
          {SERVICES.map(({ id, title, summary, image, alt }) => (
            <Link
              key={id}
              href={`/services#${id}`}
              className="shrink-0 w-43 lg:w-auto snap-start rounded-2xl border border-hairline bg-white overflow-hidden lg:shadow-card hover:border-accent transition-colors"
            >
              <div className="relative h-29 lg:h-37.5">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  quality={70}
                  className="object-cover duotone"
                  sizes="(max-width: 1024px) 172px, 25vw"
                />
              </div>
              <div className="px-3.5 pt-3.25 pb-4 lg:px-4.5 lg:pt-4.5 lg:pb-5.5">
                <h3 className="text-md lg:text-base font-bold text-ink mb-0.75 lg:mb-1">
                  {title}
                </h3>
                <p className="text-sm text-body leading-snug lg:leading-normal">
                  {summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ReviewsCarousel />

      {/* Why Focus Optical */}
      <section className="bg-surface lg:mt-18">
        <div className="max-w-295 mx-auto px-5 py-8.5 lg:px-10 lg:py-16 lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">
          <div>
            <p className="text-accent font-bold text-xs tracking-eyebrow uppercase mb-2.5 lg:mb-3.5">
              Why Focus Optical
            </p>
            <h2 className="text-2xl leading-tight lg:text-4xl font-extrabold text-ink tracking-tight mb-2 lg:mb-3">
              Forty-five years of practice,{" "}
              <span className="text-accent">and it shows in the fit.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:gap-3.5">
            {why.map(({ title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white border border-card-border px-4 py-4.5 lg:px-5 lg:py-5.5"
              >
                <div className="h-0.75 w-7.5 lg:w-8 rounded-lg bg-accent mb-3.25 lg:mb-3.5" />
                <h3 className="text-md lg:text-base font-bold text-ink mb-1.25 lg:mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-body leading-normal">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA + Owner: CTA first on mobile, owner first on desktop */}
      <div className="flex flex-col">
        <section className="order-2 lg:order-1 bg-accent-soft lg:bg-transparent">
          <div className="max-w-295 mx-auto px-5 py-8 lg:px-10 lg:py-18">
          {/* Mobile: avatar + short note */}
          <div className="lg:hidden flex gap-4 items-start">
            <div className="relative h-17 w-17 shrink-0 rounded-full overflow-hidden">
              <Image
                src="/images/tom.jpg"
                alt="Tom Hamilton"
                fill
                className="object-cover duotone"
                sizes="68px"
              />
            </div>
            <div>
              <p className="text-md leading-normal text-secondary mb-2">
                Hi, I&apos;m Tom. I&apos;ve made glasses by hand since 1977 and
                opened Focus Optical in 1984. Getting the fit right is a bit of
                a lost art, and it&apos;s the part I like most.
              </p>
              <Link
                href="/about"
                className="text-sm font-bold text-accent hover:text-accent-hover transition-colors"
              >
                More about us →
              </Link>
            </div>
          </div>

          {/* Desktop: portrait + heading */}
          <div className="hidden lg:grid grid-cols-2 gap-14 items-center">
            <div className="relative h-105 rounded-2.5xl overflow-hidden">
              <Image
                src="/images/tom.jpg"
                alt="Tom Hamilton, owner of Focus Optical"
                fill
                className="object-cover duotone"
                sizes="(max-width: 1180px) 40vw, 470px"
              />
            </div>
            <div>
              <p className="text-accent font-bold text-xs tracking-eyebrow uppercase mb-3.5">
                Meet your optician
              </p>
              <h2 className="text-4xl font-extrabold text-ink tracking-tight mb-4.5">
                Tom Hamilton has made glasses by hand since 1977.
              </h2>
              <p className="text-base leading-relaxed text-secondary mb-4">
                I opened Focus Optical in 1984. I cut and edge every lens
                in-house and treat each pair as if I were making it for myself.
                Getting the fit right is a bit of a lost art, and it&apos;s the
                part I like most.
              </p>
              <Button href="/about" variant="accent-outline">
                More about us →
              </Button>
            </div>
          </div>
          </div>
        </section>

        <CtaBand className="order-1 lg:order-2 pt-7.5 pb-3 lg:pt-0 lg:pb-20" />
      </div>
    </>
  );
}
