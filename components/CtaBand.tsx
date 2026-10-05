import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import Button from "@/components/Button";
import { BUSINESS } from "@/lib/business";

interface CtaBandProps {
  heading?: string;
  /** Optional supporting line under the heading. */
  subtext?: ReactNode;
  /** Vertical padding around the band. */
  className?: string;
  /** Booking link; pass /contact?service=<value> to pre-select a service. */
  href?: string;
  /** Adds a call button above "Book a visit". */
  showCall?: boolean;
}

// Accent-filled closing CTA. Mobile: centered stack; desktop: heading left, buttons right.
export default function CtaBand({
  heading = "Ready to see clearly?",
  subtext,
  className = "py-8 lg:py-14",
  href = "/contact",
  showCall = false,
}: CtaBandProps) {
  return (
    <div className={`w-full page-container ${className}`}>
      <div className="bg-accent rounded-2xl lg:rounded-2.5xl px-6 py-7 lg:px-14 lg:py-12 text-white text-center lg:text-left lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div>
          <h2 className="text-2xl lg:text-4xl font-extrabold tracking-normal lg:tracking-tight">
            {heading}
          </h2>
          {subtext && (
            <p className="mt-1.5 text-md lg:text-base text-accent-ondark leading-normal">
              {subtext}
            </p>
          )}
        </div>
        <div className="mt-4.5 lg:mt-0 lg:shrink-0 flex flex-col gap-2.5">
          {showCall && (
            <Button href={BUSINESS.phoneHref} variant="inverse-outline" size="lg" className="w-full">
              <Phone size={16} aria-hidden />
              Call {BUSINESS.phoneDisplay}
            </Button>
          )}
          <Button href={href} variant="inverse" size="lg" className="w-full">
            Book a visit
          </Button>
        </div>
      </div>
    </div>
  );
}
