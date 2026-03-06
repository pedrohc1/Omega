import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/5561984475770";
const EMAIL = "omegaservicosespecializados@outlook.com.br";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Contato via site – ${form.name}`,
    );
    const body = encodeURIComponent(
      `Nome: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contato" className="bg-primary py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-heading font-bold text-primary-foreground text-center mb-8">
          Contato
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info */}
          <div className="bg-card rounded-lg p-8 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">
                ÔMEGA Serviços Especializados de Engenharia
              </h3>
              <p className="text-muted-foreground mb-6">
                Atendimento a condomínios, construtoras, imobiliárias e
                particulares.
              </p>
              <div className="space-y-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>WhatsApp: (61) 98447-5770</span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="break-all">{EMAIL}</span>
                </a>
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Brasília – DF</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-xs mt-6">
              Horário de atendimento: segunda a sexta, 8h às 18h.
            </p>
          </div>

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-lg p-8 shadow-lg flex flex-col gap-4"
          >
            <h3 className="text-lg font-heading font-bold text-primary">
              Envie uma mensagem
            </h3>

            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="border border-border rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="border border-border rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Descreva sua necessidade..."
                rows={4}
                className="border border-border rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            {/* Botão email */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-heading font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              {sent ? "Abrindo e-mail..." : "Enviar por E-mail"}
            </button>

            {/* Divisor */}
            <div className="flex items-center gap-3 text-muted-foreground text-xs">
              <div className="flex-1 h-px bg-border" />
              ou prefere falar diretamente?
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Botão WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-md font-heading font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#25D366" }}
            >
              {/* WhatsApp icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Conversar no WhatsApp
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
