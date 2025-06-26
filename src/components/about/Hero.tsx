
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById("who-we-are");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ color: '#26C164' }}
        >
          Where Nature Meets Precision
        </h1>
        
        <p 
          className={`text-xl md:text-2xl text-[#FFF8EC] mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Crafting scientifically validated herbal solutions for the world, one batch at a time.
        </p>
        
        <Button 
          onClick={scrollToNext}
          className={`bg-[#26C164] hover:bg-[#1F9B57] text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          Explore Our Story
        </Button>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <ChevronDown 
          className="w-8 h-8 text-white animate-bounce hover:text-[#26C164] transition-colors" 
        />
      </div>
    </section>
  );
};

export default Hero;
