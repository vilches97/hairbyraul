import raulImg from "@/assets/raul.webp";
import noeliaImg from "@/assets/noelia.webp";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="section-fade-in text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-body">Conócenos</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
            Sobre Hair<span className="text-champagne">_by</span>Raul
          </h2>
          <div className="w-16 h-px bg-champagne mx-auto mb-8" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hair_byRaul es un salón de peluquería en Martos especializado en diseño de imagen, color y estilismo para eventos.
            Nuestro equipo está liderado por Raúl, estilista y colorista especializado en rubios, balayage y transformaciones de cabello.
          </p>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
            Nos apasiona crear looks personalizados que realcen la belleza natural de cada cliente.
            Trabajamos con marcas profesionales y ofrecemos un trato cercano, profesional y totalmente personalizado.
          </p>
        </div>

        <div className="section-fade-in grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="img-zoom w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
              <img src={raulImg} alt="Raúl - Director creativo" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="font-heading text-xl mb-1">Raúl</h3>
            <p className="text-xs uppercase tracking-[0.2em] text-champagne font-body">Director creativo & colorista</p>
          </div>
          <div className="text-center">
            <div className="img-zoom w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
              <img src={noeliaImg} alt="Noelia - Estilista profesional" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="font-heading text-xl mb-1">Noelia</h3>
            <p className="text-xs uppercase tracking-[0.2em] text-champagne font-body">Estilista profesional</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
