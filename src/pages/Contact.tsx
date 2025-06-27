
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactCTA from "@/components/contact/ContactCTA";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Contact;
