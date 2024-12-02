"use client";

import React, { useState } from "react";
import { useFormState } from "react-dom";
import { Loader2 } from "lucide-react";

const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentType: "Eye Exam",
    details: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Handle successful submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          className={`w-full rounded-lg border bg-transparent p-3 text-gray-100 outline-none transition-colors placeholder:text-gray-500 focus:border-blue-400 ${
            errors.name ? "border-red-500" : "border-gray-700"
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleChange}
          className={`w-full rounded-lg border bg-transparent p-3 text-gray-100 outline-none transition-colors placeholder:text-gray-500 focus:border-blue-400 ${
            errors.email ? "border-red-500" : "border-gray-700"
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full rounded-lg border bg-transparent p-3 text-gray-100 outline-none transition-colors placeholder:text-gray-500 focus:border-blue-400 ${
            errors.phone ? "border-red-500" : "border-gray-700"
          }`}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
        )}
      </div>

      <div>
        <select
          name="appointmentType"
          value={formData.appointmentType}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-700 bg-transparent p-3 text-gray-100 outline-none transition-colors focus:border-blue-400"
        >
          <option value="Eye Exam">Eye Exam</option>
          <option value="Contact Lens Fitting">Contact Lens Fitting</option>
          <option value="Glasses Fitting">Glasses Fitting</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <textarea
          name="details"
          placeholder="Additional Details"
          value={formData.details}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-lg border border-gray-700 bg-transparent p-3 text-gray-100 outline-none transition-colors placeholder:text-gray-500 focus:border-blue-400"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-blue-400 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <Loader2 className="mr-2 size-5 animate-spin" />
            Submitting...
          </div>
        ) : (
          "SUBMIT"
        )}
      </button>
    </form>
  );
};

export default AppointmentForm;
