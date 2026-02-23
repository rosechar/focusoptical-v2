import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Insurance & Pricing",
  description:
    "Focus Optical in Rochester Hills, MI accepts various insurance plans. Contact us at (248) 852-8830 for details on pricing and insurance coverage for eye exams, glasses, and contact lenses.",
  keywords: [
    "optical insurance Rochester Hills MI",
    "eye exam insurance Oakland County",
    "glasses insurance Michigan",
    "vision insurance Rochester Hills",
    "Focus Optical insurance",
  ],
};

const faqs = [
  {
    q: "Do you accept vision insurance?",
    a: "We work with a variety of vision insurance plans. Please call us at (248) 852-8830 to confirm your coverage before your appointment.",
  },
  {
    q: "How do I know what my insurance covers?",
    a: "The best way is to call your insurance provider directly, or give us a call and we can help you understand your benefits.",
  },
  {
    q: "What if I don't have insurance?",
    a: "No problem — we offer competitive pricing and work with patients of all budgets. Call us for current pricing on exams, frames, and lenses.",
  },
  {
    q: "Do you offer payment options?",
    a: "Contact us at (248) 852-8830 to discuss pricing and any available payment arrangements.",
  },
];

export default function InsurancePage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-blue-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-blue-300 font-semibold text-sm tracking-widest uppercase mb-2">
            Coverage &amp; Costs
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Insurance &amp; Pricing
          </h1>
          <p className="text-blue-200 mt-3 text-base sm:text-lg max-w-xl">
            We work with most major vision insurance plans. Call us to verify
            your coverage.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 mb-10 sm:mb-14">
            <div className="rounded-2xl bg-blue-50 p-6 sm:p-8 border border-blue-100">
              <ShieldCheck className="text-blue-600 mb-4" size={28} />
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Insurance Accepted
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5 text-base">
                We accept a variety of vision insurance plans. Please contact
                the shop directly to confirm your specific plan and coverage
                details before your appointment.
              </p>
              <a
                href="tel:+12488528830"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                <Phone size={15} />
                Call (248) 852-8830
              </a>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 sm:p-8 border border-slate-100">
              <HelpCircle className="text-slate-500 mb-4" size={28} />
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Pricing Questions
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5 text-base">
                Pricing varies depending on the type of exam, frames, and
                lenses selected. We offer competitive pricing without
                compromising on quality or service.
              </p>
              <a
                href="tel:+12488528830"
                className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                <Phone size={15} />
                Call for Details
              </a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-xl border border-slate-100 p-5 sm:p-6 bg-white shadow-sm"
              >
                <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{q}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 sm:mt-12 bg-blue-900 rounded-2xl py-8 sm:py-10 px-6 text-white text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Still Have Questions?</h2>
            <p className="text-blue-200 mb-6 text-sm sm:text-base">
              The best way to get pricing and insurance details is to give us a
              call. We&apos;re happy to walk you through your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+12488528830"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
              >
                <Phone size={17} />
                (248) 852-8830
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/15 font-semibold px-7 py-3.5 rounded-full transition-colors"
              >
                Schedule an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
