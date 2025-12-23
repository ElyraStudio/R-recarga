import { MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/5551996343737?text=Olá! Gostaria de saber mais sobre os serviços da R-Recarga.";

  return (
    <footer className="bg-brand-dark text-hero-foreground">
      <div className="container-custom section-padding py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">R-Recarga</h3>
            <p className="text-hero-muted text-sm mb-4">
              Assistência técnica em impressoras e recarga de cartuchos há mais de 15 anos.
            </p>
            <div className="flex items-center gap-2 text-sm text-hero-muted">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Gravataí, RS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-hero-muted">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#marcas" className="hover:text-primary transition-colors">Marcas</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-hero-muted">
              <li>Assistência Técnica</li>
              <li>Recarga de Cartuchos</li>
              <li>Manutenção Preventiva</li>
              <li>Diagnóstico Técnico</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white text-sm font-medium hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              (51) 99634-3737
            </a>
            <p className="mt-4 text-sm text-hero-muted">
              Rua Flamengo, 234<br />
              Gravataí – RS
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-hero-foreground/10 text-center text-sm text-hero-muted">
          <p>© {currentYear} R-Recarga. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
