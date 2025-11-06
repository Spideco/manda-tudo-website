import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Users, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-warehouse.jpg";
import teamImage from "@/assets/team-photo.jpg";
import productsImage from "@/assets/products-display.jpg";
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
          <p className="hero-subtitle text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Distribuindo sabores extraordinários com qualidade, dedicação e amor
          </p>
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="section-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Quem Somos
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                A Manda Tudo é uma distribuidora do ramo alimentício especializada em produtos 
                congelados de alta qualidade. Nascemos da paixão por distribuir sabores que 
                trazem felicidade para milhares de famílias.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Com anos de experiência no mercado, atendemos diversos estabelecimentos 
                comerciais, levando açaí, cremes americanos, sorvetes e muito mais, sempre 
                com excelência e compromisso.
              </p>
              <Button asChild variant="default" size="lg">
                <Link to="/quem-somos">
                  Saiba mais <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="section-fade-in hover-lift rounded-2xl overflow-hidden shadow-card">
              <img src={teamImage} alt="Equipe Manda Tudo" className="w-full h-auto" />
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
              <h3 className="text-2xl font-bold mb-4 text-foreground">Qualidade</h3>
              <p className="text-muted-foreground">
                Produtos selecionados com rigor para garantir a melhor experiência aos 
                nossos clientes.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-card shadow-card hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-primary">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Compromisso</h3>
              <p className="text-muted-foreground">
                Dedicação total em cada entrega, construindo relacionamentos duradouros 
                com nossos parceiros.
              </p>
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
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="section-fade-in hover-lift rounded-2xl overflow-hidden shadow-card order-2 md:order-1">
              <img src={productsImage} alt="Produtos Manda Tudo" className="w-full h-auto" />
            </div>
            <div className="section-fade-in order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Nossos Produtos
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Trabalhamos com uma linha completa de produtos congelados que atendem 
                às necessidades de restaurantes, lanchonetes, sorveterias e muito mais.
              </p>
              <ul className="space-y-4 text-lg text-white/90 mb-8">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 flex-shrink-0" />
                  <span>Açaí tradicional e batido de alta qualidade</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 flex-shrink-0" />
                  <span>Cremes americanos em diversos sabores</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 flex-shrink-0" />
                  <span>Sorvetes e picolés artesanais</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 flex-shrink-0" />
                  <span>Polpas de frutas e produtos congelados especiais</span>
                </li>
              </ul>
              <Button asChild variant="secondary" size="lg">
                <Link to="/contato">
                  Solicite um orçamento <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Vamos conversar?
          </h2>
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