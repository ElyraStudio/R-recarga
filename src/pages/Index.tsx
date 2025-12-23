import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>R-Recarga | Assistência Técnica em Impressoras e Recarga de Cartuchos - Gravataí RS</title>
        <meta 
          name="description" 
          content="R-Recarga: mais de 15 anos de experiência em assistência técnica de impressoras e recarga de cartuchos em Gravataí, RS. Atendemos Epson, HP, Canon, Lexmark. Orçamento rápido pelo WhatsApp!" 
        />
        <meta 
          name="keywords" 
          content="assistência técnica impressoras gravataí, recarga cartuchos gravataí, manutenção impressoras RS, conserto impressoras epson, recarga toner hp, impressoras canon gravataí" 
        />
        <meta name="author" content="R-Recarga" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://r-recarga.com.br" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="R-Recarga | Assistência Técnica em Impressoras - Gravataí RS" />
        <meta property="og:description" content="Mais de 15 anos de experiência em assistência técnica de impressoras e recarga de cartuchos. Orçamento rápido pelo WhatsApp!" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "R-Recarga",
            "description": "Assistência técnica em impressoras e recarga de cartuchos há mais de 15 anos",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Flamengo, 234",
              "addressLocality": "Gravataí",
              "addressRegion": "RS",
              "addressCountry": "BR"
            },
            "telephone": "+55-51-99634-3737",
            "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
            "priceRange": "$$",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": -29.94,
                "longitude": -51.08
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <BrandsSection />
          <LocationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
