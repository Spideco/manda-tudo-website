import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award, Package, Users, Heart, Star, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import officeImage from "@/assets/office-photo.jpg";
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
              <p className="text-lg text-muted-foreground mb-6">Ao longo dos anos, expandimos nossa operação e hoje atendemos centenas de estabelecimentos comerciais em toda a região do Vale do Paraíba. Nossa equipe é composta por profissionais apaixonados que compartilham da mesma visão: distribuir sabores extraordinários com excelência.</p>
              <p className="text-lg text-muted-foreground">Cada entrega é feita com cuidado, esmero e dedicação, pois sabemos que nosso sucesso está diretamente ligado ao sucesso dos nossos clientes.</p>
            </div>
            <div className="section-fade-in hover-lift rounded-2xl overflow-hidden shadow-card">
              <img src={officeImage} alt="Escritório Manda Tudo" className="w-full h-auto" />
            </div>
          </div>

          {/* Mission, Vision, Values */}
          
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-center mb-16 text-white text-6xl">
            Nossa Presença
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="section-fade-in">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-white">+8</div>
              <div className="text-lg text-white/90">Anos no Mercado</div>
            </div>
            <div className="section-fade-in">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-white">+1500</div>
              <div className="text-lg text-white/90">Clientes Atendidos</div>
            </div>
            <div className="section-fade-in">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-white">+500</div>
              <div className="text-lg text-white/90">Produtos Diferentes</div>
            </div>
            <div className="section-fade-in">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-white">100%</div>
              <div className="text-lg text-white/90">Satisfação Garantida</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 md:text-6xl">
              Relatos de Clientes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja o que nossos clientes dizem sobre nossos produtos e serviços
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-4">
                  "Excelente distribuidora! Produtos sempre frescos e de qualidade. O atendimento é nota 10 e as entregas são sempre pontuais. Recomendo muito!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">Carlos Silva</p>
                  <p className="text-sm text-muted-foreground">Proprietário de Restaurante</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-4">
                  "Trabalho há anos com o Manda Tudo e sempre tive produtos de primeira qualidade. Os preços são justos e o atendimento é diferenciado. Parabéns!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">Marina Costa</p>
                  <p className="text-sm text-muted-foreground">Proprietária de Lanchonete</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-4">
                  "Variedade incrível de produtos! Sempre encontro tudo que preciso para meu negócio. Equipe super atenciosa e prestativa. Muito satisfeito!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">Roberto Almeida</p>
                  <p className="text-sm text-muted-foreground">Comerciante</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              <span className="text-2xl font-bold text-foreground">5.0</span> estrelas • 43 avaliações no Google
            </p>
            <Button asChild size="lg" className="h-12 px-8">
              <a href="https://www.google.com/search?q=manda+tudo+taubate" target="_blank" rel="noopener noreferrer">
                Ver Todas as Avaliações
                <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      <Footer />
    </div>;
};
export default QuemSomos;