
import { useEffect, useRef, useState } from "react";
import { Shield, FileCheck, Leaf, Building } from "lucide-react";

const QualityStandards = () => {
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

  const standards = [
    {
      icon: Shield,
      title: "WHO-GMP Certified",
      description: "Internationally recognized manufacturing standards ensuring pharmaceutical-grade quality."
    },
    {
      icon: FileCheck,
      title: "COA/MSDS with Every Batch",
      description: "Comprehensive documentation and safety data sheets accompanying all shipments."
    },
    {
      icon: Leaf,
      title: "Ethical Sourcing",
      description: "Sustainable procurement practices supporting local farming communities."
    },
    {
      icon: Building,
      title: "GMP-Compliant Cleanroom",
      description: "Controlled environment production ensuring contamination-free processing."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#126D39] mb-4">
            Our Quality Standards
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every process, every batch, every shipment reflects our unwavering commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {standards.map((standard, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#26C164] to-[#B85E0E] flex items-center justify-center shadow-lg">
                <standard.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#126D39] mb-4 text-center">
                {standard.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {standard.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityStandards;
