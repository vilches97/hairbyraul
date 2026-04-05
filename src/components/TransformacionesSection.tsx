import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Transformacion {
  id: number;
  categoria: "balayage" | "rubios" | "correcciones";
  titulo: string;
  descripcion: string;
  antes: string;
  despues: string;
}

const transformaciones: Transformacion[] = [
  // Transformaciones reales del cliente
  {
    id: 1,
    categoria: "balayage",
    titulo: "Balayage Real",
    descripcion: "De castaño a rubios miel con ondas suaves",
    antes: "/assets/transformaciones/balayage-real-antes.jpg.jpeg",
    despues: "/assets/transformaciones/balayage-real-despues.jpg.jpeg"
  },
  {
    id: 2,
    categoria: "balayage",
    titulo: "Balayage en Cabello Largo",
    descripcion: "De liso a ondas con reflejos sutiles",
    antes: "/assets/transformaciones/balayage-largo-antes.jpg.jpeg",
    despues: "/assets/transformaciones/balayage-largo-despues.jpg.jpeg"
  },
  {
    id: 3,
    categoria: "balayage",
    titulo: "Balayage Rubio con Ondas",
    descripcion: "De un look apagado a un balayage rubio vibrante con ondas",
    antes: "/assets/transformaciones/balayage-rubio-antes.jpg.jpeg",
    despues: "/assets/transformaciones/balayage-rubio-despues.jpg.jpeg"
  },
  {
    id: 4,
    categoria: "balayage",
    titulo: "Transformación Extra",
    descripcion: "Cambio de look completo",
    antes: "/assets/transformaciones/transformacion-real-antes1.jpg.jpeg",
    despues: "/assets/transformaciones/transformacion-real-despues3.jpg.jpeg"
  }
];

const categorias = [
  { id: "todas", nombre: "Todas", icon: "✨" },
  { id: "balayage", nombre: "Balayage", icon: "🌊" },
  { id: "rubios", nombre: "Rubios", icon: "💛" },
  { id: "correcciones", nombre: "Correcciones", icon: "🎨" }
];

const TransformacionesSection = () => {
  const [transformacionActiva, setTransformacionActiva] = useState<Transformacion | null>(null);

  const siguienteTransformacion = () => {
    if (!transformacionActiva) return;
    const index = transformaciones.findIndex(t => t.id === transformacionActiva.id);
    const next = transformaciones[(index + 1) % transformaciones.length];
    setTransformacionActiva(next);
  };

  const anteriorTransformacion = () => {
    if (!transformacionActiva) return;
    const index = transformaciones.findIndex(t => t.id === transformacionActiva.id);
    const prev = transformaciones[(index - 1 + transformaciones.length) % transformaciones.length];
    setTransformacionActiva(prev);
  };

  return (
    <section id="transformaciones" className="py-24 lg:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="section-fade-in text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-body">Nuestro trabajo</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">Transformaciones Reales</h2>
          <div className="w-16 h-px bg-champagne mx-auto mb-8" />
          <p className="font-body text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Descubre los resultados reales de nuestros clientes. Antes y después de nuestras transformaciones especializadas.
          </p>
        </div>

        {/* Galería Grid */}
        <div className="section-fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {transformaciones.map((transformacion) => (
            <div
              key={transformacion.id}
              onClick={() => setTransformacionActiva(transformacion)}
              className="group cursor-pointer overflow-hidden rounded-lg border border-primary-foreground/10 hover:border-champagne transition-all"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={transformacion.antes}
                  alt={`${transformacion.titulo} - Antes`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.15em] text-white font-medium">
                      {transformacion.categoria}
                    </span>
                    <span className="text-xs text-white/80">ANTES/DESPUÉS</span>
                  </div>
                  <h3 className="font-heading text-lg text-white">{transformacion.titulo}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Antes/Después */}
        {transformacionActiva && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setTransformacionActiva(null)}
          >
            <div 
              className="bg-foreground rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Header Modal */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.15em] text-champagne">
                      {transformacionActiva.categoria}
                    </span>
                    <h3 className="font-heading text-2xl">{transformacionActiva.titulo}</h3>
                    <p className="font-body text-sm text-muted-foreground">{transformacionActiva.descripcion}</p>
                  </div>
                  <button
                    onClick={() => setTransformacionActiva(null)}
                    className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Comparación Antes/Después */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-center">ANTES</h4>
                    <img
                      src={transformacionActiva.antes}
                      alt={`${transformacionActiva.titulo} - Antes`}
                      className="w-full aspect-[4/5] object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-center">DESPUÉS</h4>
                    <img
                      src={transformacionActiva.despues}
                      alt={`${transformacionActiva.titulo} - Después`}
                      className="w-full aspect-[4/5] object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Navegación */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={anteriorTransformacion}
                    className="flex items-center gap-2 px-4 py-2 border border-primary-foreground/30 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                  >
                    <ChevronLeft size={16} />
                    Anterior
                  </button>
                  <span className="text-sm text-muted-foreground">
                    {transformaciones.findIndex(t => t.id === transformacionActiva.id) + 1} / {transformaciones.length}
                  </span>
                  <button
                    onClick={siguienteTransformacion}
                    className="flex items-center gap-2 px-4 py-2 border border-primary-foreground/30 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                  >
                    Siguiente
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TransformacionesSection;
