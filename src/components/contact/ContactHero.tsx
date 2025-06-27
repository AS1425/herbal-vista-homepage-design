
import React from "react";

const ContactHero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/d97efc36-ca54-4c39-b29d-0097ddea363c.png')"
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
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
