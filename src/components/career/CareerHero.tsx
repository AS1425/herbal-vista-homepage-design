
import React from "react";

const CareerHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/60f0997f-2455-49ae-8127-5870685f915f.png')"
        }}
      />
    </section>
  );
};

export default CareerHero;
