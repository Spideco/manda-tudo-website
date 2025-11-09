import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import founderImage from "@/assets/founder-portrait.jpg";
const NossaHistoria = () => {
  return <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 text-white">
            Nossa História
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            A jornada de paixão, dedicação e compromisso que construiu a Manda Tudo
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="inline-block text-primary mb-6" size={48} />
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6">
              "Sempre acreditei que o sucesso vem da combinação de qualidade, dedicação e 
              amor pelo que fazemos. Cada produto que entregamos carrega nosso compromisso 
              em fazer a diferença."
            </blockquote>
            <p className="text-lg text-muted-foreground font-semibold">
              — Fundadora da Manda Tudo
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="section-fade-in hover-lift rounded-2xl overflow-hidden shadow-card">
              <img src={founderImage} alt="Fundadora da Manda Tudo" className="w-full h-auto" />
            </div>
            <div className="section-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                A Visão de Uma Empreendedora
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Tudo começou com um sonho: criar uma distribuidora que não apenas entregasse 
                produtos, mas que construísse relações verdadeiras com seus clientes. Com 
                experiência no setor alimentício e uma visão clara do que o mercado precisava, 
                nossa fundadora deu o primeiro passo para transformar esse sonho em realidade.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Os primeiros anos foram desafiadores, mas cada obstáculo foi encarado como 
                uma oportunidade de crescimento. Com determinação e trabalho árduo, a Manda 
                Tudo conquistou a confiança de seus primeiros clientes e, aos poucos, expandiu 
                sua atuação.
              </p>
              <p className="text-lg text-muted-foreground">
                Hoje, anos depois, a empresa mantém os mesmos valores que a fundaram: 
                compromisso com a qualidade, respeito pelos clientes e paixão por distribuir 
                sabores que fazem a diferença no dia a dia das pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Marcos da Nossa Jornada
          </h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="section-fade-in flex items-start space-x-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">A Fundação</h3>
                <p className="text-lg text-muted-foreground">
                  Início das operações com uma pequena equipe dedicada e os primeiros clientes 
                  que acreditaram no projeto. Foco total em construir relações de confiança.
                </p>
              </div>
            </div>

            <div className="section-fade-in flex items-start space-x-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Expansão Regional</h3>
                <p className="text-lg text-muted-foreground">
                  Crescimento da carteira de clientes e ampliação do portfólio de produtos. 
                  A Manda Tudo começa a se tornar referência na região.
                </p>
              </div>
            </div>

            <div className="section-fade-in flex items-start space-x-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Consolidação</h3>
                <p className="text-lg text-muted-foreground">
                  Modernização da estrutura logística e ampliação da equipe. Centenas de 
                  clientes satisfeitos e reconhecimento no mercado.
                </p>
              </div>
            </div>

            <div className="section-fade-in flex items-start space-x-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-white">04</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">O Futuro</h3>
                <p className="text-lg text-muted-foreground">
                  Novos planos de expansão, diversificação de produtos e o compromisso contínuo 
                  em oferecer sempre o melhor para nossos parceiros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      <Footer />
    </div>;
};
export default NossaHistoria;