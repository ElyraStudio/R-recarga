import { MessageCircle, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const whatsappUrl = "https://wa.me/5551996343737?text=Olá! Gostaria de saber mais sobre os serviços da R-Recarga.";
  const instagramUrl = "https://instagram.com/recargas.e.impressoras";

  return (
    <section id="contato" className="section-padding bg-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Entre em Contato
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-hero-foreground mb-6">
            Precisa de assistência técnica?
          </h2>
          <p className="text-hero-muted text-lg sm:text-xl mb-4">
            Estamos prontos para ajudar você! Faça seu orçamento agora mesmo.
          </p>
          <p className="text-hero-muted/70 mb-12">
            Resposta rápida • Atendimento personalizado • Orçamento sem compromisso
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="whatsapp" 
              size="xl" 
              asChild
              className="group"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                <span className="flex flex-col items-start">
                  <span className="text-xs opacity-80">WhatsApp</span>
                  <span className="font-bold">(51) 99634-3737</span>
                </span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="instagram" 
              size="xl" 
              asChild
              className="group"
            >
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
                <span className="flex flex-col items-start">
                  <span className="text-xs opacity-80">Instagram</span>
                  <span className="font-bold">@recargas.e.impressoras</span>
                </span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Trust message */}
          <div className="p-6 sm:p-8 rounded-2xl bg-hero-foreground/5 border border-hero-foreground/10">
            <p className="text-hero-muted text-sm sm:text-base">
              💡 <strong className="text-hero-foreground">Dica:</strong> Mande uma mensagem pelo WhatsApp descrevendo o problema ou modelo da sua impressora. Assim conseguimos fazer um diagnóstico inicial mais rápido!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
