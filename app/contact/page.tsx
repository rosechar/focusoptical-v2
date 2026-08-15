import type { Metadata } from "next";
import { Phone } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import MapEmbed from "@/components/MapEmbed";
import { BUSINESS, HOURS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Book a Visit",
  description:
    "Book an eye exam or appointment at Focus Optical in Rochester Hills, MI. Schedule online or call (248) 852-8830. Eye exams, contact lenses, glasses. Serving Oakland County since 1984.",
  keywords: [
    "schedule eye exam Rochester Hills",
    "book eye exam near me",
    "eye appointment Rochester Hills MI",
    "book appointment optician Rochester Hills MI",
    "eye exam appointment Oakland County",
    "optometrist appointment near me",
    "schedule eye appointment Michigan",
    "contact Focus Optical Rochester Hills",
    "optician appointment near me",
    "request eye exam appointment",
  ],
  alternates: {
    canonical: "/contact",
  },
};

function Hours() {
  return (
    <>
      <h2 className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-ink mb-3 lg:mb-3.5">
        Hours
      </h2>
      <ul className="flex flex-col gap-2 lg:gap-[9px] text-[15px] lg:text-[15.5px]">
        {HOURS.map(({ day, display, opens }) => (
          <li key={day} className="flex justify-between gap-3">
            <span className="text-body">{day}</span>
            <span className={`font-semibold ${opens ? "" : "text-closed"}`}>{display}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function ContactPage() {
  return (
    <>
      <MapEmbed className="h-[210px] lg:h-80" />

      <section className="max-w-[1180px] mx-auto px-5 pt-[26px] pb-10 lg:px-10 lg:pt-14 lg:pb-20">
        <div className="lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:items-start">
          <div>
            <h1 className="font-display text-[30px] lg:text-[44px] font-extrabold text-ink tracking-[-0.02em] lg:tracking-[-0.03em] mb-1.5 lg:mb-2">
              Book a visit
            </h1>
            <p className="text-[15.5px] lg:text-lg leading-[1.55] text-body mb-[22px] lg:mb-[26px]">
              Send a request and we&apos;ll call to confirm, usually the same day.
              <span className="hidden lg:inline"> Walk-ins are always welcome too.</span>
            </p>

            <AppointmentForm />

            <a
              href={BUSINESS.phoneHref}
              className="lg:hidden mt-3.5 flex items-center justify-center gap-[9px] border-[1.5px] border-field-border text-ink font-bold text-[15.5px] py-3.5 rounded-[11px] hover:border-accent hover:text-accent transition-colors"
            >
              Call {BUSINESS.phoneDisplay}
            </a>

            <div className="lg:hidden mt-7 border-t border-hairline-soft pt-[22px]">
              <Hours />
            </div>
          </div>

          <div className="hidden lg:block rounded-[20px] bg-surface p-7">
            <h2 className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-ink mb-[18px]">
              Visit &amp; call
            </h2>
            <a href={BUSINESS.phoneHref} className="group flex items-center gap-3.5 mb-4">
              <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Phone size={20} />
              </span>
              <span>
                <span className="block text-[13px] text-body">Call us</span>
                <span className="text-lg font-bold text-ink group-hover:text-accent transition-colors">
                  {BUSINESS.phoneDisplay}
                </span>
              </span>
            </a>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3.5"
            >
              <span
                aria-hidden
                className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent text-xl"
              >
                ◎
              </span>
              <span>
                <span className="block text-[13px] text-body">Visit us</span>
                <span className="text-base font-bold text-ink group-hover:text-accent transition-colors">
                  {BUSINESS.address.street}, {BUSINESS.address.city}
                </span>
              </span>
            </a>

            <div className="mt-6 border-t border-[#e6e9e9] pt-[22px]">
              <Hours />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
