import CornerFlowers from "@/components/decor/CornerFlowers";
import Fairy from "@/components/decor/Fairy";
import Petals from "@/components/decor/Petals";
import FairyDust from "@/components/decor/FairyDust";
import PaperTexture from "@/components/decor/PaperTexture";
import Hero from "@/components/Hero";
import Portrait from "@/components/Portrait";
import Details from "@/components/Details";
import Sponsors from "@/components/Sponsors";
import AddToCalendar from "@/components/AddToCalendar";
import BackgroundMusic from "@/components/BackgroundMusic";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <CornerFlowers className="absolute -left-6 -top-6 h-40 w-40 sm:h-56 sm:w-56" />
        <CornerFlowers className="absolute -right-6 -top-6 h-40 w-40 -scale-x-100 sm:h-56 sm:w-56" />
        <CornerFlowers className="absolute -bottom-6 -left-6 h-40 w-40 -scale-y-100 sm:h-56 sm:w-56" />
        <CornerFlowers className="absolute -bottom-6 -right-6 h-40 w-40 -scale-100 sm:h-56 sm:w-56" />

        <Fairy
          pose="perch"
          delay={1}
          fly
          className="absolute right-8 top-36 h-16 w-16 opacity-75 sm:right-20 sm:top-44 sm:h-20 sm:w-20"
        />

        <FairyDust />
        <Petals />
      </div>

      <PaperTexture />

      <Hero />
      <Portrait />
      <Details />
      <Sponsors />
      <AddToCalendar />
      <Footer />

      <BackgroundMusic />
    </main>
  );
}
