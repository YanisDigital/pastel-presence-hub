import { LanguageProvider } from "@/i18n/LanguageContext";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { MapSection } from "@/components/sections/MapSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-paper text-ink">
        <SiteNav />
        <Hero />
        <About />
        <Approach />
        <Services />
        <Contact />
        <MapSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default Index;
