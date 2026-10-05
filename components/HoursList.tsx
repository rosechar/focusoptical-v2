"use client";

import { useSyncExternalStore } from "react";
import { HOURS } from "@/lib/business";
import { getStoreWeekday } from "@/lib/hours";

const noSubscribe = () => () => {};

// Weekly hours with today's row highlighted. Today is only known on the client (store time
// zone, current date), so the server snapshot is null and static HTML gets the plain list.
export default function HoursList() {
  const today = useSyncExternalStore(noSubscribe, getStoreWeekday, () => null);

  return (
    <ul className="flex flex-col gap-2 lg:gap-2.25 text-md">
      {HOURS.map(({ day, display, opens }) => {
        const isToday = day === today;
        return (
          <li
            key={day}
            aria-current={isToday ? "date" : undefined}
            className={`flex justify-between gap-3 ${
              isToday ? "-mx-2.5 -my-1.5 px-2.5 py-1.5 rounded-lg bg-accent-soft" : ""
            }`}
          >
            <span className={isToday ? "font-bold text-ink" : "text-body"}>{day}</span>
            <span className={`font-semibold ${opens ? "" : "text-closed"}`}>{display}</span>
          </li>
        );
      })}
    </ul>
  );
}
