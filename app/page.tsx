import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Focus Optical | Optician & Eye Exams in Rochester Hills, MI",
  description:
    "Focus Optical in Rochester Hills, MI. Book an eye exam, prescription glasses, contact lenses, and free adjustments. Family owned since 1984. Serving Oakland County.",
  keywords: [
    "book eye exam Rochester Hills MI",
    "schedule eye exam near me",
    "eye appointment Rochester Hills",
    "optometrist appointment Oakland County",
    "eye exam near Rochester Hills",
    "optician Rochester Hills",
    "glasses shop Rochester Hills",
    "contact lenses Rochester Hills",
    "Focus Optical Rochester Hills",
  ],
  alternates: {
    canonical: "/",
  },
};

const whatWeDo = [
  {
    title: "Eye exams",
    description: "Comprehensive exams with Dr. Galper, OD.",
    image: "/images/tool.jpeg",
    alt: "Eye exam equipment",
  },
  {
    title: "Contact lens exams",
    description: "A proper fitting with a full exam included.",
    image: "/images/contact.jpg",
    alt: "Contact lens fitting",
  },
  {
    title: "Glasses & contacts",
    description: "A wide selection, or re-lens your frames.",
    image: "/images/contact1.jpg",
    alt: "Eyeglass frame selection",
  },
  {
    title: "Free adjustments",
    description: "Any pair, anywhere. No charge, no appointment.",
    image: "/images/glasses3.jpg",
    alt: "Eyeglass adjustment",
  },
];

const why = [
  { title: "Made by hand", description: "Tom makes every pair himself." },
  { title: "Our own lens lab", description: "Cut and edged on site, often next day." },
  { title: "No sales pressure", description: "Keep your frames and we'll re-lens them." },
  { title: "Always free adjustments", description: "Walk in anytime, customer or not." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — mobile/tablet: split card over the photo; desktop: full-bleed photo overlay */}
      <section className="relative pb-6.5 lg:pb-0 lg:h-150 lg:flex lg:items-center lg:bg-dark lg:overflow-hidden">
        <div className="relative h-80 lg:absolute lg:inset-0 lg:h-auto">
          <Image
            src="/images/glasses1.jpeg"
            alt="Eyeglass frames at Focus Optical in Rochester Hills"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover duotone"
          />
          <div className="hidden lg:block absolute inset-0 bg-linear-100 from-dark/90 via-dark/60 via-40% to-dark/0" />
        </div>
        <div className="relative -mt-14.5 mx-4 sm:mx-auto sm:max-w-140 bg-white rounded-2.5xl px-5.5 py-6 shadow-hero lg:mt-0 lg:w-full lg:max-w-295 lg:bg-transparent lg:rounded-none lg:shadow-none lg:px-10 lg:py-0">
          <div className="lg:max-w-145 lg:text-white">
            <p className="text-accent lg:text-white/80 font-bold lg:font-semibold text-xs lg:text-sm tracking-eyebrow uppercase mb-2.5 lg:mb-4.5">
              Rochester Hills · since 1984
            </p>
            <h1 className="text-3xl leading-none tracking-tight lg:text-6xl font-extrabold text-ink lg:text-white mb-2.5 lg:mb-4.5">
              <span className="lg:hidden">Glasses made by hand in Rochester Hills.</span>
              <span className="hidden lg:inline">
                Glasses made by hand, the way they should be.
              </span>
            </h1>
            <p className="text-md leading-normal text-body lg:text-lg lg:text-white/90 mb-4.5 lg:mb-7.5 lg:max-w-120">
              <span className="lg:hidden">
                Tom Hamilton has been making eyeglasses since 1977. Every lens is
                cut in our own lab.
              </span>
              <span className="hidden lg:inline">
                An independent optician making eyeglasses for Rochester Hills for
                over 45 years, with free adjustments for anyone and next-day
                service on most prescriptions.
              </span>
            </p>
            <div className="flex gap-2.5 lg:gap-3.25">
              <Link
                href="/contact"
                className="flex-1 lg:flex-none text-center bg-accent hover:bg-accent-hover text-white font-bold text-md lg:text-base py-3.5 lg:px-7 lg:py-4 rounded-xl transition-colors"
              >
                Book a visit
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 border-1.5 border-field-border text-ink font-bold text-md lg:text-base py-3 lg:px-6.5 lg:py-3.5 rounded-xl hover:border-accent hover:text-accent lg:bg-white/16 lg:border-white/50 lg:text-white lg:backdrop-blur-sm lg:hover:bg-white/25 lg:hover:border-white/50 lg:hover:text-white transition-colors"
              >
                <Phone size={16} className="hidden lg:inline" />
                <span className="lg:hidden">Call us</span>
                <span className="hidden lg:inline">{BUSINESS.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust line */}
      <p className="px-5 py-4.5 lg:px-10 lg:py-5.5 text-center text-sm lg:text-md text-body leading-normal border-b border-hairline-soft">
        Independent and family-run · free adjustments for anyone · next-day
        service on most prescriptions
        <span className="hidden lg:inline"> · exams by Dr. Diane Galper, OD</span>
      </p>

      <ReviewsCarousel />

      {/* What we do */}
      <section className="max-w-295 mx-auto pt-8 pb-3 lg:pt-18 lg:pb-2">
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
        <p className="lg:hidden px-5 mt-1.25 text-sm text-body leading-normal">
          Exams, glasses, contacts and repairs.
        </p>
        <div className="flex gap-3.25 overflow-x-auto snap-x snap-mandatory px-5 pt-4.5 pb-5.5 lg:grid lg:grid-cols-4 lg:gap-4.5 lg:px-10 lg:pt-0 lg:pb-0 lg:overflow-visible">
          {whatWeDo.map(({ title, description, image, alt }) => (
            <Link
              key={title}
              href="/services"
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
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Focus Optical */}
      <section className="bg-surface lg:mt-18">
        <div className="max-w-295 mx-auto px-5 py-8.5 lg:px-10 lg:py-16 lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">
          <div>
            <p className="text-accent font-bold text-xs tracking-eyebrow uppercase mb-2.5 lg:mb-3.5">
              Why Focus Optical
            </p>
            <h2 className="text-2xl leading-tight lg:text-4xl font-extrabold text-ink tracking-tight mb-1.5 lg:mb-3">
              <span className="lg:hidden">
                Tom cuts every lens{" "}
                <span className="text-accent">himself, at the bench.</span>
              </span>
              <span className="hidden lg:inline">
                Not a chain. Not a lab order.{" "}
                <span className="text-accent">A real optician at the bench.</span>
              </span>
            </h2>
            <p className="text-sm lg:text-base leading-normal lg:leading-relaxed text-body mb-6 lg:mb-0">
              Forty-five years of practice, and it shows in the fit.
            </p>
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
        <section className="order-2 lg:order-1 max-w-295 w-full mx-auto px-5 pt-4.5 pb-10 lg:px-10 lg:py-18">
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
                opened Focus Optical in 1984. Getting the fit right is a bit of a
                lost art, and it&apos;s the part I like most.
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
                I opened Focus Optical in 1984. I cut and edge every lens in-house
                and treat each pair as if I were making it for myself. Getting the
                fit right is a bit of a lost art, and it&apos;s the part I like
                most.
              </p>
              <Link
                href="/about"
                className="inline-block border-1.5 border-accent text-accent hover:bg-accent-soft font-bold text-md px-6 py-3.25 rounded-xl transition-colors"
              >
                More about us →
              </Link>
            </div>
          </div>
        </section>

        <CtaBand className="order-1 lg:order-2 pt-7.5 pb-3 lg:pt-0 lg:pb-20" />
      </div>
    </>
  );
}
