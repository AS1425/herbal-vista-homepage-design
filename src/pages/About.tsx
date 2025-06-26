
import Hero from "@/components/about/Hero";
import WhoWeAre from "@/components/about/WhoWeAre";
import ResearchDevelopment from "@/components/about/ResearchDevelopment";
import QualityStandards from "@/components/about/QualityStandards";
import WhyChooseUsFlow from "@/components/about/WhyChooseUsFlow";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import GlobalPresence from "@/components/about/GlobalPresence";
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
      <ResearchDevelopment />
      <QualityStandards />
      <WhyChooseUsFlow />
      <MeetTheTeam />
      <GlobalPresence />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
