import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import DestinationsSection from "@/components/DestinationsSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingContacts from "@/components/FloatingContacts";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <DestinationsSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingContacts />
    </div>
  );
};

export default Index;
