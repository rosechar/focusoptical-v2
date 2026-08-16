"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { NAV_TABS } from "@/lib/nav";
import Logo from "@/components/Logo";

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Desktop utility bar */}
      <div className="hidden lg:block bg-dark text-dark-fg text-sm">
        <div className="max-w-295 mx-auto px-10 py-2 flex items-center justify-between">
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.75 hover:text-white transition-colors"
          >
            <MapPin size={14} />
            {BUSINESS.address.street} · {BUSINESS.address.city},{" "}
            {BUSINESS.address.state}
          </a>
          <div className="inline-flex items-center gap-5">
            <span className="text-dark-muted">Open Mon–Sat · Free adjustments for anyone</span>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-1.75 text-white font-bold hover:text-accent-ondark transition-colors"
            >
              <Phone size={14} />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-hairline-soft">
        <div className="max-w-295 mx-auto px-4.5 lg:px-10">
          <div className="flex items-center justify-between gap-3 pt-3.25 pb-3 lg:py-3.75">
            <Link href="/" className="flex items-center gap-2 lg:gap-2.5 shrink-0">
              <Logo />
              <span className="font-display text-base lg:text-xl font-extrabold text-ink tracking-tight">
                Focus Optical
              </span>
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Primary" className="hidden lg:flex items-center gap-2">
              {NAV_TABS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`px-4 py-2.25 rounded-full text-md transition-colors ${
                    isActive(href)
                      ? "bg-accent-soft text-accent font-bold"
                      : "text-body font-semibold hover:bg-surface"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href={BUSINESS.phoneHref}
                className="ml-3.5 inline-flex items-center gap-1.75 rounded-full border-1.5 border-field-border px-4 py-2.25 text-sm font-bold text-ink hover:border-accent hover:text-accent transition-colors"
              >
                <Phone size={14} />
                {BUSINESS.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-accent hover:bg-accent-hover px-5 py-2.75 text-sm font-bold text-white transition-colors"
              >
                Book a visit
              </Link>
            </nav>

            {/* Mobile call pill */}
            <a
              href={BUSINESS.phoneHref}
              className="lg:hidden inline-flex items-center whitespace-nowrap rounded-full bg-accent hover:bg-accent-hover px-4.5 py-2.5 text-sm font-bold text-white transition-colors"
            >
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Mobile chip nav */}
        <nav aria-label="Primary" className="lg:hidden flex gap-2 px-4.5 pb-3">
          {NAV_TABS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`flex-1 text-center rounded-full px-3 py-2 text-sm transition-colors ${
                isActive(href)
                  ? "bg-accent-soft text-accent font-bold"
                  : "text-body font-semibold hover:bg-surface"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
