const BrandsSection = () => {
  const brands = [
    {
      name: "Epson",
      logo: "/brands/epson.png",
      specialties: ["EcoTank", "Jato de Tinta", "Laser"],
    },
    {
      name: "HP",
      logo: "/brands/hp.png",
      specialties: ["LaserJet", "DeskJet", "OfficeJet"],
    },
    {
      name: "Canon",
      logo: "/brands/canon.png",
      specialties: ["PIXMA", "MegaTank", "imageCLASS"],
    },
    {
      name: "Lexmark",
      logo: "/brands/lexmark.png",
      specialties: ["Laser", "Multifuncional", "Corporativo"],
    },
    {
      name: "EcoTank",
      logo: "/brands/ecotank.png",
      specialties: ["Tanque de tinta", "Alto rendimento", "Econômico"],
    },
  ];

  return (
    <section id="marcas" className="section-padding bg-background">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Especialização
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Marcas que trabalhamos
          </h2>
          <p className="text-muted-foreground text-lg">
            Somos especialistas nas principais marcas de impressoras do mercado,
            garantindo diagnóstico preciso e peças originais ou compatíveis de qualidade.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative p-6 sm:p-8 rounded-2xl bg-card shadow-card border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <img
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    className="max-h-10 max-w-[80px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">
                  {brand.name}
                </h3>

                <div className="flex flex-wrap gap-1 justify-center">
                  {brand.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Não encontrou sua marca?{" "}
            <span className="text-primary font-semibold">Entre em contato</span>{" "}
            — trabalhamos com diversas outras marcas!
          </p>
        </div>

      </div>
    </section>
  );
};

export default BrandsSection;
