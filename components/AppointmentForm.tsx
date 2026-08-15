"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { appointmentTypes, bestTimes, type BestTime } from "@/lib/appointments";
import { emailRegex, isValidPhone } from "@/lib/validation";

interface FormState {
  name: string;
  phone: string;
  email: string;
  appointment: string;
  bestTime: BestTime;
  optIn: boolean;
}

interface FieldErrors {
  name?: string;
  phone?: string;
  email?: string;
}

const inputClass = (hasError?: string) =>
  `w-full px-3.5 py-3.5 rounded-[11px] border text-[15px] text-ink placeholder:text-black/35 bg-field transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent ${
    hasError ? "border-closed bg-[#fdf3f3]" : "border-field-border hover:border-[#c4caca]"
  }`;

const labelClass = "block text-[12.5px] lg:text-[13px] font-bold text-secondary";

const chipClass = (selected: boolean) =>
  `cursor-pointer select-none rounded-full px-3.5 py-[9px] lg:px-4 lg:py-2.5 text-[13px] lg:text-sm font-semibold border-[1.5px] transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent/40 has-[:focus-visible]:ring-offset-2 ${
    selected
      ? "bg-accent text-white border-accent"
      : "bg-white text-secondary border-[#dde1e1] hover:border-accent"
  }`;

const cardClass =
  "bg-white border border-hairline rounded-[18px] lg:rounded-[20px] shadow-[0_2px_10px_rgba(20,24,26,0.05)]";

export default function AppointmentForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    appointment: "eye",
    bestTime: "Mornings",
    optIn: true,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success") {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name";
    if (!isValidPhone(form.phone)) next.phone = "Please enter a valid phone number";
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
        body: JSON.stringify({ ...form, details: "" }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
    } catch (err) {
      console.error("Appointment request error:", err);
      setStatus("error");
    }
  };

  const fieldError = (message?: string) =>
    message ? (
      <p className="mt-1.5 text-xs text-closed flex items-center gap-1">
        <AlertCircle size={12} />
        {message}
      </p>
    ) : null;

  if (status === "success") {
    return (
      <div
        ref={successRef}
        className={`${cardClass} text-center px-[18px] py-[38px] lg:px-6 lg:py-12`}
      >
        <div
          aria-hidden
          className="mx-auto mb-3.5 lg:mb-4 flex h-14 w-14 lg:h-[60px] lg:w-[60px] items-center justify-center rounded-full bg-accent-soft text-accent text-[28px] lg:text-[30px]"
        >
          ✓
        </div>
        <h2 className="font-display text-[22px] lg:text-2xl font-extrabold text-ink mb-1.5 lg:mb-2">
          Thanks, we&apos;ve got it.
        </h2>
        <p className="text-[14.5px] lg:text-[15px] text-body leading-normal mb-[18px] lg:mb-5">
          We&apos;ll call shortly to confirm your time. Need us sooner, give us a
          ring.
        </p>
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold text-[15px] lg:text-base px-[22px] py-3 lg:px-6 lg:py-[13px] rounded-[11px] lg:rounded-xl transition-colors"
        >
          {BUSINESS.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`${cardClass} px-5 py-[22px] lg:p-7 flex flex-col gap-[18px] lg:gap-5`}
    >
      <div className="grid gap-[18px] lg:grid-cols-2 lg:gap-4">
        <div>
          <label htmlFor="name" className={`${labelClass} mb-[7px] lg:mb-2`}>
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
            className={inputClass(errors.name)}
          />
          {fieldError(errors.name)}
        </div>
        <div>
          <label htmlFor="phone" className={`${labelClass} mb-[7px] lg:mb-2`}>
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
            className={inputClass(errors.phone)}
          />
          {fieldError(errors.phone)}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={`${labelClass} mb-[7px] lg:mb-2`}>
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
          className={inputClass(errors.email)}
        />
        {fieldError(errors.email)}
      </div>

      <fieldset>
        <legend className={`${labelClass} mb-[9px] lg:mb-2.5`}>What do you need?</legend>
        <div className="flex flex-wrap gap-2 lg:gap-[9px]">
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

      <fieldset>
        <legend className={`${labelClass} mb-[9px] lg:mb-2.5`}>Best time for our call</legend>
        <div className="flex flex-wrap gap-2 lg:gap-[9px]">
          {bestTimes.map((time) => {
            const selected = form.bestTime === time;
            return (
              <label key={time} className={chipClass(selected)}>
                <input
                  type="radio"
                  name="bestTime"
                  value={time}
                  checked={selected}
                  onChange={handleChange}
                  className="sr-only"
                />
                {time}
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
          onChange={(e) => setForm((prev) => ({ ...prev, optIn: e.target.checked }))}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-field-border accent-accent cursor-pointer"
        />
        <span className="text-sm text-body leading-relaxed">
          Email me about deals and new frames now and then.
        </span>
      </label>

      {status === "error" && (
        <div className="flex items-center gap-2.5 p-4 rounded-xl bg-[#fdf3f3] border border-closed/20 text-closed text-sm">
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
        className="w-full flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-bold text-[15.5px] lg:text-base py-4 rounded-xl transition-colors"
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

      <p className="hidden lg:block text-[13px] text-[#8a9293] text-center">
        We&apos;ll only use your number to confirm this visit.
      </p>
    </form>
  );
}
