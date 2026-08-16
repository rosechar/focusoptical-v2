"use client";

import { useEffect, useState } from "react";
import { GOOGLE_REVIEWS } from "@/lib/business";
import { REVIEWS } from "@/lib/reviews";

const ROTATE_MS = 5500;

// One review at a time, auto-advancing every 5.5s, with a dot pager.
export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % REVIEWS.length),
      ROTATE_MS,
    );
    return () => clearInterval(id);
  }, []);

  const review = REVIEWS[index];

  return (
    <section
      aria-label="Patient reviews"
      className="bg-accent-soft px-6.5 py-10 lg:px-10 lg:py-16 text-center"
    >
      <p className="hidden lg:block text-accent font-bold text-xs tracking-eyebrow uppercase mb-3.5">
        What our patients say
      </p>
      <p className="text-sm lg:text-md text-secondary mb-6 lg:mb-7.5">
        <span aria-hidden className="text-gold">★</span>{" "}
        <span className="font-bold text-ink">{GOOGLE_REVIEWS.rating}</span> from{" "}
        {GOOGLE_REVIEWS.count} Google reviews
      </p>

      <div className="min-h-37.5 max-w-190 mx-auto flex items-center justify-center">
        {/* key remounts the quote so the fadeUp animation replays on change */}
        <blockquote key={index} className="animate-fade-up" aria-live="polite">
          <div
            aria-hidden
            className="text-gold text-base lg:text-lg tracking-eyebrow mb-4 lg:mb-4.5"
          >
            ★★★★★
          </div>
          <p className="font-display text-xl leading-snug lg:text-2xl lg:tracking-normal font-semibold text-ink mb-4 lg:mb-4.5">
            &ldquo;{review.quote}&rdquo;
          </p>
          <footer className="text-sm lg:text-md font-bold text-accent">
            <a
              href={review.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="hover:text-accent-hover transition-colors"
            >
              {review.name} · Google review
            </a>
          </footer>
        </blockquote>
      </div>

      <div className="flex justify-center gap-1.75 lg:gap-2 mt-5.5 lg:mt-6.5" role="group" aria-label="Choose review">
        {REVIEWS.map((r, i) => (
          <button
            key={r.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show review from ${r.name}`}
            aria-current={i === index ? "true" : undefined}
            className={`h-1.75 lg:h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-5 lg:w-6 bg-accent"
                : "w-1.75 lg:w-2 bg-field-border hover:bg-accent/50"
            }`}
          />
        ))}
      </div>

      <a
        href={GOOGLE_REVIEWS.url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-block mt-6 lg:mt-7 text-sm lg:text-md font-bold text-accent hover:text-accent-hover transition-colors"
      >
        Read all {GOOGLE_REVIEWS.count} reviews on Google →
      </a>
    </section>
  );
}
