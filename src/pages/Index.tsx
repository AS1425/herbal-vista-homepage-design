
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import AboutTirupatiHerbal from "@/components/AboutTirupatiHerbal";
import ManufacturingExcellence from "@/components/ManufacturingExcellence";
import ProductGrid from "@/components/ProductGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Certifications from "@/components/Certifications";
import GlobalReach from "@/components/GlobalReach";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutTirupatiHerbal />
      <ManufacturingExcellence />
      <ProductGrid />
      <WhyChooseUs />
      <Certifications />
      <GlobalReach />
      <InquiryForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
