import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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

  const navigateToNutraceuticals = () => {
    navigate('/nutraceuticals');
  };

  const navigateHome = () => {
    navigate('/');
  };

  const navigateToCareer = () => {
    navigate('/career');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#F8F9F4] shadow-lg h-16" 
          : "bg-[#F8F9F4] h-20"
      }`}
    >
      <div className="container mx-auto px-8 h-full flex items-center justify-between max-w-8xl">
        <div 
          className="flex items-center cursor-pointer transition-all duration-300 py-2 px-3 flex-shrink-0"
          onClick={navigateHome}
        >
          <img 
            src="/lovable-uploads/6516ad55-a994-4457-8472-e7432ce3c894.png" 
            alt="Tirupati Herbal Logo" 
            className="h-15 w-auto transition-all duration-300 object-contain"
            style={{ maxWidth: '250px', maxHeight: '60px' }}
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={navigateHome}
            className="text-[#126D39] hover:text-[#26C164] transition-colors font-medium"
          >
            Home
          </button>
          <button 
            onClick={navigateToAbout}
            className="text-[#126D39] hover:text-[#26C164] transition-colors font-medium"
          >
            About Us
          </button>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#126D39] hover:text-[#26C164] transition-colors font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px] bg-white border border-gray-200 shadow-lg rounded-md">
                  <div className="p-2 space-y-1">
                    <button
                      onClick={navigateToBotanicalExtracts}
                      className="w-full text-left px-3 py-2 text-[#126D39] hover:text-[#26C164] hover:bg-gray-50 rounded-md transition-colors font-medium"
                    >
                      Botanical Extracts
                    </button>
                    <button
                      onClick={navigateToNutraceuticals}
                      className="w-full text-left px-3 py-2 text-[#126D39] hover:text-[#26C164] hover:bg-gray-50 rounded-md transition-colors font-medium"
                    >
                      Nutraceutical Extracts
                    </button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <button 
            onClick={navigateToCareer}
            className="text-[#126D39] hover:text-[#26C164] transition-colors font-medium"
          >
            Career
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-[#126D39] hover:text-[#26C164] transition-colors font-medium"
          >
            Contact Us
          </button>
        </nav>

        <Button 
          onClick={() => scrollToSection("contact")}
          className="bg-[#B85E0E] hover:bg-[#A0520C] text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex-shrink-0"
        >
          Get Quote
        </Button>
      </div>
    </header>
  );
};

export default Header;
