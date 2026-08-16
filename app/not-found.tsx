import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

const links = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service areas" },
  { href: "/insurance", label: "Insurance & pricing" },
  { href: "/about", label: "About us" },
];

export default function NotFound() {
  return (
    <>
      <section className="max-w-295 mx-auto px-5 pt-12 pb-8 lg:px-10 lg:pt-20 lg:pb-12">
        <p className="text-accent font-bold text-xs tracking-eyebrow uppercase mb-2.5">
          404
        </p>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-ink tracking-tight mb-3">
          We couldn&apos;t find that page.
        </h1>
        <p className="text-md lg:text-lg text-body leading-normal mb-6 max-w-155">
          The link may be old or mistyped. Here&apos;s where most folks are headed:
        </p>
        <ul className="flex flex-wrap gap-2.5">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-block rounded-xl border-1.5 border-field-border px-4 py-2.5 text-md font-bold text-ink hover:border-accent hover:text-accent transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand heading="Looking to book a visit?" subtext="Send a request online and we'll call to confirm." />
    </>
  );
}
