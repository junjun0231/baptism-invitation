import Reveal from "./Reveal";
import Divider from "./decor/Divider";
import Fairy from "./decor/Fairy";
import Sparkles from "./decor/Sparkles";
import { invitation } from "@/config/invitation";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 py-20 text-center">
      <Sparkles className="pointer-events-none absolute left-4 top-8 h-20 w-20 opacity-70 sm:left-12" />
      <Fairy
        pose="perch"
        delay={0.8}
        className="absolute bottom-4 right-3 h-24 w-24 opacity-85 sm:right-14 sm:h-28 sm:w-28"
      />

      <div className="relative mx-auto w-full max-w-[36rem]">
        <Reveal>
          <Divider />
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 font-script text-3xl text-burgundy [text-wrap:balance] sm:text-4xl">
            {invitation.thankYou}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 font-serif text-base text-burgundy/70">
            Questions? Call or text {invitation.contact}
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
