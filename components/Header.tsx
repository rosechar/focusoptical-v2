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
      <div className="hidden lg:block bg-dark text-[#c2cccd] text-[13px]">
        <div className="max-w-[1180px] mx-auto px-10 py-2 flex items-center justify-between">
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[7px] hover:text-white transition-colors"
          >
            <MapPin size={14} />
            {BUSINESS.address.street} · {BUSINESS.address.city},{" "}
            {BUSINESS.address.state}
          </a>
          <div className="inline-flex items-center gap-5">
            <span className="text-[#8b989a]">Mon–Sat · Walk-ins welcome</span>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-[7px] text-white font-bold hover:text-accent-ondark transition-colors"
            >
              <Phone size={14} />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-[10px] border-b border-[#eef0ef]">
        <div className="max-w-[1180px] mx-auto px-[18px] lg:px-10">
          <div className="flex items-center justify-between gap-3 pt-[13px] pb-3 lg:py-[15px]">
            <Link href="/" className="flex items-center gap-2 lg:gap-2.5 shrink-0">
              <Logo />
              <span className="font-display text-[17px] lg:text-[21px] font-extrabold text-ink tracking-[-0.02em]">
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
                  className={`px-4 py-[9px] rounded-full text-[15px] transition-colors ${
                    isActive(href)
                      ? "bg-accent-soft text-accent font-bold"
                      : "text-[#4a5354] font-semibold hover:bg-surface"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href={BUSINESS.phoneHref}
                className="ml-3.5 inline-flex items-center gap-[7px] rounded-full border-[1.5px] border-[#d6dbdb] px-4 py-[9px] text-sm font-bold text-ink hover:border-accent hover:text-accent transition-colors"
              >
                <Phone size={14} />
                {BUSINESS.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-accent hover:bg-accent-hover px-5 py-[11px] text-sm font-bold text-white transition-colors"
              >
                Book a visit
              </Link>
            </nav>

            {/* Mobile call pill */}
            <a
              href={BUSINESS.phoneHref}
              className="lg:hidden inline-flex items-center whitespace-nowrap rounded-full bg-accent hover:bg-accent-hover px-[18px] py-2.5 text-[13.5px] font-bold text-white transition-colors"
            >
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Mobile tab nav */}
        <nav aria-label="Primary" className="lg:hidden flex border-t border-hairline-soft">
          {NAV_TABS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`flex-1 text-center text-[13px] pt-[13px] pb-[11px] px-1 border-b-2 transition-colors ${
                isActive(href)
                  ? "border-accent text-accent font-bold"
                  : "border-transparent text-body font-semibold"
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
