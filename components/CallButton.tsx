import { Phone } from "lucide-react";
import Button from "@/components/Button";
import { BUSINESS } from "@/lib/business";

// Full class strings so Tailwind can see them.
const LABEL = {
  sm: { short: "sm:hidden", wide: "hidden sm:inline" },
  lg: { short: "lg:hidden", wide: "hidden lg:inline" },
} as const;

interface CallButtonProps {
  /** Width at which "Call us" becomes the phone number with an icon. */
  breakpoint?: keyof typeof LABEL;
  className?: string;
}

/** Large tel: button that sits beside a booking button: "Call us" on mobile, the number on wider screens. */
export default function CallButton({ breakpoint = "lg", className }: CallButtonProps) {
  const { short, wide } = LABEL[breakpoint];
  return (
    <Button href={BUSINESS.phoneHref} variant="outline" size="lg" className={className}>
      <Phone size={16} className={wide} aria-hidden />
      <span className={short}>Call us</span>
      <span className={wide}>{BUSINESS.phoneDisplay}</span>
    </Button>
  );
}
