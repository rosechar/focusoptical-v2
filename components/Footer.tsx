import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { NAV_TABS } from "@/lib/nav";
import Logo from "@/components/Logo";

const exploreLinks = [
  ...NAV_TABS,
  { href: "/insurance", label: "Insurance" },
  { href: "/service-areas", label: "Service areas" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Mobile: tiny centered line */}
      <div className="md:hidden border-t border-hairline-soft px-5 py-4.5 text-center text-xs leading-relaxed text-faint">
        Focus Optical ·{" "}
        <a href={BUSINESS.phoneHref} className="hover:text-body transition-colors">
          {BUSINESS.phoneDisplay}
        </a>
        <br />© {year} · {BUSINESS.address.city}, {BUSINESS.address.state}
      </div>

      {/* Desktop: dark footer */}
      <div className="hidden md:block bg-dark text-dark-muted">
        <div className="max-w-295 mx-auto px-10 py-12 flex flex-wrap justify-between items-start gap-10">
          <div className="max-w-80">
            <div className="flex items-center gap-2.5 mb-3.5">
              <Logo />
              <span className="font-display text-lg font-extrabold text-white">
                Focus Optical
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Independent, family-run optician in Rochester Hills since 1984.
            </p>
          </div>
          <div className="flex flex-wrap gap-14">
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-white mb-3.5">
                Explore
              </h2>
              <ul className="flex flex-col gap-2.25 text-sm">
                {exploreLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-white mb-3.5">
                Visit &amp; call
              </h2>
              <a
                href={BUSINESS.phoneHref}
                className="block text-white text-lg font-bold mb-2 hover:text-accent-ondark transition-colors"
              >
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm leading-normal hover:text-white transition-colors"
              >
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
                {BUSINESS.address.zip}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-dark-border">
          <div className="max-w-295 mx-auto px-10 py-4.5 flex flex-wrap justify-between gap-2 text-xs text-dark-faint">
            <span>© {year} Focus Optical. All rights reserved.</span>
            <span>Rochester Hills, MI · Optician since 1984</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
