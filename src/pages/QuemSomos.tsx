import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team-photo.jpg";

const QuemSomos = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 text-white">
            Quem Somos
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Conheça a história e os valores que fazem da Manda Tudo referência em distribuição 
            de alimentos congelados
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="section-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Nossa Trajetória
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                A Manda Tudo nasceu do sonho de criar uma distribuidora que não apenas entregasse 
                produtos, mas que levasse qualidade, confiança e sabor para cada cliente. Fundada 
                com o compromisso de revolucionar o mercado de alimentos congelados, crescemos 
                constantemente mantendo nossos valores.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Ao longo dos anos, expandimos nossa operação e hoje atendemos centenas de 
                estabelecimentos comerciais em toda a região. Nossa equipe é composta por 
                profissionais apaixonados que compartilham da mesma visão: distribuir sabores 
                extraordinários com excelência.
              </p>
              <p className="text-lg text-muted-foreground">
                Cada entrega é feita com o mesmo cuidado e dedicação do primeiro dia, porque 
                sabemos que nosso sucesso está diretamente ligado ao sucesso dos nossos clientes.
              </p>
            </div>
            <div className="section-fade-in hover-lift rounded-2xl overflow-hidden shadow-card">
              <img
                src={teamImage}
                alt="Equipe Manda Tudo"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-muted hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-primary">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Missão</h3>
              <p className="text-muted-foreground">
                Fornecer produtos alimentícios congelados de alta qualidade, garantindo 
                excelência no atendimento e contribuindo para o sucesso dos nossos parceiros 
                comerciais.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-muted hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-primary">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Visão</h3>
              <p className="text-muted-foreground">
                Ser reconhecida como a distribuidora líder em alimentos congelados na região, 
                referência em qualidade, inovação e atendimento ao cliente.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-muted hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-primary">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Valores</h3>
              <p className="text-muted-foreground">
                Qualidade em tudo que fazemos, compromisso com nossos clientes, integridade 
                nas relações, inovação constante e paixão pelo que entregamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Nossa Presença
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="section-fade-in">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-white">5+</div>
              <div className="text-lg text-white/90">Anos de Experiência</div>
            </div>
            <div className="section-fade-in">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-white">300+</div>
              <div className="text-lg text-white/90">Clientes Atendidos</div>
            </div>
            <div className="section-fade-in">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-white">50+</div>
              <div className="text-lg text-white/90">Produtos Diferentes</div>
            </div>
            <div className="section-fade-in">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-white">100%</div>
              <div className="text-lg text-white/90">Satisfação Garantida</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Quer fazer parte da nossa história?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos ser parceiros no sucesso do seu negócio.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contato">
              Fale Conosco <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
