"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { GOOGLE_REVIEWS } from "@/lib/business";
import { REVIEWS } from "@/lib/reviews";
import StarChart from "@/components/StarChart";

const ROTATE_MS = 6000;

// One review at a time beside a "5 STAR SERVICE" eye chart, auto-advancing every 6s.
// Picking a dot restarts the timer. Rotation pauses while hovered or focused, when the
// visitor presses pause, or under reduced motion.
export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [engaged, setEngaged] = useState(false);

  useEffect(() => {
    if (paused || engaged) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % REVIEWS.length),
      ROTATE_MS,
    );
    return () => clearTimeout(id);
  }, [index, paused, engaged]);

  return (
    <section
      aria-label="Patient reviews"
      aria-roledescription="carousel"
      onMouseEnter={() => setEngaged(true)}
      onMouseLeave={() => setEngaged(false)}
      onFocus={() => setEngaged(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setEngaged(false);
      }}
      className="page-container pb-10 lg:pb-16"
    >
      <div className="mx-auto flex max-w-lg flex-col items-center gap-5 rounded-2xl border border-hairline bg-white px-5 py-7 text-center shadow-card lg:max-w-none lg:flex-row lg:gap-12 lg:rounded-2.5xl lg:px-12 lg:py-10 lg:text-left">
        <h2 className="flex flex-col justify-center lg:w-72 lg:shrink-0 lg:self-stretch lg:border-r lg:border-hairline lg:pr-12">
          <StarChart size="lg" />
        </h2>

        <div className="flex w-full flex-col items-center gap-5 lg:min-w-0 lg:flex-1 lg:items-start lg:gap-4">
          <p className="hidden eyebrow lg:block">What our customers say</p>

          {/* Every quote occupies the same grid cell so the card keeps the height of the longest one. */}
          <div
            className="grid w-full items-center"
            aria-live={paused || engaged ? "polite" : "off"}
          >
            {REVIEWS.map((r, i) => (
              <blockquote
                key={r.name}
                aria-hidden={i !== index}
                className={`col-start-1 row-start-1 flex flex-col gap-3 transition-all duration-300 ${
                  i === index ? "delay-300 motion-reduce:delay-0" : "invisible opacity-0"
                }`}
              >
                <p className="font-display text-base leading-snug font-medium text-ink text-pretty lg:text-2xl">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <footer className="text-sm font-bold text-body lg:text-md">
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    tabIndex={i === index ? undefined : -1}
                    className="hover:text-accent transition-colors"
                  >
                    {r.name}
                  </a>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="flex w-full flex-col items-center gap-5 lg:mt-1 lg:flex-row lg:justify-between">
            <div className="flex items-center lg:-ml-1.75">
              <div className="flex items-center" role="group" aria-label="Choose review">
                {REVIEWS.map((r, i) => (
                  // 24px-tall hit area around a small visual dot; the padding doubles as the gap.
                  <button
                    key={r.name}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show review from ${r.name}`}
                    aria-current={i === index ? "true" : undefined}
                    className="group flex h-6 items-center rounded-full px-1.75"
                  >
                    <span
                      aria-hidden
                      className={`block h-2 rounded-full transition-all duration-300 ${
                        i === index ? "w-7 bg-accent" : "w-2 bg-field-border group-hover:bg-accent"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-pressed={paused}
                aria-label={paused ? "Resume automatic rotation" : "Pause automatic rotation"}
                className="ml-0.75 flex size-11 items-center justify-center rounded-full border-1.5 border-field-border text-body hover:border-accent hover:text-accent transition-colors lg:size-8"
              >
                {paused ? (
                  <Play size={12} fill="currentColor" aria-hidden />
                ) : (
                  <Pause size={12} fill="currentColor" aria-hidden />
                )}
              </button>
            </div>

            <a
              href={GOOGLE_REVIEWS.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-chart text-md font-black uppercase text-accent hover:text-accent-hover transition-colors lg:text-lg"
            >
              <span className="spaced-chart">
                Rate us<span className="sr-only"> on Google</span>
              </span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
