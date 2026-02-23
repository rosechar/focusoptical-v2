"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send, Loader2, CheckCircle, AlertCircle, Phone } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  appointment: string;
  details: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const appointmentTypes = [
  { value: "eye", label: "Eye Exam" },
  { value: "contact", label: "Contact Lens Exam" },
  { value: "adjustment", label: "Glasses Adjustment" },
  { value: "retail", label: "Glasses & Contact Retail" },
];

const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;

export default function AppointmentForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    appointment: "eye",
    details: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (): boolean => {
    const newErrors: FieldErrors = {};
    if (!form.name || form.name.trim().length < 6) {
      newErrors.name = "Please enter your full name (at least 6 characters)";
    }
    if (!form.email || !emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.phone || !phoneRegex.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          appointment: appointmentTypes.find((t) => t.value === form.appointment)?.label,
          details: form.details || "No additional details provided.",
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", phone: "", appointment: "eye", details: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
          <CheckCircle className="text-green-600" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3">
          Appointment Request Sent!
        </h2>
        <p className="text-slate-600 max-w-sm leading-relaxed mb-6">
          Thank you for your appointment request. We will contact you within one
          business day to confirm your appointment.
        </p>
        <a
          href="tel:+12488528830"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
        >
          <Phone size={14} />
          Call Us Instead
        </a>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="mb-1">
        <h2 className="text-xl font-bold text-slate-900">Request an Appointment</h2>
        <p className="text-sm text-slate-500 mt-1">
          All fields marked with <span className="text-red-500">*</span> are required.
        </p>
      </div>
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Jane Smith"
          autoComplete="name"
          className={`w-full px-4 py-3 rounded-xl border text-slate-900 placeholder-slate-400 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.name
              ? "border-red-300 bg-red-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          autoComplete="email"
          className={`w-full px-4 py-3 rounded-xl border text-slate-900 placeholder-slate-400 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.email
              ? "border-red-300 bg-red-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(248) 555-0100"
          autoComplete="tel"
          className={`w-full px-4 py-3 rounded-xl border text-slate-900 placeholder-slate-400 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.phone
              ? "border-red-300 bg-red-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        />
        {errors.phone && (
          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.phone}
          </p>
        )}
      </div>

      {/* Appointment type */}
      <div>
        <label
          htmlFor="appointment"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Appointment Type
        </label>
        <select
          id="appointment"
          name="appointment"
          value={form.appointment}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-slate-300 cursor-pointer"
        >
          {appointmentTypes.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Details */}
      <div>
        <label
          htmlFor="details"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Additional Details{" "}
          <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="details"
          name="details"
          value={form.details}
          onChange={handleChange}
          rows={4}
          placeholder="Anything else we should know — preferred days/times, insurance questions, etc."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-slate-300 resize-none"
        />
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-center gap-2.5 p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm">
          <AlertCircle size={16} className="shrink-0" />
          <span>
            Something went wrong. Please try again or call us at{" "}
            <a href="tel:+12488528830" className="underline font-medium">
              (248) 852-8830
            </a>
            .
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending Request...
          </>
        ) : (
          <>
            <Send size={16} />
            Submit Appointment Request
          </>
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        We will contact you within one business day to confirm your appointment.
      </p>
    </form>
  );
}
