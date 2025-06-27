
import Hero from "@/components/about/Hero";
import WhoWeAre from "@/components/about/WhoWeAre";
import QualityCommitment from "@/components/about/QualityCommitment";
import OurFoundation from "@/components/about/OurFoundation";
import FinalCTA from "@/components/about/FinalCTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhoWeAre />
      <QualityCommitment />
      <OurFoundation />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
