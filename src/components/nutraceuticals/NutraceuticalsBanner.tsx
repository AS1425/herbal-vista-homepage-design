
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const NutraceuticalsBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById("nutraceuticals-accordion");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1518770660439-4636190af475')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ color: '#FFF8EC' }}
        >
          Explore Our Nutraceutical Range
        </h1>
        
        <p 
          className={`text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Science-backed ingredients crafted for human wellness, vitality, and longevity.
        </p>
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

export default NutraceuticalsBanner;
