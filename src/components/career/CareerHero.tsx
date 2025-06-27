
import React from "react";

const CareerHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/273a442d-42fe-4dc8-942a-637e52fcfa66.png')"
        }}
      />
    </section>
  );
};

export default CareerHero;
