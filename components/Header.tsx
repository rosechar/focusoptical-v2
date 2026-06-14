"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/insurance", label: "Insurance" },
  { href: "/contact", label: "Schedule Appointment", cta: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "border-b border-slate-100"
      }`}
    >
      {/* Top info bar */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between text-base">
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="get-directions"
            className="flex items-center gap-1.5 hover:text-blue-200 transition-colors"
          >
            <MapPin size={14} />
            <span>
              {BUSINESS.address.city}, {BUSINESS.address.state}
            </span>
          </a>
          <a
            href={BUSINESS.phoneHref}
            data-umami-event="call-phone"
            className="flex items-center gap-1.5 hover:text-blue-200 transition-colors"
          >
            <Phone size={14} />
            <span>{BUSINESS.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 leading-none py-1"
          >
            <span className="text-lg font-bold text-blue-900 tracking-tight">
              Focus Optical
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-8 h-8 shrink-0"
            >
              <rect
                x="2"
                y="10"
                width="12"
                height="10"
                rx="5"
                fill="none"
                stroke="#1e3a8a"
                strokeWidth="2.2"
              />
              <rect
                x="18"
                y="10"
                width="12"
                height="10"
                rx="5"
                fill="none"
                stroke="#1e3a8a"
                strokeWidth="2.2"
              />
              <line
                x1="14"
                y1="15"
                x2="18"
                y2="15"
                stroke="#1e3a8a"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <line
                x1="2"
                y1="13"
                x2="0"
                y2="10"
                stroke="#1e3a8a"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="30"
                y1="13"
                x2="32"
                y2="10"
                stroke="#1e3a8a"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ href, label, cta }) =>
              cta ? (
                <Link
                  key={href}
                  href={href}
                  className="ml-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
                >
                  {label}
                </Link>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === href
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                  }`}
                >
                  {label}
                </Link>
              ),
            )}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ href, label, cta }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                  cta
                    ? "bg-blue-600 text-white hover:bg-blue-700 text-center mt-1"
                    : pathname === href
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href={BUSINESS.phoneHref}
              data-umami-event="call-phone"
              className="flex items-center gap-2 px-3 py-3 text-sm text-slate-500 border-t border-slate-100 mt-1 pt-3"
            >
              <Phone size={14} />
              <span>{BUSINESS.phoneDisplay}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
