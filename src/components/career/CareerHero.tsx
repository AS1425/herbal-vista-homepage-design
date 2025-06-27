
import React, { useState, useEffect } from "react";

const CareerHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/60f0997f-2455-49ae-8127-5870685f915f.png')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          className={`text-4xl md:text-6xl font-bold mb-6 text-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Join the Tirupati Herbal Team
        </h1>
        
        <p 
          className={`text-xl md:text-2xl text-white mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Grow your career with purpose. Work with science, nature, and innovation.
        </p>
      </div>
    </section>
  );
};

export default CareerHero;
