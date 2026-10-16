"use client";
import Reveal from "./Reveal";
import { invitation } from "@/config/invitation";

function toIcs(date) {
  return new Date(date).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function downloadCalendar() {
  const start = new Date(invitation.eventDate);
  const end = new Date(start.getTime() + 2 * 3600000);
  const { ceremony } = invitation;
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Baptism Invitation//EN",
    "BEGIN:VEVENT",
    `UID:${toIcs(start)}@invitation`,
    `DTSTAMP:${toIcs(new Date())}`,
    `DTSTART:${toIcs(start)}`,
    `DTEND:${toIcs(end)}`,
    `SUMMARY:${ceremony.label} — ${invitation.childName}`,
    `LOCATION:${ceremony.venue}, ${ceremony.address}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "baptism-and-1st-birthday.ics";
  a.click();
  URL.revokeObjectURL(url);
}

export default function AddToCalendar() {
  return (
    <section className="px-6 pb-20 text-center">
      <div className="mx-auto w-full max-w-[36rem]">
        <Reveal>
          <button
            type="button"
            onClick={downloadCalendar}
            className="inline-block rounded-full border border-rose px-8 py-3 font-serif text-base font-medium text-rose transition-all hover:-translate-y-0.5 hover:bg-rose hover:text-white hover:shadow-soft"
          >
            Add to Calendar
          </button>
        </Reveal>
      </div>
    </section>
  );
}
