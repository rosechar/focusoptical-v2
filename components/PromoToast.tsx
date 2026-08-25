"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "promoDismissed";
const SHOW_DELAY_MS = 2600;
const AUTO_HIDE_MS = 12000;

type Phase = "hidden" | "in" | "out";

// Appears once per session 2.6s after load and goes away on its own after 12s.
// "Book" routes to the Visit page; any exit plays the out animation, then unmounts,
// and marks it dismissed for the session.
export default function PromoToast() {
  const [phase, setPhase] = useState<Phase>("hidden");
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const id = setTimeout(() => setPhase("in"), SHOW_DELAY_MS);
    return () => clearTimeout(id);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setPhase("out");
  };

  useEffect(() => {
    if (phase !== "in") return;
    const id = setTimeout(dismiss, AUTO_HIDE_MS);
    return () => clearTimeout(id);
  }, [phase]);

  const book = () => {
    dismiss();
    router.push("/contact");
  };

  if (phase === "hidden") return null;

  return (
    <div
      role="status"
      aria-label="Current promotion"
      onAnimationEnd={() => phase === "out" && setPhase("hidden")}
      className={`${phase === "out" ? "animate-toast-out" : "animate-toast-in"} fixed z-60 inset-x-3.5 bottom-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-105 flex items-center gap-3 sm:gap-3.25 rounded-2xl bg-dark text-white px-3.5 py-3.25 sm:px-4 sm:py-3.75 shadow-toast`}
    >
      <span
        aria-hidden
        className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-lg sm:text-xl"
      >
        ★
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm sm:text-md leading-tight">Free frames this month</p>
        <p className="text-xs sm:text-sm text-dark-fg leading-snug">
          With any complete pair of lenses.
        </p>
      </div>
      <button
        type="button"
        onClick={book}
        className="shrink-0 rounded-xl bg-white px-3.5 py-2.25 sm:px-3.75 sm:py-2.5 text-sm font-bold text-dark hover:bg-accent-soft transition-colors"
      >
        Book
      </button>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss"
        className="shrink-0 flex h-7 w-7 sm:h-7.5 sm:w-7.5 items-center justify-center rounded-lg sm:rounded-xl bg-white/10 text-dark-fg text-base leading-none hover:text-white hover:bg-white/20 transition-colors"
      >
        <span aria-hidden>×</span>
      </button>
    </div>
  );
}
