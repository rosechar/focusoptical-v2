import type { Metadata } from "next";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

const links = [
  { href: "/services", label: "Services" },
  { href: "/eye-exams", label: "Eye exams" },
  { href: "/service-areas", label: "Service areas" },
  { href: "/insurance", label: "Insurance & pricing" },
  { href: "/about", label: "About us" },
];

export default function NotFound() {
  return (
    <>
      <section className="page-container pt-12 pb-8 lg:pt-20 lg:pb-12">
        <p className="eyebrow mb-2.5">
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
              <Button href={href} variant="outline" size="sm">
                {label}
              </Button>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand heading="Looking to book a visit?" subtext="Send a request online and we'll call to confirm." />
    </>
  );
}
