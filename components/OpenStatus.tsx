"use client";

import { useEffect, useState } from "react";
import { getOpenStatus, type OpenStatus as Status } from "@/lib/hours";

interface OpenStatusProps {
  className?: string;
  /** Text shown until the client clock is available (also what crawlers see). */
  fallback?: string;
}

// Live "Open now · closes 6:00 PM" line, computed in the store's time zone on the
// client so cached HTML never shows a stale state. Refreshes once a minute.
export default function OpenStatus({ className = "", fallback = "Open Mon–Sat" }: OpenStatusProps) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const tick = () => setStatus(getOpenStatus());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return <span className={className}>{fallback}</span>;

  const [state, ...rest] = status.text.split(" · ");
  return (
    <span className={className}>
      <strong className="font-bold">{state}</strong>
      {rest.length > 0 && ` · ${rest.join(" · ")}`}
    </span>
  );
}
