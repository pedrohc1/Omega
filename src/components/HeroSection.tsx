import heroImg from "@/assets/hero-inspection.webp";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Engenheiro realizando inspeção predial"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-omega-dark/75" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-4 animate-fade-in-up"
          style={{ animationFillMode: "both" }}
        >
          Engenharia Diagnóstica &amp; Perícias Técnicas
        </h1>
        <p
          className="text-lg md:text-xl text-omega-pale font-body animate-fade-in-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          Segurança • Confiabilidade • Responsabilidade Técnica
        </p>
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center mt-8 animate-fade-in-up"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <a
            href="#servicos"
            className="px-8 py-3 bg-accent text-accent-foreground font-heading font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            Nossos Serviços
          </a>
          <a
            href="https://wa.me/5561984475770"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border-2 border-primary-foreground text-primary-foreground font-heading font-semibold rounded-md hover:bg-primary-foreground/10 transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
