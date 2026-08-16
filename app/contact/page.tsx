import type { Metadata } from "next";
import { Phone } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import MapEmbed from "@/components/MapEmbed";
import OpenStatus from "@/components/OpenStatus";
import { BUSINESS, HOURS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Book a Visit",
  description:
    "Book an eye exam or appointment at Focus Optical in Rochester Hills, MI. Schedule online or call (248) 852-8830. Eye exams, contact lenses, glasses. Serving Oakland County since 1984.",
  alternates: {
    canonical: "/contact",
  },
};

function Hours() {
  return (
    <>
      <h2 className="text-sm font-extrabold uppercase tracking-widest text-ink mb-1.5">
        Hours
      </h2>
      <p className="text-md text-body mb-3 lg:mb-3.5">
        <OpenStatus className="text-secondary" />
      </p>
      <ul className="flex flex-col gap-2 lg:gap-2.25 text-md">
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
      <MapEmbed className="h-52.5 lg:h-80" />

      <section className="max-w-295 mx-auto px-5 pt-6.5 pb-10 lg:px-10 lg:pt-14 lg:pb-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-ink tracking-tight mb-1.5 lg:mb-2">
              Book a visit
            </h1>
            <p className="text-md lg:text-lg leading-normal text-body mb-5.5 lg:mb-6.5">
              Send a request and we&apos;ll call to confirm, usually the same day.
            </p>
            <AppointmentForm />

            <div className="lg:hidden mt-7 border-t border-hairline-soft pt-5.5">
              <Hours />
            </div>
          </div>

          <div className="hidden lg:block rounded-2.5xl bg-surface p-7">
            <h2 className="text-sm font-extrabold uppercase tracking-widest text-ink mb-4.5">
              Visit &amp; call
            </h2>
            <a href={BUSINESS.phoneHref} className="group flex items-center gap-3.5 mb-4">
              <span className="flex h-11.5 w-11.5 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Phone size={20} />
              </span>
              <span>
                <span className="block text-sm text-body">Call us</span>
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
                className="flex h-11.5 w-11.5 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent text-xl"
              >
                ◎
              </span>
              <span>
                <span className="block text-sm text-body">Visit us</span>
                <span className="text-base font-bold text-ink group-hover:text-accent transition-colors">
                  {BUSINESS.address.street}, {BUSINESS.address.city}
                </span>
              </span>
            </a>

            <div className="mt-6 border-t border-hairline pt-5.5">
              <Hours />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
