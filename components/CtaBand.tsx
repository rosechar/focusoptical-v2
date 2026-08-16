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
    <div className={`max-w-295 mx-auto px-5 lg:px-10 ${className}`}>
      <div className="bg-accent rounded-2xl lg:rounded-2.5xl px-6 py-7 lg:px-14 lg:py-12 text-white text-center lg:text-left lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div>
          <h2 className="text-2xl lg:text-4xl font-extrabold tracking-normal lg:tracking-tight">
            {heading}
          </h2>
          <p
            className={`mt-1.5 text-md lg:text-base text-accent-ondark leading-normal ${
              subtext ? "" : "hidden lg:block"
            }`}
          >
            {subtext ?? "Mon–Sat · walk-ins always welcome."}
          </p>
        </div>
        <div className="mt-4.5 lg:mt-0 lg:shrink-0 lg:flex lg:items-center lg:gap-3.25">
          <Link
            href="/contact"
            className="block w-full lg:w-auto bg-white text-accent hover:bg-accent-soft font-bold text-md lg:text-base py-3.5 lg:px-7.5 lg:py-4 rounded-xl transition-colors"
          >
            Book a visit
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="block mt-2.25 lg:mt-0 lg:inline-flex lg:items-center lg:gap-2 text-white font-bold text-md lg:text-base lg:bg-white/16 lg:border-1.5 lg:border-white/55 lg:px-6.5 lg:py-3.5 lg:rounded-xl hover:text-accent-ondark lg:hover:text-white lg:hover:bg-white/25 transition-colors"
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
