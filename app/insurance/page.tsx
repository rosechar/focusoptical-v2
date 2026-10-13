import type { Metadata } from "next";
import { ShieldCheck, HelpCircle } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import { BUSINESS, INSURANCE_PLANS, INSURANCE_PLANS_TEXT } from "@/lib/business";
import { faqJsonLd } from "@/lib/schema";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "EyeMed, VSP & Vision Insurance Accepted | Rochester Hills, MI",
  description:
    `Focus Optical in Rochester Hills, MI accepts ${INSURANCE_PLANS_TEXT}. Call ${BUSINESS.phoneDisplay}.`,
  alternates: {
    canonical: "/insurance",
  },
};

const faqs = [
  {
    q: "Do you take vision insurance?",
    a: `Yes. We accept ${INSURANCE_PLANS_TEXT}. Call us at ${BUSINESS.phoneDisplay} and we'll check yours before you come in.`,
  },
  {
    q: "How do I know what my insurance covers?",
    a: "Call your insurance company, or call us and we'll help you figure out what you've got.",
  },
  {
    q: "What if I don't have insurance?",
    a: "That's fine, plenty of our customers pay out of pocket. Call and we'll go over what exams, frames, and lenses run.",
  },
  {
    q: "Do you offer payment options?",
    a: `Give us a call at ${BUSINESS.phoneDisplay} and we'll talk through pricing and what works for you.`,
  },
];

export default function InsurancePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />

      {/* Page header */}
      <section className="page-container pt-7 pb-6 lg:pt-14 lg:pb-8">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-ink tracking-tight text-balance">
          Insurance &amp; pricing
        </h1>
      </section>

      <section className="page-container grid sm:grid-cols-2 gap-3.5 lg:gap-5">
        <div className="rounded-2xl lg:rounded-2.5xl bg-accent-soft p-5 lg:p-8">
          <h2 className="flex items-center gap-2.5 text-lg lg:text-xl font-extrabold text-ink mb-3 lg:mb-4">
            <ShieldCheck className="text-accent shrink-0" size={24} aria-hidden />
            Insurance accepted
          </h2>
          <ul className="flex flex-wrap gap-2 mb-3 lg:mb-4">
            {INSURANCE_PLANS.map((plan) => (
              <li
                key={plan}
                className="rounded-full bg-white px-3 py-1 text-sm lg:text-md font-bold text-ink"
              >
                {plan}
              </li>
            ))}
          </ul>
          <p className="text-md lg:text-base text-body leading-normal">
            Plus most other vision plans. Don&apos;t see yours? Give us a call
            before your visit and we&apos;ll make sure it&apos;s covered.
          </p>
        </div>

        <div className="rounded-2xl lg:rounded-2.5xl bg-surface p-5 lg:p-8">
          <h2 className="flex items-center gap-2.5 text-lg lg:text-xl font-extrabold text-ink mb-3 lg:mb-4">
            <HelpCircle className="text-body shrink-0" size={24} aria-hidden />
            Pricing questions
          </h2>
          <p className="text-md lg:text-base text-body leading-normal">
            Cost depends on the exam, frames, and lenses you choose. Fair
            prices, no pressure.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Still have questions?"
        showCall
        className="py-8 lg:py-12"
      />

      <section className="page-container pb-10 lg:pb-20">
        <h2 className="text-xl lg:text-3xl font-extrabold text-ink tracking-tight mb-4 lg:mb-6">
          Frequently asked questions
        </h2>
        <Faq items={faqs} />
      </section>
    </>
  );
}
