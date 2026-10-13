import ActionPanel from "@/components/ActionPanel";
import Button from "@/components/Button";
import { bookingHref } from "@/lib/appointments";
import { PROMO } from "@/lib/promo";

interface OfferCardProps {
  /** Classes for the outer wrapper (width and spacing); nothing renders when no offer is active. */
  className?: string;
}

// Inline panel for the current offer (lib/promo.ts).
export default function OfferCard({ className = "" }: OfferCardProps) {
  if (!PROMO) return null;

  return (
    <aside aria-label="Current offer" className={className}>
      <ActionPanel
        heading={PROMO.title}
        text={`${PROMO.detail} Terms apply.`}
        actions={
          <Button href={bookingHref("retail")} size="lg" className="flex-1 lg:flex-none">
            Book a visit
          </Button>
        }
      />
    </aside>
  );
}
