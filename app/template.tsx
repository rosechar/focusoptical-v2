"use client";

import { useEffect, useState } from "react";

// Set once the first page has mounted. Module state lives for the whole browser session, so
// only later in-app navigations see it; the server render and first load never do.
let hasNavigated = false;

// A template re-mounts on every navigation, so each page after the first fades in (pageIn).
// The first load renders visible straight away: starting at opacity 0 delays the first
// contentful paint and keeps the page's main content from counting as its LCP.
// Disabled automatically under prefers-reduced-motion (see globals.css).
export default function Template({ children }: { children: React.ReactNode }) {
  const [animate] = useState(() => hasNavigated);
  useEffect(() => {
    hasNavigated = true;
  }, []);
  return <div className={animate ? "animate-page-in" : undefined}>{children}</div>;
}
