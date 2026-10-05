import type { Metadata } from "next";
import { ShieldCheck, HelpCircle } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import { BUSINESS } from "@/lib/business";
import { faqJsonLd } from "@/lib/schema";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Insurance & Pricing | Eye Exam Cost in Rochester Hills, MI",
  description:
    `Focus Optical in Rochester Hills, MI accepts various insurance plans. Contact us at ${BUSINESS.phoneDisplay} for details on pricing and insurance coverage for eye exams, glasses, and contact lenses.`,
  alternates: {
    canonical: "/insurance",
  },
};

const faqs = [
  {
    q: "Do you take vision insurance?",
    a: `We take a lot of the common plans. Call us at ${BUSINESS.phoneDisplay} and we'll check yours before you come in.`,
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
        <p className="eyebrow mb-2.5 lg:mb-3">
          Rochester Hills · Coverage &amp; costs
        </p>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-ink tracking-tight text-balance">
          Insurance &amp; pricing
        </h1>
      </section>

      <section className="page-container grid sm:grid-cols-2 gap-3.5 lg:gap-5">
        <div className="rounded-2xl lg:rounded-2.5xl bg-accent-soft p-5 lg:p-8">
          <ShieldCheck className="text-accent mb-3.5 lg:mb-4" size={28} aria-hidden />
          <h2 className="text-lg lg:text-xl font-extrabold text-ink mb-2 lg:mb-3">
            Insurance accepted
          </h2>
          <p className="text-md lg:text-base text-body leading-normal">
            We take a lot of the common vision plans. Give us a call before
            your visit and we&apos;ll make sure yours is covered.
          </p>
        </div>

        <div className="rounded-2xl lg:rounded-2.5xl bg-surface p-5 lg:p-8">
          <HelpCircle className="text-body mb-3.5 lg:mb-4" size={28} aria-hidden />
          <h2 className="text-lg lg:text-xl font-extrabold text-ink mb-2 lg:mb-3">
            Pricing questions
          </h2>
          <p className="text-md lg:text-base text-body leading-normal">
            What you pay depends on the exam, the frames, and the lenses you
            pick. We keep it fair and won&apos;t push you toward anything you
            don&apos;t need.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Still have questions?"
        subtext="Book a visit and we'll walk through your plan and pricing in person."
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
