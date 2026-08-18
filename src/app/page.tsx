import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { TrustMarquee } from "@/components/ui/TrustMarquee";
import { Divider } from "@/components/ui/Divider";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustMarquee />
        <Services />
        <Divider from="paper" to="ink" />
        <Process />
        <Divider from="ink" to="paper" />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
