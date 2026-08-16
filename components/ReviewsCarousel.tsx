"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { REVIEWS } from "@/lib/reviews";

const ROTATE_MS = 5500;

// One review at a time, auto-advancing every 5.5s, with a dot pager. Rotation pauses
// while hovered or focused, when the visitor presses pause, or under reduced motion.
export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [engaged, setEngaged] = useState(false);

  useEffect(() => {
    if (paused || engaged) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % REVIEWS.length),
      ROTATE_MS,
    );
    return () => clearInterval(id);
  }, [paused, engaged]);

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
      className="bg-accent-soft px-6.5 py-10 lg:px-10 lg:py-16 text-center"
    >
      <p className="hidden lg:block text-accent font-bold text-xs tracking-eyebrow uppercase mb-7.5">
        What our patients say
      </p>

      <div aria-hidden className="text-gold text-base lg:text-lg tracking-eyebrow mb-4 lg:mb-4.5">
        ★★★★★
      </div>

      {/* Every quote occupies the same grid cell so the section keeps the height of the longest one. */}
      <div className="max-w-190 mx-auto grid items-center" aria-live="polite">
        {REVIEWS.map((r, i) => (
          <blockquote
            key={r.name}
            aria-hidden={i !== index}
            className={`col-start-1 row-start-1 ${i === index ? "animate-fade-up" : "invisible"}`}
          >
            <p className="font-display text-xl leading-snug lg:text-2xl lg:tracking-normal font-semibold text-ink mb-4 lg:mb-4.5">
              &ldquo;{r.quote}&rdquo;
            </p>
            <footer className="text-sm lg:text-md font-bold text-accent">
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                tabIndex={i === index ? undefined : -1}
                className="hover:text-accent-hover transition-colors"
              >
                {r.name} · Google review
              </a>
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="flex items-center justify-center gap-1 mt-3.5 lg:mt-4.5">
        <div className="flex items-center" role="group" aria-label="Choose review">
          {REVIEWS.map((r, i) => (
            // 24px hit area around a small visual dot.
            <button
              key={r.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show review from ${r.name}`}
              aria-current={i === index ? "true" : undefined}
              className="group flex h-6 min-w-6 items-center justify-center px-0.75 rounded-full"
            >
              <span
                aria-hidden
                className={`block h-1.75 lg:h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-5 lg:w-6 bg-accent"
                    : "w-1.75 lg:w-2 bg-field-border group-hover:bg-accent/50"
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
          className="ml-1 flex h-6 w-6 items-center justify-center rounded-full text-body hover:text-accent transition-colors"
        >
          {paused ? <Play size={12} aria-hidden /> : <Pause size={12} aria-hidden />}
        </button>
      </div>
    </section>
  );
}
