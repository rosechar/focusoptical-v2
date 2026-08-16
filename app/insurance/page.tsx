import type { Metadata } from "next";
import { Phone, ShieldCheck, HelpCircle } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import { BUSINESS } from "@/lib/business";

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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function InsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Page header */}
      <section className="pt-12 sm:pt-16 pb-8">
        <div className="max-w-295 mx-auto px-5 sm:px-10">
          <p className="text-accent font-semibold text-xs tracking-eyebrow uppercase mb-3">
            Coverage &amp; costs
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">
            Insurance &amp; pricing
          </h1>
          <p className="text-body mt-3 text-lg max-w-xl leading-relaxed">
            We take most of the common vision plans. Give us a call and we&apos;ll
            check yours.
          </p>
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="max-w-295 mx-auto px-5 sm:px-10">
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-12">
            <div className="rounded-2xl bg-accent-soft p-6 sm:p-8">
              <ShieldCheck className="text-accent mb-4" size={28} />
              <h2 className="text-xl font-bold text-ink mb-3">
                Insurance accepted
              </h2>
              <p className="text-body leading-relaxed mb-5">
                We take a lot of the common vision plans. Give us a call before
                your visit and we&apos;ll make sure yours is covered.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                <Phone size={15} />
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>

            <div className="rounded-2xl bg-surface p-6 sm:p-8">
              <HelpCircle className="text-body mb-4" size={28} />
              <h2 className="text-xl font-bold text-ink mb-3">
                Pricing questions
              </h2>
              <p className="text-body leading-relaxed mb-5">
                What you pay depends on the exam, the frames, and the lenses you
                pick. We keep it fair and won&apos;t push you toward anything you
                don&apos;t need.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 border border-field-border text-ink hover:border-accent hover:text-accent font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                <Phone size={15} />
                Call for details
              </a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-extrabold text-ink tracking-tight mb-5">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-hairline p-5 sm:p-6">
                <h3 className="font-semibold text-ink mb-2">{q}</h3>
                <p className="text-body leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Still have questions?"
        subtext="Give us a call and we'll sort it out."
      />
    </>
  );
}
