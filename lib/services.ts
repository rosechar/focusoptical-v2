export interface Service {
  /** Anchor id on /services and the offer id in structured data. */
  id: string;
  title: string;
  /** Short badge shown on the service card image. */
  badge: string;
  /** Full description for the /services card and structured data. */
  description: string;
  /** One-line teaser for the home page card. */
  summary: string;
  image: string;
  alt: string;
  chips: string[];
  /** Rendered as a solid accent card without an image on /services. */
  inverted?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "eye-exams",
    title: "Eye exams",
    badge: "Annual vision assessment",
    description:
      "Comprehensive exams with Dr. Diane Galper, OD. We recommend one every year, at any age.",
    summary: "Comprehensive exams with Dr. Galper, OD.",
    image: "/images/tool.jpeg",
    alt: "Eye exam equipment at Focus Optical",
    chips: ["Licensed optometrist", "Full vision check", "All ages"],
  },
  {
    id: "contact-exams",
    title: "Contact lens exams",
    badge: "Specialized fitting",
    description:
      "A contact exam checks the fit and the health of your eyes. A full eye exam is included, so it's one visit.",
    summary: "A proper fitting with a full exam included.",
    image: "/images/contact.jpg",
    alt: "Contact lens fitting at Focus Optical",
    chips: ["Proper fit & comfort", "Full exam included", "Trial lenses"],
  },
  {
    id: "retail",
    title: "Glasses & contacts",
    badge: "Wide selection",
    description:
      "Frames for every budget and the contact brands you need. Keep your favorite frames if you like and we'll cut new lenses for them.",
    summary: "A wide selection, or re-lens your frames.",
    image: "/images/contact1.jpg",
    alt: "Eyeglass frame selection at Focus Optical",
    chips: ["Every budget", "Re-lens your frames", "Next-day service"],
  },
  {
    id: "adjustments",
    title: "Free adjustments",
    badge: "Free for everyone",
    description:
      "Bring in any pair, bought anywhere. We'll fix the fit and clean them, no charge and no appointment.",
    summary: "Any pair, anywhere. No charge, no appointment.",
    image: "/images/glasses3.jpg",
    alt: "Eyeglass adjustment at Focus Optical",
    chips: ["No purchase needed", "Cleaning included", "Just walk in"],
    inverted: true,
  },
];

/** Checklist bullets used on the service-area pages. */
export const SERVICE_HIGHLIGHTS = [
  "Comprehensive eye exams (Dr. Diane Galper, OD)",
  "Contact lens exams & fittings",
  "Prescription eyeglasses & sunglasses",
  "New lenses for existing frames",
  "On-site lens cutting & edging",
  "Free eyeglass adjustments & cleaning",
] as const;
