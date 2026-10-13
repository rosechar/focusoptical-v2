import type { ReactNode } from "react";
import ActionPanel from "@/components/ActionPanel";
import Button from "@/components/Button";
import CallButton from "@/components/CallButton";

interface CtaBandProps {
  heading?: string;
  /** Optional supporting line under the heading. */
  subtext?: ReactNode;
  /** Vertical padding around the band. */
  className?: string;
  /** Booking link; pass bookingHref(<value>) to pre-select a service. */
  href?: string;
  /** Adds a call button beside "Book a visit". */
  showCall?: boolean;
}

// Closing CTA, styled to match the offer card. Mobile: buttons under the text; desktop:
// heading left, buttons right.
export default function CtaBand({
  heading = "Ready to see clearly?",
  subtext,
  className = "py-8 lg:py-14",
  href = "/contact",
  showCall = false,
}: CtaBandProps) {
  return (
    <div className={`w-full page-container ${className}`}>
      <ActionPanel
        heading={heading}
        text={subtext}
        actions={
          <>
            <Button href={href} size="lg" className="flex-1 lg:flex-none">
              Book a visit
            </Button>
            {/* Solid fill so the panel watermark doesn't show through the outline button. */}
            {showCall && <CallButton className="flex-1 lg:flex-none bg-white" />}
          </>
        }
      />
    </div>
  );
}
