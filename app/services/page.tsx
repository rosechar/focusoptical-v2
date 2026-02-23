import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Focus Optical in Rochester Hills, MI offers eye exams, contact lens exams, prescription glasses, contact lenses, and free eyeglass adjustments. Next day service available on most prescriptions.",
  keywords: [
    "eye exam Rochester Hills MI",
    "contact lens exam Oakland County",
    "prescription glasses Rochester Hills",
    "free eyeglass adjustments",
    "optician services Rochester Hills",
    "contact lenses Michigan",
    "eyeglass fitting Rochester Hills",
  ],
};

const services = [
  {
    id: "eye-exams",
    title: "Eye Exams",
    subtitle: "Annual Vision Assessment",
    description:
      "It is recommended to get an eye exam annually to assess your eyesight, especially as your eyes change as you age. Eye exams at Focus Optical are performed by Dr. Diane Galper, Optometrist.",
    image: "/images/tool.jpeg",
    alt: "Eye exam equipment at Focus Optical Rochester Hills",
    highlights: [
      "Performed by Dr. Diane Galper, Optometrist",
      "Comprehensive vision assessment",
      "Detect changes in vision early",
      "Recommended annually for all ages",
    ],
  },
  {
    id: "contact-exams",
    title: "Contact Lens Exams",
    subtitle: "Specialized Fitting Exam",
    description:
      "It is essential to have a separate contact exam if you are interested in contact lenses to ensure a comfortable fit. An eye exam is included with your contact lens exam, so you get everything you need in a single visit.",
    image: "/images/contact.jpg",
    alt: "Contact lens exam at Focus Optical Rochester Hills MI",
    highlights: [
      "Separate exam required for contact lens wearers",
      "Ensures proper fit and comfort",
      "Full eye exam included",
      "Trial lenses available",
    ],
  },
  {
    id: "adjustments",
    title: "Free Eyeglass Adjustments",
    subtitle: "Complimentary Service for Everyone",
    description:
      "As a courtesy to anyone, we offer free adjustments and cleaning for your glasses. No appointment necessary — just come in. Whether you bought your glasses from us or somewhere else, we're happy to help.",
    image: "/images/glasses3.jpg",
    alt: "Eyeglass adjustments at Focus Optical Rochester Hills",
    highlights: [
      "Free for anyone — no purchase required",
      "Cleaning included at no charge",
      "No appointment needed",
      "Open to all, even non-customers",
    ],
  },
  {
    id: "retail",
    title: "Eyeglasses & Contact Lenses",
    subtitle: "Wide Selection, No Pressure",
    description:
      "We offer a wide selection of frames and contact lenses, giving you options without sales pressure. We can also add new lenses to existing frames if you prefer. And we offer next day service on most prescriptions.",
    image: "/images/contact1.jpg",
    alt: "Eyeglass frame selection at Focus Optical Rochester Hills",
    highlights: [
      "Wide selection of frames for every budget",
      "Contact lens brands available",
      "New lenses added to existing frames",
      "Next day service on most prescriptions",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-blue-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-blue-300 font-semibold text-sm tracking-widest uppercase mb-2">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Our Services
          </h1>
          <p className="text-blue-200 mt-3 text-base sm:text-lg max-w-xl">
            Full-service optical care at our Rochester Hills, MI location —
            eye exams, glasses, contacts, and more.
          </p>
        </div>
      </section>

      {/* Services list */}
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-16 space-y-12 sm:space-y-20">
        {services.map(
          ({ id, title, subtitle, description, image, alt, highlights }, i) => (
            <section
              key={id}
              id={id}
              className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image — always on top on mobile */}
              <div
                className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${
                  i % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-1">
                  {subtitle}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                  {title}
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mb-5">
                  {description}
                </p>
                <ul className="space-y-2 mb-6">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-base text-slate-600">
                      <Check size={16} className="text-blue-600 mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Schedule an Appointment
                </Link>
              </div>
            </section>
          )
        )}
      </div>

      {/* Next day service callout */}
      <section className="bg-slate-50 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="text-blue-600" size={22} />
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Next Day Service Available
            </h2>
          </div>
          <p className="text-slate-600 mb-4 text-base sm:text-lg">
            We offer next day service on most prescriptions — because we know
            your time matters and you need your glasses fast.
          </p>
          <p className="text-slate-500 text-sm mb-7">
            Questions about pricing or insurance? Give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              Request an Appointment
            </Link>
            <Link
              href="/insurance"
              className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              Insurance &amp; Pricing Info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
