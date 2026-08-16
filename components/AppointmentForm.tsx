"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Button from "@/components/Button";
import { appointmentTypes } from "@/lib/appointments";
import { emailRegex, isValidPhone } from "@/lib/validation";

interface FormState {
  name: string;
  phone: string;
  email: string;
  appointment: string;
  optIn: boolean;
  /** Honeypot: hidden from people, filled by bots. Must stay empty. */
  website: string;
}

interface FieldErrors {
  name?: string;
  phone?: string;
  email?: string;
}

const inputClass = (hasError?: string) =>
  `w-full px-3.5 py-3.5 rounded-xl border text-md text-ink placeholder:text-black/55 bg-field transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent ${
    hasError ? "border-closed bg-closed-soft" : "border-field-border"
  }`;

const labelClass = "block text-xs lg:text-sm font-bold text-secondary";

const chipClass = (selected: boolean) =>
  `cursor-pointer select-none rounded-full px-3.5 py-2.25 lg:px-4 lg:py-2.5 text-sm font-semibold border-1.5 transition-colors has-focus-visible:ring-2 has-focus-visible:ring-accent/40 has-focus-visible:ring-offset-2 ${
    selected
      ? "bg-accent text-white border-accent"
      : "bg-white text-secondary border-field-border hover:border-accent"
  }`;

const cardClass = "bg-white border border-hairline rounded-2.5xl shadow-card";

export default function AppointmentForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    appointment: "eye",
    optIn: true,
    website: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success") {
      successRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      successRef.current?.focus({ preventScroll: true });
    }
  }, [status]);

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name";
    if (!isValidPhone(form.phone))
      next.phone = "Please enter a valid phone number";
    if (form.email.trim() && !emailRegex.test(form.email.trim()))
      next.email = "Please enter a valid email address";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
    } catch (err) {
      console.error("Appointment request error:", err);
      setStatus("error");
    }
  };

  const fieldError = (field: keyof FieldErrors) => {
    const message = errors[field];
    return message ? (
      <p
        id={`${field}-error`}
        className="mt-1.5 text-xs text-closed flex items-center gap-1"
      >
        <AlertCircle size={12} />
        {message}
      </p>
    ) : null;
  };

  if (status === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        className={`${cardClass} text-center px-4.5 py-9.5 lg:px-6 lg:py-12 focus:outline-none`}
      >
        <div
          aria-hidden
          className="mx-auto mb-3.5 lg:mb-4 flex h-14 w-14 lg:h-15 lg:w-15 items-center justify-center rounded-full bg-accent-soft text-accent text-3xl"
        >
          ✓
        </div>
        <h2 className="text-xl lg:text-2xl font-extrabold text-ink mb-1.5 lg:mb-2">
          Thanks, we&apos;ve got it.
        </h2>
        <p className="text-sm lg:text-md text-body leading-normal mb-4.5 lg:mb-5">
          We&apos;ll call shortly to confirm your time. Need us sooner, give us
          a ring.
        </p>
        <Button href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`${cardClass} px-5 py-5.5 lg:p-7 flex flex-col gap-4.5 lg:gap-5`}
    >
      <div className="grid gap-4.5 lg:grid-cols-2 lg:gap-4">
        <div>
          <label htmlFor="name" className={`${labelClass} mb-1.75 lg:mb-2`}>
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass(errors.name)}
          />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor="phone" className={`${labelClass} mb-1.75 lg:mb-2`}>
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(248) 555-0100"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass(errors.phone)}
          />
          {fieldError("phone")}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={`${labelClass} mb-1.75 lg:mb-2`}>
          Email <span className="text-faint font-normal">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass(errors.email)}
        />
        {fieldError("email")}
      </div>

      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={form.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <fieldset>
        <legend className={`${labelClass} mb-2.25 lg:mb-2.5`}>Service</legend>
        <div className="flex flex-wrap gap-2 lg:gap-2.25">
          {appointmentTypes.map(({ value, short }) => {
            const selected = form.appointment === value;
            return (
              <label key={value} className={chipClass(selected)}>
                <input
                  type="radio"
                  name="appointment"
                  value={value}
                  checked={selected}
                  onChange={handleChange}
                  className="sr-only"
                />
                {short}
              </label>
            );
          })}
        </div>
      </fieldset>

      <label htmlFor="optIn" className="flex items-start gap-3 cursor-pointer">
        <input
          id="optIn"
          name="optIn"
          type="checkbox"
          checked={form.optIn}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, optIn: e.target.checked }))
          }
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-field-border accent-accent cursor-pointer"
        />
        <span className="text-sm text-body leading-relaxed">
          Email me about deals and new frames now and then.
        </span>
      </label>

      {status === "error" && (
        <div className="flex items-center gap-2.5 p-4 rounded-xl bg-closed-soft border border-closed/20 text-closed text-sm">
          <AlertCircle size={16} className="shrink-0" />
          <span>
            Something went wrong. Please try again or call us at{" "}
            <a href={BUSINESS.phoneHref} className="underline font-medium">
              {BUSINESS.phoneDisplay}
            </a>
            .
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
        className="w-full flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-bold text-md lg:text-base py-4 rounded-xl transition-colors"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          "Request my appointment"
        )}
      </button>

      <p className="hidden lg:block text-sm text-faint text-center">
        We&apos;ll only use your number to confirm this visit.
      </p>
    </form>
  );
}
