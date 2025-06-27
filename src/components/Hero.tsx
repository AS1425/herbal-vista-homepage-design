
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
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
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/834a476b-44bd-443c-a9c4-1b14db771075.png')"
        }}
      />
      
      {/* Explore Extracts Button */}
      <div className="relative z-10 text-center">
        <Button 
          onClick={scrollToProducts}
          className="bg-[#26C164] hover:bg-[#1F9B57] text-white px-8 py-4 text-lg rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
