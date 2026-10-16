import Reveal from "./Reveal";
import Fairy from "./decor/Fairy";
import { invitation } from "@/config/invitation";

const petals = [0, 72, 144, 216, 288];

function Blossom({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <g fill="#F4B6C2">
        {petals.map((angle) => (
          <ellipse key={angle} cx="12" cy="7.4" rx="2.6" ry="4" transform={`rotate(${angle} 12 12)`} />
        ))}
      </g>
      <circle cx="12" cy="12" r="1.7" fill="#C9A24B" />
    </svg>
  );
}

export default function Portrait() {
  const { photo } = invitation;

  return (
    <section className="relative px-6 py-16 text-center">
      <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[24rem]">
        <Reveal>
          <figure className="relative rounded-3xl border border-gold/40 bg-white/60 p-3 shadow-card backdrop-blur-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-b from-blushlight via-blush to-petal/40">
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6">
                  <span
                    className="pointer-events-none absolute inset-4 rounded-xl border border-dashed border-gold/40"
                    aria-hidden="true"
                  />
                  <Blossom className="h-12 w-12 opacity-80" />
                  <p className="font-script text-2xl text-rose/90">Your photo here</p>
                  <p className="max-w-[14rem] font-serif text-sm text-burgundy/60">
                    A portrait of {photo.alt} will appear in this frame.
                  </p>
                </div>
              )}
            </div>

            <Blossom className="absolute -left-3 -top-3 h-7 w-7" />
            <Blossom className="absolute -right-3 -top-3 h-7 w-7" />
            <Blossom className="absolute -bottom-3 -left-3 h-7 w-7" />
            <Blossom className="absolute -bottom-3 -right-3 h-7 w-7" />
          </figure>

          <figcaption className="mt-5 font-serif text-sm uppercase tracking-[0.3em] text-rose">
            {photo.alt}
          </figcaption>
        </Reveal>

        <Fairy
          pose="perch"
          delay={1.1}
          className="absolute -right-6 -top-8 h-16 w-16 opacity-85 sm:-right-10 sm:h-20 sm:w-20"
        />
      </div>
    </section>
  );
}
