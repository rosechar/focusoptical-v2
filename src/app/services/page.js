// app/services/page.js
"use client";
import { useState } from "react";
import { Calendar, Eye, Glasses, Wrench } from "lucide-react";

const SERVICES = [
  {
    id: "eye-exams",
    title: "Eye Exams",
    icon: Eye,
    description:
      "It is recommended to get an eye exam annually to assess your eyesight, especially as your eyes change as you age.",
  },
  {
    id: "contact-exams",
    title: "Contact Exams",
    icon: Eye,
    description:
      "Professional contact lens examinations to ensure the perfect fit and prescription for your contact lenses.",
  },
  {
    id: "adjustments",
    title: "Free Adjustments",
    icon: Wrench,
    description:
      "Complimentary adjustments for the lifetime of your frames to ensure comfort and proper fit.",
  },
  {
    id: "retail",
    title: "Glasses & Contacts Retail",
    icon: Glasses,
    description:
      "Wide selection of frames and contact lenses to suit your style and vision needs.",
  },
];

function ServiceTab({ icon: Icon, label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors
      ${
        isActive
          ? "bg-blue-500 text-white"
          : "bg-gray-800 text-white hover:bg-gray-700"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(SERVICES[0]);

  return (
    <div className="min-h-screen text-white pb-12">
      <div className=" px-4 py-12">
        <h1 className="text-4xl md:text-5xl text-center mb-8">Services</h1>

        {/* Service Tabs */}
        <div className="flex flex-wrap gap-3 justify-center max-w-4xl  mb-12">
          {SERVICES.map((service) => (
            <ServiceTab
              key={service.id}
              icon={service.icon}
              label={service.title}
              isActive={activeService.id === service.id}
              onClick={() => setActiveService(service)}
            />
          ))}
        </div>

        {/* Content Section */}
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl mb-6">{activeService.title}</h2>
          <p className="text-gray-300 mb-8">{activeService.description}</p>

          {/* Schedule Button */}
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2  hover:bg-blue-600 transition-colors">
            <Calendar className="w-5 h-5" />
            <span>SCHEDULE AN APPOINTMENT</span>
          </button>
        </div>
      </div>
    </div>
  );
}
