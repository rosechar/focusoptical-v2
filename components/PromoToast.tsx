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
      role="dialog"
      aria-label="Current promotion"
      className="animate-toast-in fixed z-[60] inset-x-3.5 bottom-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[360px] flex items-center gap-3 sm:gap-[13px] rounded-[15px] sm:rounded-2xl bg-dark text-white px-3.5 py-[13px] sm:px-4 sm:py-[15px] shadow-[0_12px_34px_rgba(0,0,0,0.32)] sm:shadow-[0_16px_44px_rgba(0,0,0,0.32)]"
    >
      <span
        aria-hidden
        className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-[11px] sm:rounded-xl bg-accent text-[19px] sm:text-[21px]"
      >
        ★
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm sm:text-[15px] leading-[1.25]">Free frames this month</p>
        <p className="text-[12.5px] sm:text-[13px] text-[#b6bfc0] leading-[1.35]">
          With any complete pair of lenses.
        </p>
      </div>
      <button
        type="button"
        onClick={book}
        className="shrink-0 rounded-[9px] sm:rounded-[10px] bg-white px-3.5 py-[9px] sm:px-[15px] sm:py-2.5 text-[13px] sm:text-[13.5px] font-bold text-dark hover:bg-accent-soft transition-colors"
      >
        Book
      </button>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss"
        className="shrink-0 flex h-7 w-7 sm:h-[30px] sm:w-[30px] items-center justify-center rounded-lg sm:rounded-[9px] bg-white/10 text-[#b6bfc0] text-base sm:text-[17px] leading-none hover:text-white hover:bg-white/20 transition-colors"
      >
        <span aria-hidden>×</span>
      </button>
    </div>
  );
}
