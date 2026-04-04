import { Star } from "lucide-react";

const reviews = [
  {
    text: "Raúl es un profesional increíble. El balayage que me hizo fue exactamente lo que quería. El resultado superó mis expectativas.",
    author: "Laura M.",
  },
  {
    text: "Me casé hace dos semanas y el peinado de novia fue perfecto. Noelia tiene unas manos mágicas. Totalmente recomendable.",
    author: "María G.",
  },
  {
    text: "Llevo años yendo a Hair_byRaul y el trato es siempre excepcional. Son los mejores coloristas de la zona sin duda.",
    author: "Carmen R.",
  },
];

const ReviewsSection = () => {
  return (
    <section id="resenas" className="py-24 lg:py-32 bg-beige">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="section-fade-in text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-body">Opiniones</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">Lo que dicen nuestros clientes</h2>
          <div className="w-16 h-px bg-champagne mx-auto mb-8" />
          <p className="font-body text-muted-foreground">
            Más de 120 reseñas en Google con una valoración media de <strong className="text-foreground">4,7 estrellas</strong>.
          </p>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className={i < 5 ? "fill-champagne text-champagne" : "text-border"} />
            ))}
          </div>
        </div>

        <div className="section-fade-in grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div key={i} className="bg-card p-8 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-champagne text-champagne" />
                ))}
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed italic mb-6">
                "{review.text}"
              </p>
              <span className="text-xs uppercase tracking-[0.15em] text-champagne font-body">
                {review.author}
              </span>
            </div>
          ))}
        </div>

        <div className="section-fade-in text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Hair+by+Raul/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            Ver reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
