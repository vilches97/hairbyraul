import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-2xl mb-4">
              Hair<span className="text-champagne">_by</span>Raul
            </h3>
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">
              Peluquería en Martos especializada en rubios, balayage y novias.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-champagne font-body mb-4">Contacto</h4>
            <div className="font-body text-primary-foreground/60 text-sm space-y-2">
              <p>Av. de San Amador 122</p>
              <p>23600 Martos, Jaén</p>
              <p><a href="tel:+34694482609" className="hover:text-champagne transition-colors">694 48 26 09</a></p>
              <p><a href="tel:+34953707001" className="hover:text-champagne transition-colors">953 70 70 01</a></p>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-champagne font-body mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/hair_byraul/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/hairbyraulmartos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-primary-foreground/40 text-xs tracking-wider">
            © {new Date().getFullYear()} Hair_byRaul. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
