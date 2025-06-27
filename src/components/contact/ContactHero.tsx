
import React from "react";

const ContactHero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/bd264502-e447-46ef-b445-50b95f99c881.png')"
        }}
      />
    </section>
  );
};

export default ContactHero;
