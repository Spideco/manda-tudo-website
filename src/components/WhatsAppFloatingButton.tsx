import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WhatsAppFloatingButton = () => {
  return (
    <Link
      to="/contato"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-fade-in"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
    </Link>
  );
};

export default WhatsAppFloatingButton;