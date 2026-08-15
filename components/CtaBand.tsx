import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

interface CtaBandProps {
  heading?: string;
  /** Shown at all sizes when provided; the default line only appears on desktop. */
  subtext?: string;
  /** Vertical padding around the band. */
  className?: string;
}

// Accent-filled closing CTA. Mobile: centered stack with an "or call" link.
// Desktop: heading + subline left, "Book a visit" + phone button right.
export default function CtaBand({
  heading = "Ready to see clearly?",
  subtext,
  className = "py-8 lg:py-14",
}: CtaBandProps) {
  return (
    <div className={`max-w-[1180px] mx-auto px-5 lg:px-10 ${className}`}>
      <div className="bg-accent rounded-2xl lg:rounded-[20px] px-6 py-7 lg:px-14 lg:py-12 text-white text-center lg:text-left lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div>
          <h2 className="font-display text-[23px] lg:text-4xl font-extrabold tracking-[-0.01em] lg:tracking-[-0.02em]">
            {heading}
          </h2>
          <p
            className={`mt-1.5 text-[15px] lg:text-[17px] text-accent-ondark leading-normal ${
              subtext ? "" : "hidden lg:block"
            }`}
          >
            {subtext ?? "Mon–Sat · walk-ins always welcome."}
          </p>
        </div>
        <div className="mt-[18px] lg:mt-0 lg:shrink-0 lg:flex lg:items-center lg:gap-[13px]">
          <Link
            href="/contact"
            className="block w-full lg:w-auto bg-white text-accent hover:bg-accent-soft font-bold text-[15.5px] lg:text-base py-3.5 lg:px-[30px] lg:py-4 rounded-[11px] lg:rounded-xl transition-colors"
          >
            Book a visit
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="block mt-[9px] lg:mt-0 lg:inline-flex lg:items-center lg:gap-2 text-white font-bold text-[15px] lg:text-base lg:bg-white/[0.16] lg:border-[1.5px] lg:border-white/55 lg:px-[26px] lg:py-3.5 lg:rounded-xl hover:text-accent-ondark lg:hover:text-white lg:hover:bg-white/25 transition-colors"
          >
            <Phone size={16} className="hidden lg:inline" />
            <span className="lg:hidden">or call {BUSINESS.phoneDisplay}</span>
            <span className="hidden lg:inline">{BUSINESS.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
