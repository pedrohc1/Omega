import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import OmegaLogo from "@/components/OmegaLogo";

const links = [
  { href: "#servicos", label: "Serviços", id: "servicos" },
  { href: "#sobre", label: "Sobre", id: "sobre" },
  { href: "#depoimentos", label: "Depoimentos", id: "depoimentos" },
  { href: "#contato", label: "Contato", id: "contato" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2 text-primary-foreground">
          <OmegaLogo className="w-7 h-7" />
          <div className="leading-tight">
            <div className="font-heading font-bold text-base tracking-wide">ÔMEGA</div>
            <div className="font-heading text-[9px] tracking-[0.2em] opacity-80 uppercase">Engenharia</div>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              className={`text-sm font-medium transition-colors pb-0.5 ${
                activeSection === id
                  ? "text-primary-foreground border-b-2 border-accent"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-primary-foreground p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-primary-foreground/10 px-4 py-3 flex flex-col gap-4">
          {links.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition-colors ${
                activeSection === id
                  ? "text-primary-foreground font-semibold"
                  : "text-primary-foreground/70"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
