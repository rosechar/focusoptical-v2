export interface AppointmentType {
  value: string;
  /** Full label used in emails and confirmations. */
  label: string;
  /** Short label used for the form's selectable chips. */
  short: string;
}

export const appointmentTypes: AppointmentType[] = [
  { value: "eye", label: "Eye exam", short: "Eye exam" },
  { value: "contact", label: "Contact lens exam", short: "Contact exam" },
  { value: "retail", label: "Glasses & contacts", short: "New glasses" },
  { value: "adjustment", label: "Glasses adjustment", short: "Adjustment" },
];

export const getAppointmentLabel = (value: string): string | undefined =>
  appointmentTypes.find((t) => t.value === value)?.label;

/** "Best time for our call" options. Stored and emailed as the label itself. */
export const bestTimes = ["Mornings", "Afternoons", "Saturday"] as const;
export type BestTime = (typeof bestTimes)[number];

export const isBestTime = (value: unknown): value is BestTime =>
  typeof value === "string" && (bestTimes as readonly string[]).includes(value);
