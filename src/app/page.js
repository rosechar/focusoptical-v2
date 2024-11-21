import { Calendar, Eye, Glasses, Wrench } from "lucide-react";
import ServiceCard from "@/components/home/ServiceCard";

export default function Home() {
  return (
    <>
      {/* Hero Section with Overlay */}
      <div className="relative">
        <div className="grid grid-cols-2 w-full">
          <img
            src="/home3.jpeg"
            alt="Store Front"
            className="h-[25vh] md:h-[33vh] w-full object-cover opacity-50"
          />
          <img
            src="/shop.jpeg"
            alt="Lab Work"
            className="h-[25vh] md:h-[33vh] w-full object-cover opacity-50"
          />
          <img
            src="/tom.jpg"
            alt="Lab Work"
            className="h-[25vh] md:h-[33vh] w-full object-cover opacity-50"
          />
          <img
            src="/home3.jpeg"
            alt="Store Interior"
            className="h-[25vh] md:h-[33vh] w-full object-cover opacity-50"
          />
        </div>

        {/* Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-blue-500 text-white px-4 md:px-8 py-3 md:py-4 rounded-lg flex items-center space-x-2 md:space-x-3 hover:bg-blue-600 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <Calendar className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-base md:text-xl">
              SCHEDULE AN APPOINTMENT
            </span>
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-8">SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard Icon={Eye} title="Eye Exam" />
            <ServiceCard Icon={Eye} title="Contact Lens Exam" />
            <ServiceCard Icon={Glasses} title="Glasses & Contacts Retail" />
            <ServiceCard Icon={Wrench} title="Free Adjustments" />
          </div>
        </div>
      </div>
    </>
  );
}
