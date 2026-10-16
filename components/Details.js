import Reveal from "./Reveal";
import Divider from "./decor/Divider";
import Fairy from "./decor/Fairy";
import Butterfly from "./decor/Butterfly";
import { invitation } from "@/config/invitation";

const card =
  "relative rounded-2xl border border-petal/60 bg-white/70 p-8 pt-10 shadow-card backdrop-blur-sm";

const petals = [0, 72, 144, 216, 288];

function Seal() {
  return (
    <span
      className="absolute -top-3.5 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-blushlight shadow-sm ring-1 ring-gold/30"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" focusable="false">
        <g fill="#F4B6C2">
          {petals.map((angle) => (
            <ellipse key={angle} cx="12" cy="7.4" rx="2.6" ry="4" transform={`rotate(${angle} 12 12)`} />
          ))}
        </g>
        <circle cx="12" cy="12" r="1.7" fill="#C9A24B" />
      </svg>
    </span>
  );
}

function VenueCard({ item }) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    item.mapQuery
  )}`;

  return (
    <div className={`${card} flex flex-col items-center text-center`}>
      <Seal />
      <span className="pointer-events-none absolute inset-3 rounded-xl border border-gold/25" aria-hidden="true" />
      <h3 className="relative font-script text-3xl text-burgundy sm:text-4xl">{item.label}</h3>
      <p className="relative mt-4 font-serif text-xl text-rose">{item.time}</p>
      <p className="relative mt-3 font-serif text-2xl text-burgundy">{item.venue}</p>
      <p className="relative mt-1 font-serif text-lg text-burgundy/80">{item.address}</p>
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-6 inline-block rounded-full bg-rose px-7 py-3 font-serif text-base font-medium text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-burgundy hover:shadow-card"
      >
        Open in Google Maps
      </a>
    </div>
  );
}

export default function Details() {
  return (
    <section className="relative overflow-hidden px-6 py-20 text-center">
      <Fairy
        pose="fly"
        flip
        delay={1.4}
        fly
        className="absolute right-2 top-6 h-20 w-20 opacity-80 sm:right-8 sm:h-24 sm:w-24"
      />

      <div className="relative mx-auto w-full max-w-[36rem]">
        <Reveal>
          <div className="flex items-center justify-center gap-4">
            <Butterfly className="h-7 w-9" delay={0.6} fly />
            <h2 className="font-script text-4xl text-burgundy [text-wrap:balance] sm:text-5xl">
              The Celebration
            </h2>
            <Butterfly className="h-7 w-9" delay={2.1} fly />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Divider className="mt-5" />
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Reveal delay={200}>
            <VenueCard item={invitation.ceremony} />
          </Reveal>
          <Reveal delay={320}>
            <VenueCard item={invitation.reception} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
