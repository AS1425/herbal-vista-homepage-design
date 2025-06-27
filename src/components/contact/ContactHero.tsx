
import React from "react";

const ContactHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-24">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/917a4954-64b0-484f-ab90-c6638e30460d.png')"
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
          Let's Connect with Tirupati Herbal
        </h1>
        
        <p className="text-xl md:text-2xl text-white leading-relaxed">
          Whether you're a partner, customer, or curious about our products, we'd love to hear from you.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
