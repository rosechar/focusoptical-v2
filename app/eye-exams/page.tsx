import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { BUSINESS, INSURANCE_PLANS_TEXT, PEOPLE } from "@/lib/business";
import { BUSINESS_ID, OPTOMETRIST_ID } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Eye Exams | Eye Doctor in Rochester Hills, MI",
  description:
    `Eye exams and contact lens exams in Rochester Hills, MI with our eye doctor, Dr. Diane Galper, OD, every Tuesday. Glasses made in our own lab, most ready next day. Most vision insurance accepted. Call ${BUSINESS.phoneDisplay}.`,
  alternates: {
    canonical: "/eye-exams",
  },
};

const included = [
  {
    title: "Vision & prescription check",
    description:
      "Refraction to find your exact prescription for glasses or contacts, near and far.",
  },
  {
    title: "Eye health evaluation",
    description:
      "A look at the front and back of the eye for early signs of cataracts, glaucoma, and other conditions.",
  },
  {
    title: "Eye pressure test",
    description: "A quick, painless glaucoma screening.",
  },
  {
    title: "Contact lens fitting",
    description:
      "If you wear or want contacts, we measure your eyes, check the fit, and send you home with trial lenses.",
  },
];

const steps = [
  {
    title: "Book online or call",
    description: `Dr. Galper sees patients on Tuesdays. Pick a time or call ${BUSINESS.phoneDisplay}.`,
  },
  {
    title: "See Dr. Galper",
    description:
      "Bring your current glasses or contacts and your insurance card if you have one.",
  },
  {
    title: "Pick your glasses, same visit",
    description:
      "Tom cuts your lenses in our own lab on site. Most prescriptions are ready the next day.",
  },
];

const faqs = [
  {
    q: "How much does an eye exam cost in Rochester Hills?",
    a: `It depends on whether you have vision insurance and whether you need a contact lens fitting. Call ${BUSINESS.phoneDisplay} and we'll give you a straight answer before you come in. Plenty of our customers pay out of pocket.`,
  },
  {
    q: "Do you take my vision insurance?",
    a: `We accept ${INSURANCE_PLANS_TEXT}. Call us with your plan name and we'll confirm your coverage before your visit.`,
  },
  {
    q: "How often should I get an eye exam?",
    a: "Once a year, at any age. Prescriptions change, and many eye conditions have no symptoms early on. If you wear contacts, an annual exam is required to renew your prescription.",
  },
  {
    q: "Do you do eye exams for kids?",
    a: "Yes. Dr. Galper sees patients of all ages, including school-age children.",
  },
  {
    q: "Does a contact lens exam include a regular eye exam?",
    a: "Yes. A contact lens exam includes a full eye exam plus the measurements and fitting for contacts, so it's one visit.",
  },
  {
    q: "Can I get glasses the same day as my exam?",
    a: "You can pick your frames right after your exam. Tom cuts and edges every lens in our on-site lab, so most pairs are ready the next day instead of being shipped out.",
  },
  {
    q: "Do I need an appointment?",
    a: "Yes, for eye exams and contact lens exams. Book online or call ahead. Free adjustments and cleaning don't need one.",
  },
  {
    q: "What days does the eye doctor see patients?",
    a: `Dr. Galper sees patients on Tuesdays. Book online or call ${BUSINESS.phoneDisplay} to get on her schedule. The shop is open Monday through Saturday for glasses, contacts, and adjustments.`,
  },
];

export default function EyeExamsPage() {
  return (
    <ServicePage
      path="/eye-exams"
      service="eye"
      hero={{
        title: "Eye exams in Rochester Hills, MI",
        intro:
          "Comprehensive eye exams and contact lens exams with our eye doctor, Dr. Diane Galper, every Tuesday. Pick your glasses the same visit, and most are ready the next day. Most vision insurance accepted.",
        image: "/images/tool.jpeg",
        alt: "Eye exam equipment at Focus Optical in Rochester Hills",
        bookLabel: "Book an eye exam",
      }}
      cards={{ heading: "What's included", items: included }}
      feature={{
        eyebrow: "Your eye doctor",
        heading: PEOPLE.optometrist.name,
        text: "Dr. Galper is the optometrist who performs every eye exam and contact lens exam at Focus Optical, on Tuesdays. She sees patients of all ages, takes the time to explain what she finds, and won't push anything you don't need.",
        link: { href: "/about", label: "Meet the team →" },
      }}
      steps={steps}
      insuranceNote
      faq={{ heading: "Eye exam questions", items: faqs }}
      schema={{
        pageName: "Eye Exams in Rochester Hills, MI",
        breadcrumb: "Eye exams",
        service: {
          "@type": "MedicalProcedure",
          name: "Comprehensive eye exam",
          procedureType: "https://schema.org/NoninvasiveProcedure",
          bodyLocation: "Eye",
          description:
            "Annual comprehensive eye exam including refraction, eye health evaluation, and glaucoma screening, performed on Tuesdays by eye doctor Dr. Diane Galper, OD at Focus Optical in Rochester Hills, MI.",
          provider: { "@id": BUSINESS_ID },
          performer: { "@id": OPTOMETRIST_ID },
        },
      }}
    />
  );
}
