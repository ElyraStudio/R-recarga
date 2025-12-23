import { Wrench, Droplets, Settings, Search, CheckCircle2 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Wrench,
      title: "Assistência Técnica",
      description: "Reparo e manutenção especializada em impressoras de todas as marcas, com diagnóstico preciso e soluções eficientes.",
      features: ["Reparo de impressoras", "Troca de peças", "Conserto urgente"]
    },
    {
      icon: Droplets,
      title: "Recarga de Cartuchos",
      description: "Serviço de recarga profissional para cartuchos de tinta e toner, com tintas de alta qualidade e garantia.",
      features: ["Cartuchos jato de tinta", "Toner laser", "Bulk Ink"]
    },
    {
      icon: Settings,
      title: "Manutenção Preventiva",
      description: "Evite problemas futuros com nossa manutenção preventiva programada, aumentando a vida útil do seu equipamento.",
      features: ["Limpeza completa", "Calibração", "Revisão periódica"]
    },
    {
      icon: Search,
      title: "Diagnóstico Técnico",
      description: "Análise detalhada do equipamento para identificar problemas e apresentar o melhor custo-benefício para você.",
      features: ["Orçamento sem compromisso", "Análise completa", "Laudo técnico"]
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções completas para sua impressora
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços técnicos especializados para manter sua impressora funcionando perfeitamente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-6 sm:p-8 rounded-2xl bg-card shadow-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
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
