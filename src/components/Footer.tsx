import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Manda Tudo
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              Distribuindo sabores extraordinários com qualidade e dedicação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Links</h4>
            <nav className="space-y-2">
              <Link
                to="/pagina-inicial"
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Página Inicial
              </Link>
              <Link
                to="/quem-somos"
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Quem Somos
              </Link>
              <Link
                to="/nossa-historia"
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Nossa História
              </Link>
              <Link
                to="/contato"
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Contato</h4>
            <div className="space-y-3 text-secondary-foreground/80">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Loja 1 - Rua Bom Jardim, 139 - Santa Luzia<br />Loja 2 - Rua Coronel João Afonso, 36 - Centro</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span>(12) 98130-5757</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span>mandatudotaubate@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.instagram.com/mandatudotaubate/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/distribuidoramandatudo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center text-secondary-foreground/60 text-sm">
          <p>&copy; {currentYear} Manda Tudo Distribuidora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
