import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "outline" | "accent-outline" | "inverse";
type Size = "sm" | "md" | "lg";

const VARIANT: Record<Variant, string> = {
  primary: "bg-accent text-white border-accent hover:bg-accent-hover hover:border-accent-hover",
  outline: "border-field-border text-ink hover:border-accent hover:text-accent",
  "accent-outline": "border-accent text-accent hover:bg-accent-soft",
  /** White button for use on an accent background (CTA band). */
  inverse: "bg-white text-accent border-white hover:bg-accent-soft hover:border-accent-soft",
};

const SIZE: Record<Size, string> = {
  sm: "px-4 py-2.25 text-sm",
  md: "px-5.5 py-3 text-md lg:px-6.5 lg:py-3.25 lg:text-base",
  lg: "px-6 py-3.5 text-md lg:px-7 lg:py-3.75 lg:text-base",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  /** Fully rounded (header pills) instead of the default rounded-xl. */
  pill?: boolean;
  className?: string;
  children: ReactNode;
}

type AnchorProps = BaseProps & { href: string } & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;
type NativeButtonProps = BaseProps & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export type ButtonProps = AnchorProps | NativeButtonProps;

const isInternal = (href: string) => href.startsWith("/") || href.startsWith("#");

/**
 * Site-wide button. Renders a Next <Link> for internal hrefs, a plain <a> for
 * tel:/mailto:/external hrefs, and a <button> when no href is given. Every
 * variant carries a 1.5px border (transparent-ish on filled variants) so
 * outlined and filled buttons sit at the same height side by side.
 */
export default function Button({
  variant = "primary",
  size = "md",
  pill = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold border-1.5 transition-colors ${
    pill ? "rounded-full" : "rounded-xl"
  } ${VARIANT[variant]} ${SIZE[size]} ${className}`;

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchor } = rest;
    if (isInternal(href)) {
      return (
        <Link href={href} className={classes} {...anchor}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...anchor}>
        {children}
      </a>
    );
  }

  const { type = "button", ...button } = rest as NativeButtonProps;
  return (
    <button type={type} className={classes} {...button}>
      {children}
    </button>
  );
}
