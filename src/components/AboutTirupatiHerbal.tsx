
import { Leaf, Globe, Factory, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const AboutTirupatiHerbal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: Leaf,
      title: "100% Botanical-Based",
      description: "Pure plant extracts"
    },
    {
      icon: Globe,
      title: "WHO-GMP Certified Facility",
      description: "International standards"
    },
    {
      icon: Factory,
      title: "Exporting to 25+ Countries",
      description: "Global reach"
    },
    {
      icon: Settings,
      title: "Customizable Extract Potencies",
      description: "Tailored solutions"
    }
  ];

  return (
    <section id="about-tirupati" ref={sectionRef} className="py-20 bg-[#FFF8EC]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Your <span className="text-[#26C164]">Trusted Partner</span> in{" "}
                <span className="text-[#B85E0E]">Botanical Extraction</span>
              </h2>
              <p className="text-lg text-[#126D39] leading-relaxed">
                Tirupati Herbal is a leading name in the field of botanical extraction, 
                specializing in the manufacturing of high-quality, plant-based extracts. 
                We provide lab-verified, potent solutions designed for the nutraceutical, 
                pharmaceutical, and wellness industries globally. With a commitment to 
                sustainability and purity, our solutions elevate the value of your products.
              </p>
            </div>
            
            {/* Four Pillars Grid */}
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((pillar, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm ${
                    isVisible 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                       style={{ background: 'linear-gradient(135deg, #26C164 0%, #B85E0E 100%)' }}>
                    <pillar.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#126D39] text-sm mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              className="bg-[#26C164] hover:bg-[#1F9B57] text-white px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            >
              More About Us
            </Button>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Laboratory technician working with botanical extracts"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTirupatiHerbal;
