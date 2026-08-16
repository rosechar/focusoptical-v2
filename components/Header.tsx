"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { NAV_TABS } from "@/lib/nav";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import OpenStatus from "@/components/OpenStatus";

const navLinkClass = (active: boolean) =>
  `rounded-full text-md transition-colors ${
    active ? "bg-accent-soft text-accent font-bold" : "text-body font-semibold hover:bg-surface"
  }`;

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Desktop utility bar */}
      <section aria-label="Store address and hours" className="hidden lg:block bg-dark text-dark-fg text-sm">
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
          <OpenStatus className="text-dark-muted" />
        </div>
      </section>

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
                  className={`px-4 py-2.25 ${navLinkClass(isActive(href))}`}
                >
                  {label}
                </Link>
              ))}
              <Button href={BUSINESS.phoneHref} variant="outline" size="sm" pill className="ml-3.5 gap-1.75">
                <Phone size={14} />
                {BUSINESS.phoneDisplay}
              </Button>
              <Button href="/contact" size="sm" pill>
                Book a visit
              </Button>
            </nav>

            {/* Mobile call pill */}
            <Button href={BUSINESS.phoneHref} size="sm" pill className="lg:hidden whitespace-nowrap">
              {BUSINESS.phoneDisplay}
            </Button>
          </div>
        </div>

        {/* Mobile chip nav */}
        <nav aria-label="Primary" className="lg:hidden flex gap-2 px-4.5 pb-3">
          {NAV_TABS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`flex-1 text-center px-3 py-2 text-sm ${navLinkClass(isActive(href))}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
