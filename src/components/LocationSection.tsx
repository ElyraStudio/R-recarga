import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.6!2d-51.08!3d-29.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU2JzI0LjAiUyA1McKwMDQnNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1";

  return (
    <section id="localizacao" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Localização
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Onde estamos
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Estamos localizados em Gravataí, Rio Grande do Sul, prontos para atender você e sua empresa com excelência.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua Flamengo, 234<br />
                    Gravataí – Rio Grande do Sul
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                  <p className="text-muted-foreground">
                    (51) 99634-3737
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="aspect-square sm:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-xl border border-border/50">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização R-Recarga"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
