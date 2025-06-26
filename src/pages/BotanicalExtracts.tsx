
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BotanicalExtractsBanner from "@/components/botanical/BotanicalExtractsBanner";
import ProductAccordion from "@/components/botanical/ProductAccordion";
import WhatsAppButton from "@/components/WhatsAppButton";

const BotanicalExtracts = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BotanicalExtractsBanner />
      <ProductAccordion />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BotanicalExtracts;
