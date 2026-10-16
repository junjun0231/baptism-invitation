import Reveal from "./Reveal";
import Divider from "./decor/Divider";
import Butterfly from "./decor/Butterfly";
import { BlossomIcon } from "./decor/Blossom";
import { invitation } from "@/config/invitation";

function NameList({ label, names }) {
  return (
    <div className="text-center">
      <h3 className="font-serif text-sm uppercase tracking-[0.35em] text-rose">{label}</h3>
      <ul className="mt-5 space-y-2">
        {names.map((name, i) => (
          <li key={name} className="flex flex-col items-center">
            <span className="font-serif text-xl text-burgundy sm:text-2xl">{name}</span>
            {i < names.length - 1 && (
              <span className="mt-3 h-1.5 w-1.5 rotate-45 bg-gold/70" aria-hidden="true" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SponsorCard({ item }) {
  if (!item.photo) {
    return <NameList label={item.label} names={item.names} />;
  }

  const alt = `${item.label}: ${item.names.join(", ")}`;

  return (
    <figure className="relative rounded-3xl border border-gold/40 bg-white/60 p-3 shadow-card backdrop-blur-sm">
      <a
        href={item.photo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View the full list of ${item.label} (opens in a new tab)`}
        className="block transition-transform hover:-translate-y-0.5"
      >
        <div className="relative aspect-[5/7] overflow-hidden rounded-2xl bg-gradient-to-b from-blushlight via-blush to-petal/40">
          <img src={item.photo} alt={alt} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </a>

      <BlossomIcon uid="sponsor-frame" className="absolute -left-3 -top-3 h-7 w-7" />
      <BlossomIcon uid="sponsor-frame" className="absolute -right-3 -top-3 h-7 w-7" />
      <BlossomIcon uid="sponsor-frame" className="absolute -bottom-3 -left-3 h-7 w-7" />
      <BlossomIcon uid="sponsor-frame" className="absolute -bottom-3 -right-3 h-7 w-7" />
    </figure>
  );
}

export default function Sponsors() {
  const { sponsors } = invitation;

  return (
    <section className="relative overflow-hidden px-6 py-20 text-center">
      <div className="relative mx-auto w-full max-w-[44rem]">
        <Reveal>
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <Butterfly className="h-5 w-6 sm:h-7 sm:w-9" delay={0.9} fly />
            <h2 className="whitespace-nowrap font-script text-3xl text-burgundy sm:text-4xl md:text-5xl">
              {sponsors.heading}
            </h2>
            <Butterfly className="h-5 w-6 sm:h-7 sm:w-9" delay={2.4} fly />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Divider className="mt-5" />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[40rem] gap-10 sm:grid-cols-2 sm:gap-8">
          <Reveal delay={200}>
            <SponsorCard item={sponsors.ninong} />
          </Reveal>
          <Reveal delay={320}>
            <SponsorCard item={sponsors.ninang} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
