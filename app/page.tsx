import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { Diagnostic } from "@/components/Diagnostic";
import { PricingBanner } from "@/components/PricingBanner";
import { Process } from "@/components/Process";
import { Deliverables } from "@/components/Deliverables";
import { Platform } from "@/components/Platform";
import { Testimonials } from "@/components/Testimonials";
import { Qualify } from "@/components/Qualify";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { BookingDrawer } from "@/components/BookingDrawer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <Diagnostic />
      <PricingBanner />
      <Process />
      <Deliverables />
      <Platform />
      <Testimonials />
      <Qualify />
      <FAQ />
      <CTA />
      <Footer />
      <BookingDrawer />
    </main>
  );
}
