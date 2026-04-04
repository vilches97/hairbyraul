import heroImg from "@/assets/balayage.webp";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Balayage profesional en Hair_byRaul"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 animate-fade-in-up">
          Especialistas en Novias, Rubios Bonitos y Balayage en Martos
        </h1>
        <p className="font-body text-primary-foreground/85 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Coloristas expertos en balayage, mechas, rubios personalizados y peinados de novia.
          Trabajamos con marcas profesionales para conseguir resultados espectaculares.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#reservar"
            className="px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium bg-champagne text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Reservar cita
          </a>
          <a
            href="https://www.instagram.com/hair_byraul/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium border border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            Ver trabajos en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
