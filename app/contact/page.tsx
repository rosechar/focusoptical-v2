import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import { BUSINESS, HOURS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Schedule an Appointment",
  description:
    "Book an eye exam or appointment at Focus Optical in Rochester Hills, MI. Schedule online or call (248) 852-8830. Eye exams, contact lenses, glasses — serving Oakland County since 1984.",
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
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-blue-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-blue-300 font-semibold text-sm tracking-widest uppercase mb-2">
            Book a Visit
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Schedule an Appointment
          </h1>
          <p className="text-blue-200 mt-3 text-base sm:text-lg max-w-xl">
            Fill out the form and we&apos;ll contact you within one business day
            to confirm your appointment.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-8 sm:py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-10">
            {/* Form column */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-slate-100">
                <AppointmentForm />
              </div>
            </div>

            {/* Info column */}
            <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-5">
              {/* Call us card */}
              <div className="bg-blue-900 text-white rounded-2xl p-5 sm:p-6">
                <h3 className="font-bold text-lg mb-1">Prefer to Call?</h3>
                <p className="text-blue-200 text-sm mb-4">
                  We&apos;re happy to schedule your appointment over the phone.
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-2.5 text-white font-bold text-lg sm:text-xl hover:text-blue-200 transition-colors"
                >
                  <Phone size={20} />
                  {BUSINESS.phoneDisplay}
                </a>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="text-blue-600 shrink-0" size={18} />
                  <h3 className="font-bold text-slate-900">Our Location</h3>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
                  {BUSINESS.address.zip}
                </p>
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Get Directions →
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="text-blue-600 shrink-0" size={18} />
                  <h3 className="font-bold text-slate-900">Store Hours</h3>
                </div>
                <ul className="space-y-1.5">
                  {HOURS.map(({ day, display, opens }) => (
                    <li key={day} className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">{day}</span>
                      <span
                        className={`font-medium ${
                          opens ? "text-slate-800" : "text-slate-400"
                        }`}
                      >
                        {display}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Walk-ins note */}
              <div className="bg-blue-50 rounded-2xl p-4 sm:p-5 border border-blue-100">
                <p className="text-sm text-blue-800 leading-relaxed">
                  <strong>Free Adjustments:</strong> Walk-ins welcome for free
                  eyeglass adjustments and cleaning — no appointment needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-64 sm:h-96">
        <iframe
          src={BUSINESS.mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Focus Optical — 2046 W Auburn Rd, Rochester Hills, MI 48309"
        />
      </section>
    </>
  );
}
