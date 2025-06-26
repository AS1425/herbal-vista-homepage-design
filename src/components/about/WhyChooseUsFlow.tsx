
import { useEffect, useRef, useState } from "react";
import { FlaskRound, Settings, CheckCircle, FileText, Globe, Factory } from "lucide-react";

const WhyChooseUsFlow = () => {
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

  const features = [
    {
      icon: FlaskRound,
      title: "In-House Testing Lab",
      description: "Complete quality control at every stage"
    },
    {
      icon: Settings,
      title: "Customized Formulations",
      description: "Tailored solutions for specific requirements"
    },
    {
      icon: CheckCircle,
      title: "Pre-shipment Sample Approval",
      description: "Quality confirmation before delivery"
    },
    {
      icon: FileText,
      title: "Technical Documentation",
      description: "Comprehensive regulatory support"
    },
    {
      icon: Globe,
      title: "Global Export Reach",
      description: "Serving 25+ countries worldwide"
    },
    {
      icon: Factory,
      title: "Modern Manufacturing",
      description: "State-of-the-art production facility"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: '#FFF8EC' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#126D39] mb-8">
            Why Our Clients Choose Tirupati Herbal
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#26C164] to-[#B85E0E] opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#26C164] to-[#B85E0E] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#126D39] mb-4 text-center group-hover:text-[#26C164] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsFlow;
