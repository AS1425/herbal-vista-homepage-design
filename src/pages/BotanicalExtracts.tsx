
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BotanicalExtractsBanner from "@/components/botanical/BotanicalExtractsBanner";
import ProductAccordion from "@/components/botanical/ProductAccordion";
import WhatsAppButton from "@/components/WhatsAppButton";
import TopInfoBar from "@/components/TopInfoBar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BotanicalExtracts = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-white">
      <TopInfoBar />
      <Header />
      <BotanicalExtractsBanner />
      <ProductAccordion />
      
      {/* Get in Touch Section */}
      <section className="py-16 bg-[#F8F9F4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#126D39] mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your botanical extract requirements and discover 
            how we can support your product development goals.
          </p>
          <Button 
            onClick={navigateToContact}
            className="bg-[#B85E0E] hover:bg-[#A0520C] text-white px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get in Touch
          </Button>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BotanicalExtracts;
