import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { CITIES } from "@/lib/cities";
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
        <div className="max-w-295 mx-auto px-10 py-12 flex flex-wrap lg:flex-nowrap lg:justify-between gap-x-14 gap-y-10 items-start">
          <div className="w-full lg:w-auto">
            <div className="flex items-center gap-2.5 mb-4.5">
              <Logo />
              <span className="font-display text-lg font-extrabold text-white">
                Focus Optical
              </span>
            </div>
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {exploreLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="lg:mx-auto">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-white mb-3.5">
              Areas we serve
            </h2>
            <ul className="grid grid-cols-3 gap-x-8 gap-y-2.25 text-sm whitespace-nowrap">
              {CITIES.map(({ slug, city }) => (
                <li key={slug}>
                  <Link
                    href={`/service-areas/${slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {city}
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
