import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { BUSINESS, INSURANCE_PLANS_TEXT, PEOPLE } from "@/lib/business";
import { BUSINESS_ID, OPTOMETRIST_ID } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Lens Exams & Fittings in Rochester Hills, MI",
  description:
    `Contact lens exams and fittings in Rochester Hills, MI with Dr. Diane Galper, OD, every Tuesday. A full eye exam is included and you take trial lenses home. Most vision insurance accepted. Call ${BUSINESS.phoneDisplay}.`,
  alternates: {
    canonical: "/contact-lenses",
  },
};

const included = [
  {
    title: "Full eye exam",
    description:
      "Everything in our comprehensive eye exam: prescription check, eye health evaluation, and glaucoma screening.",
  },
  {
    title: "Contact lens measurements",
    description:
      "Contacts sit right on your eye, so we measure your eyes for a lens that fits, not just your prescription.",
  },
  {
    title: "Fit check",
    description:
      "Dr. Galper checks how the lenses sit on your eye and that you see clearly and comfortably in them.",
  },
  {
    title: "Trial lenses",
    description:
      "You go home with trial lenses, so you know they feel right before you order.",
  },
];

const steps = [
  {
    title: "Book online or call",
    description: `Dr. Galper sees patients on Tuesdays. Pick a time or call ${BUSINESS.phoneDisplay}.`,
  },
  {
    title: "Exam and fitting",
    description:
      "Bring your current contacts or glasses and your insurance card if you have one.",
  },
  {
    title: "Try them, then order",
    description:
      "Wear your trial lenses at home. When they feel right, order your contacts from us.",
  },
];

const faqs = [
  {
    q: "How much does a contact lens exam cost in Rochester Hills?",
    a: `It depends on your vision plan and the type of lenses you need. Call ${BUSINESS.phoneDisplay} and we'll give you a straight answer before you come in.`,
  },
  {
    q: "Do you take my vision insurance?",
    a: `We accept ${INSURANCE_PLANS_TEXT}. Call us with your plan name and we'll confirm your coverage before your visit.`,
  },
  {
    q: "Does a contact lens exam include a regular eye exam?",
    a: "Yes. A contact lens exam includes a full eye exam plus the measurements and fitting for contacts, so it's one visit.",
  },
  {
    q: "Why can't I use my glasses prescription for contacts?",
    a: "A glasses prescription doesn't include the measurements a contact lens needs. Contacts sit directly on your eye, so the fit has to be checked by an eye doctor.",
  },
  {
    q: "How often do I need a contact lens exam?",
    a: "Once a year. Contact lens prescriptions need to be renewed with an annual exam.",
  },
  {
    q: "I've never worn contacts. Can I try them?",
    a: "Yes, first-timers are welcome. Dr. Galper will fit you, and you'll take trial lenses home before you buy anything.",
  },
  {
    q: "Can I buy my contacts from you?",
    a: "Yes. We carry the contact brands you need, and you can order them right after your fitting.",
  },
  {
    q: "Do I need an appointment?",
    a: `Yes. Contact lens exams are on Tuesdays with Dr. Galper. Book online or call ${BUSINESS.phoneDisplay}.`,
  },
];

export default function ContactLensesPage() {
  return (
    <ServicePage
      path="/contact-lenses"
      service="contact"
      hero={{
        title: "Contact lens exams in Rochester Hills, MI",
        intro:
          "Contact lens exams and fittings with our eye doctor, Dr. Diane Galper, every Tuesday. A full eye exam is included, so it's one visit, and you take trial lenses home. Most vision insurance accepted.",
        image: "/images/contact.jpg",
        alt: "Contact lens on a fingertip at Focus Optical in Rochester Hills",
        bookLabel: "Book a contact exam",
      }}
      cards={{ heading: "What's included", items: included }}
      feature={{
        eyebrow: "Your eye doctor",
        heading: PEOPLE.optometrist.name,
        text: "Dr. Galper performs every contact lens exam and eye exam at Focus Optical, on Tuesdays. She sees patients of all ages, takes the time to explain what she finds, and won't push anything you don't need.",
        link: { href: "/eye-exams", label: "About our eye exams →" },
      }}
      steps={steps}
      insuranceNote
      faq={{ heading: "Contact lens questions", items: faqs }}
      schema={{
        pageName: "Contact Lens Exams in Rochester Hills, MI",
        breadcrumb: "Contact lenses",
        service: {
          "@type": "MedicalProcedure",
          name: "Contact lens exam and fitting",
          procedureType: "https://schema.org/NoninvasiveProcedure",
          bodyLocation: "Eye",
          description:
            "Contact lens exam and fitting including a comprehensive eye exam, contact lens measurements, fit check, and trial lenses, performed on Tuesdays by eye doctor Dr. Diane Galper, OD at Focus Optical in Rochester Hills, MI.",
          provider: { "@id": BUSINESS_ID },
          performer: { "@id": OPTOMETRIST_ID },
        },
      }}
    />
  );
}
