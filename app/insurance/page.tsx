import type { Metadata } from "next";
import { Phone, ShieldCheck, HelpCircle } from "lucide-react";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import { BUSINESS } from "@/lib/business";
import { faqJsonLd } from "@/lib/schema";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Vision Insurance & Pricing",
  description:
    "Focus Optical in Rochester Hills, MI accepts various insurance plans. Contact us at (248) 852-8830 for details on pricing and insurance coverage for eye exams, glasses, and contact lenses.",
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

const jsonLd = { "@context": "https://schema.org", ...faqJsonLd(faqs) };

export default function InsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page header */}
      <section className="max-w-295 mx-auto px-5 pt-7 pb-6 lg:px-10 lg:pt-14 lg:pb-8">
        <p className="text-accent font-bold text-xs tracking-eyebrow uppercase mb-2.5 lg:mb-3">
          Coverage &amp; costs
        </p>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-ink tracking-tight text-balance">
          Insurance &amp; pricing at our Rochester Hills shop
        </h1>
        <p className="text-md lg:text-lg leading-normal text-body mt-3 lg:mt-4 max-w-155">
          We take most of the common vision plans. Give us a call and we&apos;ll
          check yours.
        </p>
      </section>

      <section className="max-w-295 mx-auto px-5 pb-8 lg:px-10 lg:pb-16">
        <div className="grid sm:grid-cols-2 gap-3.5 lg:gap-5 mb-8 lg:mb-12">
          <div className="rounded-2xl lg:rounded-2.5xl bg-accent-soft p-5 lg:p-8">
            <ShieldCheck className="text-accent mb-3.5 lg:mb-4" size={28} aria-hidden />
            <h2 className="text-lg lg:text-xl font-extrabold text-ink mb-2 lg:mb-3">
              Insurance accepted
            </h2>
            <p className="text-md lg:text-base text-body leading-normal mb-4 lg:mb-5">
              We take a lot of the common vision plans. Give us a call before
              your visit and we&apos;ll make sure yours is covered.
            </p>
            <Button href={BUSINESS.phoneHref} size="sm">
              <Phone size={15} aria-hidden />
              Call {BUSINESS.phoneDisplay}
            </Button>
          </div>

          <div className="rounded-2xl lg:rounded-2.5xl bg-surface p-5 lg:p-8">
            <HelpCircle className="text-body mb-3.5 lg:mb-4" size={28} aria-hidden />
            <h2 className="text-lg lg:text-xl font-extrabold text-ink mb-2 lg:mb-3">
              Pricing questions
            </h2>
            <p className="text-md lg:text-base text-body leading-normal mb-4 lg:mb-5">
              What you pay depends on the exam, the frames, and the lenses you
              pick. We keep it fair and won&apos;t push you toward anything you
              don&apos;t need.
            </p>
            <Button href={BUSINESS.phoneHref} variant="outline" size="sm">
              <Phone size={15} aria-hidden />
              Call for details
            </Button>
          </div>
        </div>

        <h2 className="text-xl lg:text-3xl font-extrabold text-ink tracking-tight mb-4 lg:mb-6">
          Frequently asked questions
        </h2>
        <Faq items={faqs} />
      </section>

      <CtaBand
        heading="Still have questions?"
        subtext="Book a visit and we'll walk through your plan and pricing in person."
        className="pb-10 lg:pb-20"
      />
    </>
  );
}
