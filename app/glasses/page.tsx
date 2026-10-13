import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { BUSINESS, INSURANCE_PLANS_TEXT, PEOPLE } from "@/lib/business";
import { BUSINESS_ID } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Next-Day Glasses | Prescription Eyeglasses in Rochester Hills, MI",
  description:
    "Prescription glasses cut and edged in our own lab in Rochester Hills, MI, with most ready the next day. Frames for every budget, new lenses in your frames, progressives, and free adjustments. Serving Oakland County.",
  alternates: {
    canonical: "/glasses",
  },
};

const offerings = [
  {
    title: "Everyday prescription glasses",
    description:
      "A wide selection of frames for every budget, fitted to your face and adjusted before you leave.",
  },
  {
    title: "Progressives & specialty lenses",
    description:
      "Progressives and specialty lenses, measured carefully and cut in our own lab.",
  },
  {
    title: "Prescription sunglasses",
    description:
      "Prescription and non-prescription sunglasses, fitted and adjusted in the shop.",
  },
  {
    title: "New lenses, your frames",
    description:
      "Love the frames you have? Bring them in and we'll cut new lenses for them.",
  },
];

const steps = [
  {
    title: "Bring a prescription or get an exam",
    description:
      "Bring a current prescription, or see Dr. Galper here for an eye exam on a Tuesday.",
  },
  {
    title: "Pick your frames",
    description:
      "Tom helps you choose frames that fit and takes the measurements for your lenses.",
  },
  {
    title: "Pick up the next day",
    description:
      "Your lenses are cut and edged in our lab. Most pairs are ready the next day, fitted before you go.",
  },
];

const faqs = [
  {
    q: "How fast can I get new glasses?",
    a: "Most prescriptions are ready the next day. Tom cuts and edges every lens in our own lab on site, so nothing gets shipped out to an outside lab.",
  },
  {
    q: "Which glasses take longer than next day?",
    a: "Some lens types and coatings have to be ordered and take a little longer. We'll tell you exactly when your glasses will be ready before you leave.",
  },
  {
    q: "Can I bring a prescription from another eye doctor?",
    a: "Yes. Bring a current prescription from any eye doctor and we'll make your glasses. Need a new prescription? Dr. Galper does eye exams here on Tuesdays.",
  },
  {
    q: "Can you put new lenses in frames I already own?",
    a: "Yes. Bring in the frames you like and we'll cut new lenses for them, so you don't have to buy new frames.",
  },
  {
    q: "Can I use vision insurance for glasses?",
    a: `We accept ${INSURANCE_PLANS_TEXT}. Call ${BUSINESS.phoneDisplay} with your plan name and we'll confirm what's covered before your visit.`,
  },
  {
    q: "Are adjustments free?",
    a: "Yes. Adjustments and cleaning are free for anyone, on any pair, no purchase or appointment needed.",
  },
];

export default function GlassesPage() {
  return (
    <ServicePage
      path="/glasses"
      service="retail"
      hero={{
        title: "Next-day glasses in Rochester Hills, MI",
        intro:
          "We cut and edge prescription lenses in our own lab, so most glasses are ready the next day. Frames for every budget, plus the contact lens brands you need, for Oakland County since 1984.",
        image: "/images/glasses2.jpeg",
        alt: "Eyeglass frames on display at Focus Optical in Rochester Hills",
        bookLabel: "Book a visit",
      }}
      cards={{ heading: "What we make", items: offerings }}
      feature={{
        eyebrow: "Why it's next day",
        heading: "Our own lab, not a shipping box",
        text: `Many shops send lenses out to a lab and wait days for them to come back. ${PEOPLE.owner.name} has made glasses since 1977 and cuts and edges every lens right here in the shop, so most pairs are ready the next day and he checks the fit himself.`,
        link: { href: "/about", label: "Meet the team →" },
      }}
      steps={steps}
      offer
      faq={{ heading: "Glasses questions", items: faqs }}
      schema={{
        pageName: "Next-Day Prescription Glasses in Rochester Hills, MI",
        breadcrumb: "Glasses",
        service: {
          "@type": "Service",
          name: "Next-day prescription glasses",
          serviceType: "Prescription eyeglasses",
          description:
            "Prescription eyeglasses with lenses cut and edged in Focus Optical's on-site lab in Rochester Hills, MI. Most prescriptions are ready the next day.",
          provider: { "@id": BUSINESS_ID },
          areaServed: { "@type": "AdministrativeArea", name: "Oakland County, MI" },
        },
      }}
    />
  );
}
