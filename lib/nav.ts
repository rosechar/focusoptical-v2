export interface NavTab {
  href: string;
  label: string;
  /** Other pages that belong to this tab, so it stays highlighted on them. */
  sections?: readonly string[];
}

export const NAV_TABS: readonly NavTab[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", sections: ["/eye-exams", "/contact-lenses", "/glasses"] },
  { href: "/insurance", label: "Insurance" },
  { href: "/about", label: "About" },
];
