
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const scrollToBotanicalExtracts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/b23432ed-fdd4-4344-8408-47b7b9af334f.png')"
        }} 
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#00A150] leading-tight">
          Pure Botanical Extracts
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-white leading-relaxed">
          Backed by Nature, Perfected by Science
        </h2>
        <p className="text-lg md:text-xl mb-12 text-white leading-relaxed max-w-3xl mx-auto">
          Tailored, lab-verified herbal extracts for health, wellness, and nutrition, ensuring consistency, potency, and purity.
        </p>
        
        <Button 
          onClick={scrollToBotanicalExtracts}
          className="bg-[#28A745] hover:bg-[#218838] text-white px-8 py-4 text-lg rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          Explore Extracts
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToProducts}>
        <ChevronDown className="w-8 h-8 text-white animate-bounce hover:text-[#26C164] transition-colors" />
      </div>
    </section>
  );
};

export default Hero;
