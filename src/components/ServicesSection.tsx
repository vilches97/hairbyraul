import { Palette, Sparkles, Heart, Scissors } from "lucide-react";

const categories = [
  {
    icon: Palette,
    title: "Color & Blondes",
    services: ["Balayage", "Rubios personalizados", "Mecha clásica", "Ombré", "Corrección de color", "AirTouch"],
  },
  {
    icon: Sparkles,
    title: "Hair Therapy",
    services: ["Tratamientos de hidratación", "Reparación capilar", "Rituales capilares personalizados", "Tratamientos K18", "Tratamientos K89"],
  },
  {
    icon: Heart,
    title: "Bridal & Events",
    services: ["Peinados de novia", "Prueba de peinado", "Maquillaje de novia", "Colocación de velo", "Peinados para invitadas", "Maquillaje para eventos"],
  },
  {
    icon: Scissors,
    title: "Barber Shop",
    services: ["Corte caballero", "Cambio de look", "Arreglo de barba", "Estilismo masculino"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-beige">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="section-fade-in text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-body">Nuestros servicios</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">Servicios</h2>
          <div className="w-16 h-px bg-champagne mx-auto" />
        </div>

        <div className="section-fade-in grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card p-8 text-center group hover:shadow-lg transition-shadow duration-500"
            >
              <cat.icon className="mx-auto mb-6 text-champagne" size={32} strokeWidth={1.5} />
              <h3 className="font-heading text-lg mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.services.map((s) => (
                  <li key={s} className="text-sm text-muted-foreground font-body">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
