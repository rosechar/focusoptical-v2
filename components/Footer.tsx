import Link from "next/link";
import { Phone, MapPin, Clock, ExternalLink, Star } from "lucide-react";

const hours = [
  { day: "Monday", time: "9:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 7:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 5:30 PM" },
  { day: "Thursday", time: "9:00 AM – 6:00 PM" },
  { day: "Friday", time: "9:00 AM – 5:00 PM" },
  { day: "Saturday", time: "9:00 AM – 12:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const serviceAreas = [
  "Rochester Hills",
  "Rochester",
  "Troy",
  "Lake Orion",
  "Royal Oak",
  "Bloomfield Hills",
  "Auburn Hills",
  "Sterling Heights",
  "Shelby Twp.",
  "Pontiac",
  "Clarkston",
  "Waterford",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Schedule Appointment" },
  { href: "/insurance", label: "Insurance & Pricing" },
  { href: "/service-areas", label: "Service Areas" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold text-white mb-0.5">
              Focus Optical
            </h2>
            <p className="text-blue-400 text-sm mb-4 font-medium">
              Since 1984 · Rochester Hills, MI
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Your local, independently owned optical store in Rochester Hills.
              We specialize in making eyeglasses with over 45 years of
              experience — and we treat every pair as if it were our own.
            </p>
            <a
              href="tel:+12488528830"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-300 transition-colors mb-3"
            >
              <Phone size={15} />
              (248) 852-8830
            </a>
            <br />
            <a
              href="https://maps.google.com/?q=2046+W+Auburn+Rd,+Rochester+Hills,+MI+48309"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>
                2046 W Auburn Rd
                <br />
                Rochester Hills, MI 48309
              </span>
            </a>
            <div className="mt-5">
              <a
                href="https://g.co/kgs/yiVrZD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <span className="ml-1">Read our Google Reviews</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

          {/* Hours column */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Clock size={15} />
              Store Hours
            </h3>
            <ul className="space-y-2 text-sm">
              {hours.map(({ day, time }) => (
                <li
                  key={day}
                  className="flex justify-between gap-3 text-slate-400"
                >
                  <span className="text-slate-300">{day}</span>
                  <span
                    className={
                      time === "Closed" ? "text-slate-500 italic" : ""
                    }
                  >
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas column — SEO value */}
          <div>
            <h3 className="text-white font-semibold mb-4">Areas We Serve</h3>
            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              Proudly serving patients across Oakland County and nearby
              communities:
            </p>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5">
              {serviceAreas.map((area) => (
                <li key={area} className="text-xs text-slate-400">
                  {area}
                </li>
              ))}
            </ul>
            <Link
              href="/service-areas"
              className="inline-block mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              View all service areas →
            </Link>
          </div>
        </div>
      </div>

      {/* SEO keyword strip */}
      <div className="border-t border-slate-800 py-5">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs text-slate-700 text-center leading-relaxed">
            Focus Optical · Optician · Eye Exams · Prescription Glasses ·
            Contact Lenses · Sunglasses · Frame Adjustments · Rochester Hills MI
            · Rochester MI · Troy MI · Lake Orion MI · Royal Oak MI · Bloomfield
            Hills MI · Auburn Hills MI · Oakland County MI · 48309 · 48307 ·
            48083
          </p>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-slate-800 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <span>
            © {new Date().getFullYear()} Focus Optical. All rights reserved.
          </span>
          <span>
            2046 W Auburn Rd, Rochester Hills, MI 48309 · (248) 852-8830
          </span>
        </div>
      </div>
    </footer>
  );
}
