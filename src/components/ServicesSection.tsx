import { Building2, FileText, Search, Wrench, Scale, Home } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import engineersImg from "@/assets/engineers-blueprints.webp";
import structuralImg from "@/assets/structural-analysis.webp";
import pareceresImg from "@/assets/technical-reports.webp";
import reformaImg from "@/assets/apartment-renovation.webp";
import periciasImg from "@/assets/engineers-expertise.webp";
import vistoriaImg from "@/assets/property-inspection.webp";

const services = [
  {
    title: "Laudo de Inspeção Predial",
    description:
      "Avaliação técnica das condições de conservação, manutenção e desempenho da edificação.",
    items: [
      "Identificação de patologias construtivas",
      "Verificação de sistemas estruturais e prediais",
      "Atendimento às normas técnicas vigentes",
      "Relatório técnico com recomendações",
    ],
    image: engineersImg,
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    title: "Pareceres Técnicos",
    description:
      "Análise técnica especializada para subsidiar decisões administrativas, judiciais ou particulares.",
    items: [
      "Fundamentação normativa",
      "Análise de manifestações patológicas",
      "Avaliação documental e técnica",
    ],
    image: pareceresImg,
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: "Plano de Reforma para Apartamentos",
    description:
      "Planejamento técnico completo para reformas residenciais seguras e em conformidade.",
    items: [
      "Elaboração de Plano de Reforma",
      "Compatibilização de mudanças",
      "Atendimento às normas técnicas",
      "Orientações para execução segura",
    ],
    image: reformaImg,
    icon: <Wrench className="w-5 h-5" />,
  },
  {
    title: "Avaliação de Estabilidade Estrutural",
    description:
      "Diagnóstico especializado sobre a integridade estrutural de edificações.",
    items: [
      "Análise de fissuras e deformações",
      "Avaliação de risco estrutural",
      "Diagnóstico técnico especializado",
      "Recomendações de reforço ou intervenção",
    ],
    image: structuralImg,
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: "Perícias de Engenharia",
    description:
      "Análise imparcial e fundamentada para processos judiciais e extrajudiciais.",
    items: [
      "Análise imparcial e fundamentada",
      "Elaboração de laudo pericial",
      "Assistência técnica em processos judiciais",
      "Esclarecimentos técnicos em audiência",
    ],
    image: periciasImg,
    icon: <Scale className="w-5 h-5" />,
  },
  {
    title: "Recebimento de Imóveis (Vistoria Técnica)",
    description:
      "Vistoria técnica detalhada para garantir a qualidade na entrega do imóvel.",
    items: [
      "Conferência de acabamentos",
      "Verificação de instalações elétricas e hidráulicas",
      "Identificação de vícios construtivos",
      "Relatório fotográfico detalhado",
    ],
    image: vistoriaImg,
    icon: <Home className="w-5 h-5" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
