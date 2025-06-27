
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <section className="py-20 text-white" style={{ backgroundColor: '#126D39' }}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something Natural Together
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed" style={{ color: '#FFF8EC' }}>
            Partner with Tirupati Herbal for certified, science-backed herbal extract solutions.
          </p>
          <Button 
            onClick={navigateToContact}
            className="bg-[#26C164] hover:bg-[#1F9B57] text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
            style={{ boxShadow: '0 0 30px rgba(38, 193, 100, 0.3)' }}
          >
            Connect With Our Team
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
