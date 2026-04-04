import bridalImg from "@/assets/bridal-styling.webp";
import bridalHairImg from "@/assets/bridal-hair.webp";

const BridalSection = () => {
  return (
    <section id="novias" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="section-fade-in">
            <span className="text-xs uppercase tracking-[0.3em] text-champagne font-body">Especialistas</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
              Novias & Eventos
            </h2>
            <div className="w-16 h-px bg-champagne mb-8" />
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              En Hair_byRaul somos especialistas en peinados de novia.
              Creamos looks elegantes, románticos y personalizados para que te sientas perfecta en uno de los días más importantes de tu vida.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Ofrecemos pruebas de peinado, maquillaje profesional y posibilidad de desplazamiento al lugar del evento.
            </p>
            <a
              href="#reservar"
              className="inline-block px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium bg-champagne text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Reservar prueba de novia
            </a>
          </div>
          <div className="section-fade-in grid grid-cols-2 gap-4">
            <div className="img-zoom aspect-[3/4]">
              <img src={bridalImg} alt="Estilismo de novia" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="img-zoom aspect-[3/4] mt-8">
              <img src={bridalHairImg} alt="Peinado de novia" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridalSection;
