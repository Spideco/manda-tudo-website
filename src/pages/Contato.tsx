import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const Contato = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!"
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 text-white">
            Entre em Contato
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Estamos prontos para atender você. Envie sua mensagem e vamos conversar!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Contact Form */}
            <div className="section-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-foreground text-center">
                Envie sua Mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Nome *
                  </label>
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Seu nome" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                    Telefone *
                  </label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(11) 12345-6789" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Mensagem *
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Como podemos ajudar?" rows={6} required />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-center mb-12 text-foreground text-5xl">Nossas Unidades</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Loja 1 - Santa Luzia */}
            <div className="bg-background rounded-2xl overflow-hidden shadow-card">
              <div className="p-6 bg-primary">
                <h3 className="text-2xl font-bold text-white mb-2">Loja 1 - Santa Luzia</h3>
                <p className="text-white/90">Rua Bom Jardim, 139 - Santa Luzia</p>
                <p className="text-white/90">Taubaté - SP</p>
              </div>
              <div className="h-80">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8!2d-45.5544!3d-23.0267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cccf0e0e0e0e0f%3A0x0!2sRua%20Bom%20Jardim%2C%20139%20-%20Santa%20Luzia%2C%20Taubat%C3%A9%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1623456789012!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa Loja 1 - Santa Luzia" />
              </div>
              <div className="p-6">
                <a href="https://www.google.com/maps/search/?api=1&query=Rua+Bom+Jardim+139+Santa+Luzia+Taubaté+SP" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-opacity">
                  <MapPin className="mr-2" size={20} />
                  Ver no Google Maps
                </a>
              </div>
            </div>

            {/* Loja 2 - Centro */}
            <div className="bg-background rounded-2xl overflow-hidden shadow-card">
              <div className="p-6 bg-primary">
                <h3 className="text-2xl font-bold text-white mb-2">Loja 2 - Centro</h3>
                <p className="text-white/90">Rua Coronel João Afonso, 36 - Centro</p>
                <p className="text-white/90">Taubaté - SP</p>
              </div>
              <div className="h-80">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5!2d-45.5556!3d-23.0262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cccf0e0e0e0e0f%3A0x0!2sRua%20Coronel%20Jo%C3%A3o%20Afonso%2C%2036%20-%20Centro%2C%20Taubat%C3%A9%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1623456789012!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa Loja 2 - Centro" />
              </div>
              <div className="p-6">
                <a href="https://www.google.com/maps/search/?api=1&query=Rua+Coronel+João+Afonso+36+Centro+Taubaté+SP" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-opacity">
                  <MapPin className="mr-2" size={20} />
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contato;