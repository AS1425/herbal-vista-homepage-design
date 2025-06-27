
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToBotanicalExtracts = () => {
    navigate('/botanical-extracts');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/236862d2-1242-481e-8d7d-bebc17edba17.png')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ color: '#26C164' }}
        >
          Pure Botanical Extracts
        </h1>
        
        <h2 
          className={`text-2xl md:text-3xl font-semibold mb-6 text-white transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Backed by Nature, Perfected by Science
        </h2>
        
        <p 
          className={`text-lg md:text-xl text-gray-200 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Tailored, lab-verified herbal extracts for health, wellness, and nutrition, 
          ensuring consistency, potency, and purity.
        </p>
        
        <Button 
          onClick={navigateToBotanicalExtracts}
          className={`bg-[#26C164] hover:bg-[#1F9B57] text-white px-8 py-4 text-lg rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          Explore Extracts
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToProducts}
      >
        <ChevronDown 
          className="w-8 h-8 text-white animate-bounce hover:text-[#26C164] transition-colors" 
        />
      </div>
    </section>
  );
};

export default Hero;
