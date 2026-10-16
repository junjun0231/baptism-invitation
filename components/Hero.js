import Reveal from "./Reveal";
import Divider from "./decor/Divider";
import Fairy from "./decor/Fairy";
import Monogram from "./decor/Monogram";
import Sparkles from "./decor/Sparkles";
import Butterfly from "./decor/Butterfly";
import Countdown from "./Countdown";
import { invitation } from "@/config/invitation";
import { formatLongDate } from "@/lib/format";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <Fairy
        pose="hover"
        delay={0.5}
        fly
        className="absolute right-2 top-16 h-24 w-24 opacity-90 sm:right-10 sm:top-24 sm:h-32 sm:w-32"
      />
      <Sparkles className="pointer-events-none absolute left-1 top-20 h-24 w-24 opacity-80 sm:left-8 sm:h-28 sm:w-28" />

      <div className="relative mx-auto w-full max-w-[36rem]">
        <Reveal delay={0} className="flex justify-center">
          <Monogram letter="O" className="h-20 w-20 text-6xl" />
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 text-base uppercase tracking-[0.35em] text-rose sm:text-lg">
            {invitation.opening}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <h1 className="mt-4 animate-shimmer bg-shine bg-[length:200%_100%] bg-clip-text pb-3 font-script text-5xl leading-[1.15] text-transparent sm:text-6xl md:text-7xl">
            {invitation.titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
        </Reveal>

        <Reveal delay={360}>
          <Divider className="mt-4" />
        </Reveal>

        <Reveal delay={460}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <Butterfly className="h-8 w-10 sm:h-10 sm:w-12" delay={0} fly />
            <p className="font-serif text-2xl text-burgundy sm:text-3xl">
              {formatLongDate(invitation.eventDate)}
            </p>
            <Butterfly className="h-8 w-10 sm:h-10 sm:w-12" delay={1.3} fly />
          </div>
        </Reveal>

        <Reveal delay={580}>
          <Countdown target={invitation.eventDate} />
        </Reveal>
      </div>
    </section>
  );
}
