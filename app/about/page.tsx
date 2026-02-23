import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Calendar, Award } from "lucide-react";
// Calendar still used in location section below

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Tom Hamilton, owner of Focus Optical in Rochester Hills, MI. An independent optician since 1984 with over 45 years of experience making eyeglasses. Eye exams performed by Dr. Diane Galper, Optometrist.",
  keywords: [
    "Focus Optical owner Tom Hamilton",
    "Rochester Hills optician",
    "independent optical store Rochester Hills",
    "Dr Diane Galper optometrist",
    "eye exam Rochester Hills",
  ],
};

const milestones = [
  { year: "1977", label: "Tom begins making eyeglasses" },
  { year: "1984", label: "Focus Optical opens in Rochester Hills" },
  { year: "Today", label: "Over 45 years of optical craftsmanship" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-blue-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-blue-300 font-semibold text-sm tracking-widest uppercase mb-2">
            Our Story
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            About Focus Optical
          </h1>
          <p className="text-blue-200 mt-3 text-base sm:text-lg max-w-xl">
            Independently owned and operated in Rochester Hills, Michigan since
            1984.
          </p>
        </div>
      </section>

      {/* Owner section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] relative max-w-sm mx-auto lg:mx-0">
                <Image
                  src="/images/tom.jpg"
                  alt="Tom Hamilton, Owner and Optician at Focus Optical, Rochester Hills MI"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 sm:-right-8 bg-blue-900 text-white rounded-2xl px-5 sm:px-6 py-3 sm:py-4 text-center shadow-xl">
                <p className="text-3xl sm:text-4xl font-bold">45+</p>
                <p className="text-xs text-blue-300 font-medium uppercase tracking-wider mt-1">
                  Years of Experience
                </p>
              </div>
            </div>

            <div className="mt-6 lg:mt-0">
              <div className="flex items-center gap-3 mb-2">
                <Award className="text-blue-600" size={20} />
                <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
                  Meet the Owner
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-5">
                Tom Hamilton
                <span className="block text-xl font-medium text-slate-500 mt-1">
                  Optician &amp; Owner
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Hello, my name is Tom Hamilton. I&apos;m an optician and I
                  own and operate Focus Optical. I opened the store in 1984 and
                  have been making eyeglasses since 1977 — over 45 years of
                  hands-on experience.
                </p>
                <p>
                  We are a full-service optical store, with eye examinations
                  performed by Dr. Diane Galper, Optometrist. We specialize in
                  making eyeglasses and we also sell contact lenses.
                </p>
                <p>
                  I always treat every pair of eyeglasses I make as if I were
                  making them for myself, guaranteeing you the best-made pair of
                  eyeglasses you have ever owned. I take pride in adjusting your
                  new pair of eyeglasses — definitely a lost art!
                </p>
                <p>
                  I also offer next day service on most prescriptions — because
                  I know you need your glasses as soon as possible.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Schedule an Appointment
                </Link>
                <a
                  href="tel:+12488528830"
                  className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  <Phone size={16} />
                  (248) 852-8830
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-10 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8 tracking-tight">
            Our History
          </h2>
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {milestones.map(({ year, label }) => (
              <div
                key={year}
                className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-slate-100 shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
                  {year}
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-2">
                Our Optometrist
              </p>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Dr. Diane Galper
                <span className="block text-xl font-medium text-slate-500 mt-1">
                  Optometrist
                </span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Eye examinations at Focus Optical are performed by Dr. Diane
                Galper, an experienced Optometrist committed to thorough,
                patient-centered care.
              </p>
              <p className="text-slate-600 leading-relaxed mb-7">
                Annual eye exams are recommended to assess your eyesight and
                detect changes early — especially as your eyes change with age.
                Dr. Galper also performs contact lens exams, ensuring a proper,
                comfortable fit for contact lens wearers.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                View Our Services
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/eye.jpg"
                alt="Eye exam at Focus Optical, Rochester Hills MI"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location info */}
      <section className="py-12 sm:py-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <MapPin size={20} />
              </div>
              <h3 className="font-semibold mb-1">Our Location</h3>
              <p className="text-blue-200 text-sm">
                2046 W Auburn Rd<br />
                Rochester Hills, MI 48309
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <Phone size={20} />
              </div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <a
                href="tel:+12488528830"
                className="text-blue-200 text-sm hover:text-white transition-colors"
              >
                (248) 852-8830
              </a>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <Calendar size={20} />
              </div>
              <h3 className="font-semibold mb-1">Schedule</h3>
              <Link
                href="/contact"
                className="text-blue-200 text-sm hover:text-white transition-colors"
              >
                Request an appointment →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
