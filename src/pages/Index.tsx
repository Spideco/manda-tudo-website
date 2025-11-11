import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Users, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-warehouse.jpg";
import storeSign from "@/assets/store-sign.jpg";
import catalogoImage from "@/assets/catalogo-preview.jpg";
const Index = () => {
  return <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
            Manda Tudo Distribuidora
          </h1>
          <p className="hero-subtitle md:text-2xl mb-8 max-w-2xl mx-auto text-xl">Distribuindo sabores extraordinários para momentos extraordinários</p>
          <div className="hero-cta">
            <Button asChild variant="hero" size="lg">
              <Link to="/quem-somos">
                Conheça nossa história <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="section-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Quem Somos
              </h2>
              <p className="text-lg text-muted-foreground mb-6">O Manda Tudo é uma distribuidora do ramo alimentício especializada em produtos de alta qualidade. Nascemos da paixão por distribuir sabores que trazem felicidade para milhares de famílias.</p>
              
              <Button asChild variant="default" size="lg">
                <Link to="/quem-somos">
                  Saiba mais <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="section-fade-in hover-lift rounded-2xl overflow-hidden shadow-card">
              <img src={storeSign} alt="Manda Tudo Atacado e Varejo" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-card shadow-card hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-primary">
                <Package className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Excêlencia</h3>
              <p className="text-muted-foreground">Produtos selecionados com rigor para garantir a melhor experiência para nossos clientes.</p>
            </div>

            <div className="text-center p-8 rounded-xl bg-card shadow-card hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-primary">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Agilidade</h3>
              <p className="text-muted-foreground">Dedicação total em entregas ráidas, agilizando sempre o seu negócio.</p>
            </div>

            <div className="text-center p-8 rounded-xl bg-card shadow-card hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-primary">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Paixão</h3>
              <p className="text-muted-foreground">
                Amor pelo que fazemos, levando sabores que alegram o dia a dia das 
                pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Nossos Produtos
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8 text-2xl">
            Trabalhamos com uma linha completa de produtos que atendem às necessidades de restaurantes, lanchonetes, sorveterias e muito mais.
          </p>
          
          <div className="max-w-4xl mx-auto mb-8">
            <img src={catalogoImage} alt="Catálogo de Produtos Manda Tudo 2025" className="w-full h-auto rounded-2xl shadow-card hover-lift" />
          </div>
          
          <Button asChild variant="secondary" size="lg" className="h-14 px-12 text-lg">
            <a href="https://mandaofertas.my.canva.site/catalogo-manda-tudo-2025" target="_blank" rel="noopener noreferrer">
              Ver catálogo completo <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Saiba mais</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-secondary-foreground/80">
            Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer 
            com os melhores produtos do mercado.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contato">
              Fale Conosco <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;