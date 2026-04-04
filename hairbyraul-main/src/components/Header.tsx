import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre nosotros", href: "#sobre" },
  { label: "Servicios", href: "#servicios" },
  { label: "Novias & Eventos", href: "#novias" },
  { label: "Galería", href: "#galeria" },
  { label: "Productos", href: "#productos" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#inicio" className="font-heading text-2xl tracking-wider">
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>
            Hair<span className="text-champagne">_by</span>Raul
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs uppercase tracking-[0.15em] font-body font-medium luxury-underline transition-colors ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#reservar"
            className="ml-2 px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-medium bg-champagne text-primary-foreground transition-all hover:opacity-90"
          >
            Reservar cita
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-card/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm uppercase tracking-[0.15em] font-body text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#reservar"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-6 py-3 text-center text-xs uppercase tracking-[0.15em] font-medium bg-champagne text-primary-foreground"
            >
              Reservar cita
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
