import { Nav } from "@/components/navigation/Nav";
import { Hero } from "@/components/hero/Hero";
import { GrowthStory } from "@/components/growth-story/GrowthStory";
import { GradientJourney } from "@/components/journey/GradientJourney";
import { Journey } from "@/components/journey/Journey";
import { Services } from "@/components/services/Services";
import { WhyUs } from "@/components/services/WhyUs";
import { Packages } from "@/components/packages/Packages";
import { Calculator } from "@/components/calculator/Calculator";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { FAQ } from "@/components/faq/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ContactForm } from "@/components/contact/ContactForm";
import { Footer } from "@/components/footer/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <GrowthStory />
        <GradientJourney />
        <Journey />
        <Services />
        <WhyUs />
        <Packages />
        <Calculator />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
