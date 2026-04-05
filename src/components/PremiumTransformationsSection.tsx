import { useState, useRef, useEffect } from "react";
import { ChevronRight, Instagram, Calendar } from "lucide-react";

interface Transformation {
  id: number;
  type: string;
  label: string;
  before: string;
  after: string;
}

const transformations: Transformation[] = [
  {
    id: 1,
    type: "balayage",
    label: "Balayage natural",
    before: "/assets/transformaciones/balayage-natural-antes.jpg",
    after: "/assets/transformaciones/balayage-natural-despues.jpg"
  },
  {
    id: 2,
    type: "rubio",
    label: "Rubio vainilla",
    before: "/assets/transformaciones/rubio-vainilla-antes.jpg",
    after: "/assets/transformaciones/rubio-vainilla-despues.jpg"
  },
  {
    id: 3,
    type: "correccion",
    label: "Corrección de color",
    before: "/assets/transformaciones/correccion-color-antes.jpg",
    after: "/assets/transformaciones/correccion-color-despues.jpg"
  },
  {
    id: 4,
    type: "cambio",
    label: "Cambio de look",
    before: "/assets/transformaciones/cambio-look-antes.jpg",
    after: "/assets/transformaciones/cambio-look-despues.jpg"
  },
  {
    id: 5,
    type: "babylights",
    label: "Babylights sutiles",
    before: "/assets/transformaciones/babylights-antes.jpg",
    after: "/assets/transformaciones/babylights-despues.jpg"
  },
  {
    id: 6,
    type: "rubio-frio",
    label: "Rubio frío",
    before: "/assets/transformaciones/rubio-frio-antes.jpg",
    after: "/assets/transformaciones/rubio-frio-despues.jpg"
  }
];

const TransformationCard: React.FC<{ transformation: Transformation }> = ({ transformation }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, percentage)));
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-white">
      <div 
        ref={containerRef}
        className="relative aspect-[4/5] overflow-hidden cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Before Image */}
        <img
          src={transformation.before}
          alt={`${transformation.label} - Antes`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* After Image */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={transformation.after}
            alt={`${transformation.label} - Después`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#c8a97e]">
            <ChevronRight size={20} className="text-[#c8a97e]" />
          </div>
        </div>

        {/* Before/After Labels */}
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          Antes
        </div>
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          Después
        </div>
      </div>

      {/* Service Label */}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-serif text-[#111111] mb-2">{transformation.label}</h3>
        <p className="text-sm text-gray-600 uppercase tracking-wider">
          {transformation.type === 'balayage' && 'Balayage'}
          {transformation.type === 'rubio' && 'Rubio personalizado'}
          {transformation.type === 'correccion' && 'Corrección de color'}
          {transformation.type === 'cambio' && 'Cambio de look'}
          {transformation.type === 'babylights' && 'Babylights'}
          {transformation.type === 'rubio-frio' && 'Rubio frío'}
        </p>
      </div>
    </div>
  );
};

const PremiumTransformationsSection = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0');
            setVisibleCards(prev => new Set(prev).add(cardId));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-card-id]');
    cards.forEach(card => observer.observe(card));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif text-[#111111] mb-4">
            Transformaciones Reales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resultados reales de nuestros trabajos en rubios, balayage y correcciones de color.
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {transformations.map((transformation, index) => (
            <div
              key={transformation.id}
              data-card-id={transformation.id}
              className={`transition-all duration-700 ${
                visibleCards.has(transformation.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <TransformationCard transformation={transformation} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-xl">
          <h3 className="text-3xl font-serif text-[#111111] mb-4">
            ¿Quieres un cambio así?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está especializado en rubios, balayage y cambios de look personalizados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booksy.com/es-es/174023_hair-by-raul_barberia_28835_martos#ba_s=hgnm_1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c8a97e] text-white font-medium rounded-full hover:bg-[#b3986d] transition-colors duration-300"
            >
              <Calendar size={20} />
              Reservar cita
            </a>
            
            <a
              href="https://www.instagram.com/hair_byraul/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#c8a97e] text-[#c8a97e] font-medium rounded-full hover:bg-[#c8a97e] hover:text-white transition-all duration-300"
            >
              <Instagram size={20} />
              Ver más trabajos en Instagram
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default PremiumTransformationsSection;
