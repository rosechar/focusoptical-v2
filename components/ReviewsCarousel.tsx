"use client";

import { useEffect, useState } from "react";
import { REVIEWS } from "@/lib/reviews";

const ROTATE_MS = 5500;

// One review at a time, auto-advancing every 5.5s, with a dot pager.
export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
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
      className="bg-accent-soft px-[26px] py-10 lg:px-10 lg:py-16 text-center"
    >
      <p className="hidden lg:block text-accent font-bold text-xs tracking-[0.18em] uppercase mb-[30px]">
        What our patients say
      </p>

      <div className="min-h-[150px] max-w-[760px] mx-auto flex items-center justify-center">
        {/* key remounts the quote so the fadeUp animation replays on change */}
        <blockquote key={index} className="animate-fade-up" aria-live="polite">
          <div
            aria-hidden
            className="text-gold text-base lg:text-lg tracking-[3px] mb-4 lg:mb-[18px]"
          >
            ★★★★★
          </div>
          <p className="font-display text-xl leading-[1.45] lg:text-[27px] lg:leading-[1.42] lg:tracking-[-0.01em] font-semibold text-[#1f2a2b] mb-4 lg:mb-[18px]">
            &ldquo;{review.quote}&rdquo;
          </p>
          <footer className="text-sm lg:text-[15px] font-bold text-accent">
            <a
              href={review.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-hover transition-colors"
            >
              {review.name} · Google review
            </a>
          </footer>
        </blockquote>
      </div>

      <div className="flex justify-center gap-[7px] lg:gap-2 mt-[22px] lg:mt-[26px]">
        {REVIEWS.map((r, i) => (
          <button
            key={r.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show review from ${r.name}`}
            aria-current={i === index}
            className={`h-[7px] lg:h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-5 lg:w-6 bg-accent"
                : "w-[7px] lg:w-2 bg-[#c2cdcd] hover:bg-accent/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
