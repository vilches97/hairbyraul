import balayage from "@/assets/balayage.webp";
import bridalHair from "@/assets/bridal-hair.webp";
import bridalStyling from "@/assets/bridal-styling.webp";
import barber from "@/assets/barber.webp";
import salonExterior from "@/assets/salon-exterior.webp";
import team from "@/assets/team.webp";

const images = [
  { src: balayage, alt: "Balayage profesional", span: "row-span-2" },
  { src: bridalHair, alt: "Peinado de novia", span: "" },
  { src: barber, alt: "Corte de caballero", span: "" },
  { src: bridalStyling, alt: "Estilismo nupcial", span: "row-span-2" },
  { src: salonExterior, alt: "Exterior del salón", span: "" },
  { src: team, alt: "Equipo Hair_byRaul", span: "" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-24 lg:py-32 bg-beige">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="section-fade-in text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-body">Nuestro trabajo</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">Galería</h2>
          <div className="w-16 h-px bg-champagne mx-auto" />
        </div>

        <div className="section-fade-in grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, i) => (
            <div key={i} className={`img-zoom ${img.span}`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>

        <div className="section-fade-in text-center mt-12">
          <a
            href="https://www.instagram.com/hair_byraul/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
