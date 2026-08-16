"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "promoDismissed";
const SHOW_DELAY_MS = 2600;

// Appears once per session 2.6s after load. "Book" routes to the Visit page;
// both actions mark it dismissed so it stays hidden for the rest of the session.
export default function PromoToast() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const id = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(id);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  const book = () => {
    dismiss();
    router.push("/contact");
  };

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Current promotion"
      className="animate-toast-in fixed z-60 inset-x-3.5 bottom-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-105 flex items-center gap-3 sm:gap-3.25 rounded-2xl bg-dark text-white px-3.5 py-3.25 sm:px-4 sm:py-3.75 shadow-toast"
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
