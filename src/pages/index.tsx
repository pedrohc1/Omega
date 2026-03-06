import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <footer className="bg-omega-dark py-6 text-center">
        <p className="text-omega-pale/70 text-sm">
          © 2026 ÔMEGA Serviços Especializados de Engenharia. Todos os direitos
          reservados.
        </p>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
