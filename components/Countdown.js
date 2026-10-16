"use client";
import { useEffect, useState } from "react";

function diff(target) {
  const ms = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  };
}

export default function Countdown({ target }) {
  const [t, setT] = useState(null);

  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items = t
    ? [["days", t.days], ["hours", t.hours], ["minutes", t.minutes], ["seconds", t.seconds]]
    : [["days", "–"], ["hours", "–"], ["minutes", "–"], ["seconds", "–"]];

  return (
    <dl
      className="mx-auto mt-10 flex max-w-md justify-center divide-x divide-petal/70"
      aria-label="Time until the celebration"
    >
      {items.map(([label, value]) => (
        <div key={label} className="flex min-w-[4rem] flex-col px-3 sm:px-5">
          <dd
            key={`${label}-${value}`}
            className="animate-tick font-script text-3xl text-burgundy sm:text-4xl"
          >
            {typeof value === "number" ? String(value).padStart(2, "0") : value}
          </dd>
          <dt className="mt-1 text-xs uppercase tracking-[0.2em] text-rose">{label}</dt>
        </div>
      ))}
    </dl>
  );
}
