export interface AppointmentType {
  value: string;
  label: string;
}

export const appointmentTypes: AppointmentType[] = [
  { value: "eye", label: "Eye Exam" },
  { value: "contact", label: "Contact Lens Exam" },
  { value: "adjustment", label: "Glasses Adjustment" },
  { value: "retail", label: "Glasses & Contact Retail" },
];

export const getAppointmentLabel = (value: string): string | undefined =>
  appointmentTypes.find((t) => t.value === value)?.label;
