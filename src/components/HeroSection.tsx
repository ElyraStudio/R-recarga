import { MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-printer.jpg";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/5551996343737?text=Olá! Gostaria de saber mais sobre os serviços da R-Recarga.";
  
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Impressora profissional com cartuchos de tinta" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/95 via-hero/85 to-hero/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-hero via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Mais de 15 anos de experiência</span>
          </div>

          {/* Main Title */}
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-hero-foreground leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            R-Recarga
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl sm:text-2xl md:text-3xl text-hero-muted font-light mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Assistência técnica em impressoras
          </p>
          <p 
            className="text-xl sm:text-2xl md:text-3xl text-hero-muted font-light mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            e <span className="text-primary font-semibold">recarga de cartuchos</span>
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <Button 
              variant="hero" 
              size="xl" 
              asChild
              className="animate-pulse-glow"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Fale conosco no WhatsApp
              </a>
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              asChild
            >
              <a href="https://instagram.com/recargas.e.impressoras" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
                @recargas.e.impressoras
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div 
            className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start text-hero-muted/70 text-sm opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-primary" />
              <span>Atendimento empresarial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-primary" />
              <span>Clientes residenciais</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-primary" />
              <span>Orçamento rápido</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <a href="#sobre" className="flex flex-col items-center gap-2 text-hero-muted/50 hover:text-hero-muted transition-colors">
          <span className="text-xs uppercase tracking-wider">Saiba mais</span>
          <div className="w-6 h-10 border-2 border-hero-muted/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-hero-muted/50 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
