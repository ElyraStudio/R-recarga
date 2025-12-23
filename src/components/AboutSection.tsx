import { Shield, Award, Users, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Clock,
      title: "15+ Anos",
      description: "de experiência no mercado"
    },
    {
      icon: Shield,
      title: "Confiança",
      description: "Atendimento técnico especializado"
    },
    {
      icon: Users,
      title: "Clientes",
      description: "Empresas e residências"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Serviço garantido"
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Sobre a Empresa
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Especialistas em impressoras desde 2009
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                A <strong className="text-foreground">R-Recarga</strong> é uma empresa consolidada no mercado de assistência técnica de impressoras e recarga de cartuchos, com mais de 15 anos de atuação em Gravataí e região metropolitana.
              </p>
              <p>
                Nossa equipe é formada por técnicos especializados que oferecem soluções completas para manutenção preventiva e corretiva de impressoras das principais marcas do mercado.
              </p>
              <p>
                Atendemos desde pequenos escritórios residenciais até grandes empresas, sempre com o compromisso de entregar <strong className="text-foreground">qualidade, agilidade e economia</strong> em cada serviço.
              </p>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group p-6 sm:p-8 rounded-2xl bg-card shadow-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
