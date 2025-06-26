
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navigateToAbout = () => {
    navigate('/about');
  };

  const navigateToBotanicalExtracts = () => {
    navigate('/botanical-extracts');
  };

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#126D39] shadow-lg h-16" 
          : "bg-transparent h-20"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={navigateHome}>
          <img 
            src="/lovable-uploads/64c539e1-444d-445b-a5a2-f0b62d619ae1.png" 
            alt="Tirupati Herbal Logo" 
            className={`transition-all duration-300 ${
              isScrolled ? "h-8" : "h-12"
            }`}
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={navigateHome}
            className="text-white hover:text-[#26C164] transition-colors font-medium"
          >
            Home
          </button>
          <button 
            onClick={navigateToAbout}
            className="text-white hover:text-[#26C164] transition-colors font-medium"
          >
            About Us
          </button>
          <button 
            onClick={navigateToBotanicalExtracts}
            className="text-white hover:text-[#26C164] transition-colors font-medium"
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection("career")}
            className="text-white hover:text-[#26C164] transition-colors font-medium"
          >
            Career
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-[#26C164] transition-colors font-medium"
          >
            Contact Us
          </button>
        </nav>

        <Button 
          onClick={() => scrollToSection("contact")}
          className="bg-[#B85E0E] hover:bg-[#A0520C] text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          Get Quote
        </Button>
      </div>
    </header>
  );
};

export default Header;
