import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    customerType: "",
    businessType: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.customerType) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Phone validation - remove non-numeric characters and check length
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      toast({
        title: "Telefone inválido",
        description: "Por favor, insira um telefone válido com DDD (mínimo 10 dígitos).",
        variant: "destructive"
      });
      return;
    }

    // Additional validation for atacado
    if (formData.customerType === "atacado" && !formData.businessType) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, selecione o tipo do seu negócio.",
        variant: "destructive"
      });
      return;
    }

    // Capitalize first letter of customer type
    const capitalizedType = formData.customerType.charAt(0).toUpperCase() + formData.customerType.slice(1);

    // Create WhatsApp message based on customer type
    let whatsappMessage = "";
    if (formData.customerType === "atacado") {
      whatsappMessage = `Olá, me chamo ${formData.name} e sou cliente ${capitalizedType} e tenho um(a) ${formData.businessType}, vim pelo site e gostaria de saber mais sobre os produtos!`;
    } else {
      whatsappMessage = `Olá, me chamo ${formData.name} e sou cliente ${capitalizedType}, vim pelo site e gostaria de saber mais sobre os produtos!`;
    }
    const whatsappUrl = `https://wa.me/5512981305757?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      customerType: "",
      businessType: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;

    // Apply phone mask for phone field
    if (name === "phone") {
      // Remove all non-numeric characters
      const numbers = value.replace(/\D/g, '');

      // Apply mask based on length
      let formattedPhone = numbers;
      if (numbers.length <= 2) {
        formattedPhone = numbers;
      } else if (numbers.length <= 7) {
        formattedPhone = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      } else if (numbers.length <= 10) {
        formattedPhone = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
      } else {
        formattedPhone = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
      }
      setFormData({
        ...formData,
        [name]: formattedPhone
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  return <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 text-white">Entre em Contato</h1>
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
              <h2 className="font-bold mb-6 text-foreground text-center text-4xl">Envie sua Mensagem</h2>
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
                  <label htmlFor="customerType" className="block text-sm font-medium mb-2 text-foreground">
                    Selecione o tipo de atendimento *
                  </label>
                  <Select value={formData.customerType} onValueChange={value => setFormData({
                  ...formData,
                  customerType: value,
                  businessType: value === "varejo" ? "" : formData.businessType
                })}>
                    <SelectTrigger id="customerType" className="w-full">
                      <SelectValue placeholder="Escolha uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="varejo">Varejo</SelectItem>
                      <SelectItem value="atacado">Atacado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.customerType === "atacado" && <div>
                    <label htmlFor="businessType" className="block text-sm font-medium mb-2 text-foreground">
                      Selecione o tipo do seu negócio *
                    </label>
                    <Select value={formData.businessType} onValueChange={value => setFormData({
                  ...formData,
                  businessType: value
                })}>
                      <SelectTrigger id="businessType" className="w-full">
                        <SelectValue placeholder="Escolha uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Açaí / Sorveteria">Açaí / Sorveteria</SelectItem>
                        <SelectItem value="Bar / Pub">Bar / Pub</SelectItem>
                        <SelectItem value="Restaurante">Restaurante</SelectItem>
                        <SelectItem value="Pizzaria">Pizzaria</SelectItem>
                        <SelectItem value="Pastelaria">Pastelaria</SelectItem>
                        <SelectItem value="Doceria">Doceria</SelectItem>
                        <SelectItem value="Salgaderia">Salgaderia</SelectItem>
                        <SelectItem value="Esfiharia">Esfiharia</SelectItem>
                        <SelectItem value="Hamburgueria">Hamburgueria</SelectItem>
                        <SelectItem value="Cafeteria">Cafeteria</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>}

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
          <h2 className="font-bold text-center mb-12 text-foreground text-5xl">Nossa Unidade</h2>
          <div className="max-w-3xl mx-auto">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contato;