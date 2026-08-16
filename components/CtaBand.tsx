import Link from "next/link";

interface CtaBandProps {
  heading?: string;
  /** Optional supporting line under the heading. */
  subtext?: string;
  /** Vertical padding around the band. */
  className?: string;
}

// Accent-filled closing CTA. Mobile: centered stack; desktop: heading left, "Book a visit" right.
export default function CtaBand({
  heading = "Ready to see clearly?",
  subtext,
  className = "py-8 lg:py-14",
}: CtaBandProps) {
  return (
    <div className={`w-full max-w-295 mx-auto px-5 lg:px-10 ${className}`}>
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
        <Link
          href="/contact"
          className="block mt-4.5 lg:mt-0 lg:shrink-0 w-full lg:w-auto bg-white text-accent hover:bg-accent-soft font-bold text-md lg:text-base py-3.5 lg:px-7.5 lg:py-4 rounded-xl transition-colors"
        >
          Book a visit
        </Link>
      </div>
    </div>
  );
}
