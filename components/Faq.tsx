import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqProps {
  items: readonly FaqItem[];
  /** Layout classes for the list wrapper (e.g. a two-column grid on desktop). */
  className?: string;
}

// Native <details> accordion: no JS, keyboard accessible, and the answer text stays in the DOM for search.
export default function Faq({ items, className = "flex flex-col gap-3" }: FaqProps) {
  return (
    <div className={className}>
      {items.map(({ q, a }) => (
        <details
          key={q}
          className="group rounded-2xl border border-hairline bg-white open:border-accent transition-colors"
        >
          <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <h3 className="flex items-center justify-between gap-4 p-5 lg:p-6 font-sans font-bold text-ink text-md lg:text-base">
              {q}
              <ChevronDown
                size={18}
                className="shrink-0 text-accent transition-transform group-open:rotate-180"
                aria-hidden
              />
            </h3>
          </summary>
          <p className="px-5 pb-5 lg:px-6 lg:pb-6 -mt-1 text-sm lg:text-md text-body leading-relaxed">
            {a}
          </p>
        </details>
      ))}
    </div>
  );
}
