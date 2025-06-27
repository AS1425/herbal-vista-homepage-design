
import React from "react";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#126D39' }}>
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Interested in becoming a distributor or partner?
        </h3>
        <p className="text-lg text-white mb-6">
          Reach out to us and let's grow together.
        </p>
        <Button 
          onClick={scrollToTop}
          className="bg-[#26C164] hover:bg-[#1F9B57] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
};

export default ContactCTA;
