import { Calendar, Phone, Instagram } from "lucide-react";

const BookingSection = () => {
  return (
    <section id="reservar" className="py-24 lg:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="section-fade-in max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-body">Cita previa</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">Reserva tu cita</h2>
          <div className="w-16 h-px bg-champagne mx-auto mb-8" />
          <p className="font-body text-primary-foreground/70 leading-relaxed mb-12">
            Puedes reservar tu cita de forma rápida y sencilla a través de cualquiera de estas opciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booksy.com/es-es/174023_hair-by-raul_barberia_28835_martos#ba_s=hgnm_1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium bg-champagne text-foreground hover:opacity-90 transition-opacity"
            >
              <Calendar size={16} />
              Reservar en Booksy
            </a>
            <a
              href="tel:+34694482609"
              className="flex items-center justify-center gap-3 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone size={16} />
              Llamar ahora
            </a>
            <a
              href="https://www.instagram.com/hair_byraul/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              <Instagram size={16} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
