import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  Crosshair,
  ShoppingBag,
  Wrench,
  Star,
  ChevronRight,
  Phone,
  Award,
  Scissors,
  Shield,
  Gift,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Focus Optical | Optician & Eye Exams — Rochester Hills, MI",
  description:
    "Focus Optical in Rochester Hills, MI — book an eye exam, prescription glasses, contact lenses, and free adjustments. Independently owned since 1984. Serving Oakland County.",
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
};

const services = [
  {
    icon: Eye,
    title: "Eye Exams",
    description:
      "Annual exams with Dr. Diane Galper, Optometrist. Assess your vision and catch changes early.",
    href: "/services#eye-exams",
  },
  {
    icon: Crosshair,
    title: "Contact Lens Exams",
    description:
      "Specialized fitting exam with a full eye exam included — everything you need in one visit.",
    href: "/services#contact-exams",
  },
  {
    icon: ShoppingBag,
    title: "Glasses & Contacts Retail",
    description:
      "Wide selection of frames and contacts, no sales pressure. New lenses can be added to your existing frames.",
    href: "/services#retail",
  },
  {
    icon: Wrench,
    title: "Free Adjustments",
    description:
      "We adjust and clean any glasses for anyone — no charge, no appointment needed.",
    href: "/services#adjustments",
  },
];

const differentiators = [
  {
    icon: Award,
    title: "Attention to Detail",
    description:
      "Tom makes every pair as if they were his own — so you get the best-fitting glasses you've ever owned.",
  },
  {
    icon: Scissors,
    title: "Cut & Edge On Premise",
    description:
      "All lenses are cut and edged in-house for full quality control. No outside labs.",
  },
  {
    icon: Shield,
    title: "No Sales Pressure",
    description:
      "No pressure to buy new frames. Bring your existing pair and we'll cut new lenses while you wait.",
  },
  {
    icon: Gift,
    title: "Free Adjustments",
    description:
      "Free adjustments and cleaning for any glasses, any walk-in — no charge, no questions.",
  },
];

const testimonials = [
  {
    name: "Ed",
    quote: "The owner was very helpful...I'll come here from now on",
    href: "https://g.co/kgs/k2vTVR",
  },
  {
    name: "Emily",
    quote:
      "I have been going here since I was a little girl! Tom is super helpful, and the doc is great! I would recommend this place to everyone.",
    href: "https://g.co/kgs/yiVrZD",
  },
  {
    name: "Erik",
    quote:
      "Tom really helped me out to get a great pair of glasses for a great price!",
    href: "https://g.co/kgs/A64L4m",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Promo Banner */}
      <div className="bg-blue-600 text-white text-center px-4 py-2.5 text-sm font-medium">
        <span className="mr-1">🎉</span>
        <strong>Limited Time: Free Frames with Purchase of Lenses!</strong>
        <a
          href="tel:+12488528830"
          className="ml-2 underline underline-offset-2 hover:text-blue-100 transition-colors whitespace-nowrap"
        >
          Call (248) 852-8830
        </a>
      </div>

      {/* Hero */}
      <section className="relative min-h-[520px] sm:min-h-[580px] flex items-center overflow-hidden bg-slate-900">
        <Image
          src="/images/home.jpeg"
          alt="Focus Optical — Rochester Hills eyeglass shop"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/55 to-slate-900/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-14 sm:py-24 w-full">
          <div className="max-w-2xl">
            <p className="text-blue-400 font-semibold tracking-widest uppercase text-xs mb-3">
              Independently Owned Since 1984
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5">
              Expert Eye Care &<br />
              Eyeglass Craftsmanship
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-7 max-w-xl">
              Full-service optical care in Rochester Hills — eye exams, glasses,
              contacts, and free adjustments. Over 45 years of crafting the
              perfect pair.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+12488528830"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
              >
                <Phone size={18} />
                Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/15 font-semibold px-7 py-3.5 rounded-full transition-colors"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6 sm:mb-10">
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Full-Service Optical Care
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
              Everything you need for healthy vision, all under one roof in
              Rochester Hills.
            </p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory mx-2 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            {services.map(({ icon: Icon, title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="group shrink-0 w-[260px] sm:w-[280px] snap-start p-5 sm:p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-200 bg-white"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Icon className="text-blue-600" size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                    {title}
                  </h3>
                </div>
                <p className="text-base text-slate-500 leading-relaxed">
                  {description}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                  Learn more <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-12 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-14 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <Image
                  src="/images/tom.jpg"
                  alt="Tom Hamilton, owner of Focus Optical in Rochester Hills, MI"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-blue-900 text-white rounded-2xl px-5 py-3 text-center shadow-lg">
                <p className="text-3xl font-bold">45+</p>
                <p className="text-xs text-blue-300 font-medium uppercase tracking-wide">
                  Years Experience
                </p>
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-2">
                About Focus Optical
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                Meet Tom Hamilton,
                <br />
                <span className="text-blue-700">Your Local Optician</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Hello, my name is Tom Hamilton. I&apos;m an optician and I own
                and operate Focus Optical. I opened the store in 1984 and have
                been making eyeglasses since 1977 — over 45 years of experience.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                I always treat every pair of eyeglasses I make as if I were
                making them for myself, guaranteeing you the best-made pair of
                eyeglasses you have ever owned.
              </p>
              <p className="text-slate-600 leading-relaxed mb-7">
                We are a full-service optical store, with eye examinations
                performed by Dr. Diane Galper, Optometrist.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Learn More About Us
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Schedule an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6 sm:mb-10">
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              What Makes Focus Optical Different
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {differentiators.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center shrink-0">
                    <Icon className="text-white" size={18} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {title}
                  </h3>
                </div>
                <p className="text-base text-slate-500 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery strip */}
      <section className="overflow-hidden">
        <div className="flex h-48 sm:h-64 lg:h-72">
          {[
            { src: "/images/shop.jpeg", alt: "Focus Optical shop interior" },
            { src: "/images/glasses1.jpeg", alt: "Eyeglass frames selection" },
            { src: "/images/eye.jpg", alt: "Eye exam at Focus Optical" },
            {
              src: "/images/glasses2.jpeg",
              alt: "Prescription glasses",
              hideMobile: true,
            },
            {
              src: "/images/home3.jpeg",
              alt: "Optical store Rochester Hills",
              hideMobile: true,
            },
          ].map(({ src, alt, hideMobile }) => (
            <div
              key={src}
              className={`relative flex-1 overflow-hidden ${hideMobile ? "hidden sm:block" : ""}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 33vw, 20vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-16 bg-blue-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6 sm:mb-10">
            <p className="text-blue-300 font-semibold text-sm tracking-widest uppercase mb-2">
              Customer Reviews
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What Our Patients Say
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map(({ name, quote, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-white/20 rounded-2xl p-5 sm:p-6 transition-colors border border-white/10 hover:border-white/20"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      fill="currentColor"
                      className="text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-slate-200 leading-relaxed mb-4 text-base">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-white">{name}</p>
                  <span className="text-xs text-blue-300 group-hover:text-blue-200 transition-colors">
                    Google Review ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Ready to See Clearly?
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mb-5 leading-relaxed">
            Schedule your eye exam or visit us at our Rochester Hills location.
            We&apos;re here Monday through Saturday.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-base sm:text-lg transition-colors"
            >
              Schedule an Appointment
            </Link>
            <a
              href="tel:+12488528830"
              className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              <Phone size={18} />
              (248) 852-8830
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
