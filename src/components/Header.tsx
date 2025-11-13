import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-manda-tudo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Pagina Inicial",
    path: "/"
  }, {
    name: "Quem Somos",
    path: "/quem-somos"
  }, {
    name: "Nossa História",
    path: "/nossa-historia"
  }, {
    name: "Contato",
    path: "/contato"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Manda Tudo Distribuidora" className="h-12 w-auto md:h-14" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${isActive(link.path) ? "text-primary after:scale-x-100" : "text-foreground hover:text-primary"}`}>
                {link.name}
              </Link>)}
          </nav>

          {/* CTA Button */}
          <div className="flex-1 hidden md:flex items-center justify-end">
            <Button asChild variant="hero">
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <nav className="md:hidden mt-4 pb-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
            {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 font-medium transition-colors ${isActive(link.path) ? "text-primary" : "text-foreground hover:text-primary"}`}>
                {link.name}
              </Link>)}
            <Button asChild variant="hero" className="w-full">
              <Link to="/contato" onClick={() => setIsMobileMenuOpen(false)}>
                Fale Conosco
              </Link>
            </Button>
          </nav>}
      </div>
    </header>;
};
export default Header;
