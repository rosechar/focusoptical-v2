export interface AppointmentType {
  value: string;
  /** Full label used in emails and confirmations. */
  label: string;
  /** Short label used for the form's selectable chips. */
  short: string;
}

export const appointmentTypes = [
  { value: "eye", label: "Eye exam", short: "Eye exam" },
  { value: "contact", label: "Contact lens exam", short: "Contact exam" },
  { value: "retail", label: "Glasses & contacts", short: "New glasses" },
  { value: "adjustment", label: "Glasses adjustment", short: "Adjustment" },
] as const satisfies readonly AppointmentType[];

export type AppointmentValue = (typeof appointmentTypes)[number]["value"];

/** Booking page link, optionally with a service pre-selected on the form. */
export const bookingHref = (service?: AppointmentValue) =>
  service ? `/contact?service=${service}` : "/contact";

export const getAppointmentLabel = (value: string): string | undefined =>
  appointmentTypes.find((t) => t.value === value)?.label;

/** When the visitor would like to come in. The first entry is the form's default. */
export const preferredTimes: AppointmentType[] = [
  { value: "any", label: "Anytime", short: "Anytime" },
  { value: "morning", label: "Weekday mornings", short: "Mornings" },
  { value: "afternoon", label: "Weekday afternoons", short: "Afternoons" },
];

export const getPreferredTimeLabel = (value: string): string | undefined =>
  preferredTimes.find((t) => t.value === value)?.label;

