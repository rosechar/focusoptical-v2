"use client";

import React from "react";
import AppointmentForm from "@/components/AppointmentForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 px-4 py-12 text-gray-100 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-light tracking-wide">
          Schedule an Appointment
        </h1>
        <p className="mt-3 text-lg text-gray-400">
          Fill out this form and we will contact you to confirm your appointment
        </p>
      </div>
      <div className="mt-12">
        <AppointmentForm />
      </div>
    </div>
  );
};

export default Contact;
