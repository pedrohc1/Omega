import { Award, Shield, Users } from "lucide-react";

const highlights = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Registro CREA-DF",
    description: "Profissional habilitado e registrado no Conselho Regional de Engenharia e Agronomia do Distrito Federal.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Responsabilidade Técnica",
    description: "Todos os serviços acompanhados de ART (Anotação de Responsabilidade Técnica), garantindo amparo legal e técnico.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Atendimento Especializado",
    description: "Atendemos condomínios, construtoras, imobiliárias, escritórios de advocacia e clientes particulares.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-secondary/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Sobre a ÔMEGA Engenharia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A ÔMEGA Serviços Especializados de Engenharia atua em Brasília-DF
              com foco em engenharia diagnóstica, inspeção predial e perícias
              técnicas. Nossa atuação é pautada na precisão técnica, na
              fundamentação normativa e no compromisso com a segurança das
              edificações.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Utilizamos metodologia estruturada, alinhada às normas da ABNT e
              às diretrizes do IBAPE, para entregar laudos e pareceres com
              clareza, rigor e respaldo jurídico — seja para decisões judiciais,
              administrativas ou preventivas.
            </p>
            <a
              href="https://wa.me/5561984475770"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-accent text-accent-foreground font-heading font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Destaques */}
          <div className="space-y-6">
            {highlights.map((item, i) => (
              <div key={i} className="flex gap-4 items-start bg-card rounded-lg p-5 shadow-sm border border-border">
                <div className="text-accent flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
