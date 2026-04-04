const brands = [
  { name: "Schwarzkopf Professional", initials: "SP" },
  { name: "Authentic Beauty Concept", initials: "ABC" },
  { name: "GHD", initials: "GHD" },
  { name: "K18", initials: "K18" },
  { name: "K89", initials: "K89" },
];

const ProductsSection = () => {
  return (
    <section id="productos" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="section-fade-in text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-body">Calidad profesional</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">Productos</h2>
          <div className="w-16 h-px bg-champagne mx-auto mb-8" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Trabajamos exclusivamente con marcas profesionales de alta gama para garantizar
            los mejores resultados y el cuidado de tu cabello.
          </p>
        </div>

        <div className="section-fade-in flex flex-wrap justify-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-24 h-24 rounded-full border border-border flex items-center justify-center group-hover:border-champagne transition-colors duration-500">
                <span className="font-heading text-lg text-muted-foreground group-hover:text-champagne transition-colors">
                  {brand.initials}
                </span>
              </div>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-body text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
