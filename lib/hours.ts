import { HOURS } from "@/lib/business";

/** The store's local time zone; status is computed in it regardless of the visitor's zone. */
export const STORE_TIME_ZONE = "America/Detroit";

export interface OpenStatus {
  isOpen: boolean;
  /** e.g. "Open now · closes 6:00 PM" or "Closed · opens 9:00 AM Monday" */
  text: string;
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/** "18:00" → "6:00 PM", "09:00" → "9:00 AM" */
export const formatTime = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${suffix}`;
};

export function getOpenStatus(now: Date = new Date()): OpenStatus {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: STORE_TIME_ZONE,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekday = get("weekday");
  const nowMinutes = Number(get("hour")) * 60 + Number(get("minute"));

  const todayIndex = HOURS.findIndex((h) => h.day === weekday);
  const today = HOURS[todayIndex];

  if (today?.opens && today.closes) {
    const opens = toMinutes(today.opens);
    const closes = toMinutes(today.closes);
    if (nowMinutes >= opens && nowMinutes < closes) {
      return { isOpen: true, text: `Open now · closes ${formatTime(today.closes)}` };
    }
    if (nowMinutes < opens) {
      return { isOpen: false, text: `Closed · opens ${formatTime(today.opens)} today` };
    }
  }

  for (let offset = 1; offset <= 7; offset++) {
    const next = HOURS[(todayIndex + offset) % HOURS.length];
    if (next.opens) {
      const when = offset === 1 ? "tomorrow" : next.day;
      return { isOpen: false, text: `Closed · opens ${formatTime(next.opens)} ${when}` };
    }
  }
  return { isOpen: false, text: "Closed" };
}
