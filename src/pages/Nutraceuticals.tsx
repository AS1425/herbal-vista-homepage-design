
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NutraceuticalsBanner from "@/components/nutraceuticals/NutraceuticalsBanner";
import NutraceuticalsAccordion from "@/components/nutraceuticals/NutraceuticalsAccordion";
import WhatsAppButton from "@/components/WhatsAppButton";

const Nutraceuticals = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NutraceuticalsBanner />
      <NutraceuticalsAccordion />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Nutraceuticals;
