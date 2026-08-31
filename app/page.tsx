import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { PricingBanner } from "@/components/PricingBanner";
import { Process } from "@/components/Process";
import { Deliverables } from "@/components/Deliverables";
import { Testimonials } from "@/components/Testimonials";
import { Qualify } from "@/components/Qualify";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <PricingBanner />
      <Process />
      <Deliverables />
      <Testimonials />
      <Qualify />
      <CTA />
      <Footer />
    </main>
  );
}
