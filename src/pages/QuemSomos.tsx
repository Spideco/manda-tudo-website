import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award, Package, Users, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team-photo.jpg";
const QuemSomos = () => {
  return <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 text-white">
            Quem Somos
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">Conheça a história e os valores que fazem do Manda Tudo referência em distribuição de alimentos</p>
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
              <p className="text-lg text-muted-foreground mb-6">O Manda Tudo nasceu do sonho de ser uma distribuidora que não apenas entregasse produtos, mas que levasse qualidade, confiança e sabor para cada cliente. </p>
              <p className="text-lg text-muted-foreground mb-6">Ao longo dos anos, expandimos nossa operação e hoje atendemos centenas de estabelecimentos comerciais em toda a região do Va. Nossa equipe é composta por profissionais apaixonados que compartilham da mesma visão: distribuir sabores extraordinários com excelência.</p>
              <p className="text-lg text-muted-foreground">Cada entrega é feita com cuidado, esmero e dedicação, pois sabemos que nosso sucesso está diretamente ligado ao sucesso dos nossos clientes.</p>
            </div>
            <div className="section-fade-in hover-lift rounded-2xl overflow-hidden shadow-card">
              <img src={teamImage} alt="Equipe Manda Tudo" className="w-full h-auto" />
            </div>
          </div>

          {/* Mission, Vision, Values */}
          
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
              <p className="text-muted-foreground">Dedicação total em entregas rápidas, agilizando sempre o seu negócio.</p>
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

      {/* CTA Section */}
      

      <Footer />
    </div>;
};
export default QuemSomos;