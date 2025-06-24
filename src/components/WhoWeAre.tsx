
import { Leaf, Award, Globe, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WhoWeAre = () => {
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

  const highlights = [
    {
      icon: Leaf,
      title: "100% Botanical-Based",
      description: "Pure plant extracts, no synthetic additives."
    },
    {
      icon: Award,
      title: "WHO-GMP Certified",
      description: "Manufacturing meets WHO-GMP international quality standards."
    },
    {
      icon: Globe,
      title: "Global Exports",
      description: "Exporting to 25+ countries worldwide, trusted globally."
    },
    {
      icon: Settings,
      title: "Custom Extracts",
      description: "Customizable extract formulations tailored to your needs."
    }
  ];

  return (
    <section id="who-we-are" ref={sectionRef} className="py-20 bg-[#FFF8EC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Your <span className="text-[#26C164]">Trusted Partner</span> in{" "}
            <span className="text-[#B85E0E]">Botanical Extraction</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <p className="text-lg text-[#126D39] leading-relaxed">
              Tirupati Herbal is a leading name in botanical extraction, specializing in 
              high-quality plant-based extracts. We provide lab-verified, potent solutions 
              for the nutraceutical, pharmaceutical, and wellness industries globally.
            </p>
            <p className="text-lg text-[#126D39] leading-relaxed">
              Committed to sustainability and purity, our extracts elevate the efficacy 
              and value of our clients' products, ensuring consistent quality and reliable 
              supply chains worldwide.
            </p>
          </div>
          
          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isVisible 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <highlight.icon className="w-12 h-12 text-[#26C164] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#126D39] mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
