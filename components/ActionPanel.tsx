import type { ReactNode } from "react";
import Logo from "@/components/Logo";

interface ActionPanelProps {
  heading: ReactNode;
  /** Optional supporting line under the heading. */
  text?: ReactNode;
  /** Buttons. Mobile: a full-width row under the text; desktop: right of the heading. */
  actions: ReactNode;
}

// Soft accent panel with a logo watermark, shared by the offer card and the closing CTA band
// so the two always match.
export default function ActionPanel({ heading, text, actions }: ActionPanelProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl lg:rounded-2.5xl bg-accent-soft px-5 py-6.5 lg:px-12 lg:py-10">
      {/* Oversized logo mark as a watermark; the panel clips it. */}
      <Logo className="pointer-events-none absolute -right-10 -top-6 h-auto w-56 opacity-10 lg:right-auto lg:left-1/2 lg:-top-10 lg:w-96" />
      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div>
          <h2 className="text-2xl lg:text-4xl font-extrabold text-ink tracking-tight">{heading}</h2>
          {text && (
            <p className="mt-1.5 lg:mt-2 text-md lg:text-lg leading-normal text-body">{text}</p>
          )}
        </div>
        <div className="flex gap-2.5 lg:gap-3.25 lg:shrink-0">{actions}</div>
      </div>
    </div>
  );
}
