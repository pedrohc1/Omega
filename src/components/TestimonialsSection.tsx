import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendonça",
    role: "Síndico — Condomínio Residencial Paranoá",
    text: "O laudo de inspeção predial foi extremamente detalhado e nos ajudou a priorizar as manutenções corretivas. Equipe muito profissional e pontual.",
    stars: 5,
  },
  {
    name: "Dra. Fernanda Rocha",
    role: "Advogada — Processo de Perícia Judicial",
    text: "O laudo pericial entregue foi impecável, com fundamentação técnica sólida que foi determinante no processo. Recomendo sem hesitar.",
    stars: 5,
  },
  {
    name: "Roberto Alves",
    role: "Proprietário — Apartamento Águas Claras",
    text: "Contratei a vistoria técnica na entrega do meu apartamento e identificaram vícios construtivos que eu jamais perceberia. Valeu muito o investimento.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-heading font-bold text-primary text-center mb-4">
          O que nossos clientes dizem
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          A confiança dos nossos clientes é construída laudo a laudo, com
          transparência e responsabilidade técnica.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-lg shadow-md border border-border p-6 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div>
                <p className="font-heading font-bold text-primary text-sm">
                  {t.name}
                </p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
