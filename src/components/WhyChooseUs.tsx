
import { Beaker, Hand, Factory, Microscope, Puzzle, Truck, MapPin, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WhyChooseUs = () => {
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
      icon: Beaker,
      title: "In-House R&D Lab",
      description: "Innovation backed by science with continuous product development."
    },
    {
      icon: Hand,
      title: "Ethical Botanical Sourcing",
      description: "Sourced directly from certified farms for sustainability and authenticity."
    },
    {
      icon: Factory,
      title: "Scalable Production",
      description: "From small-scale samples to large bulk production, we meet your manufacturing needs."
    },
    {
      icon: Microscope,
      title: "Lab-Tested Purity",
      description: "Each batch is rigorously tested for purity, with Certificate of Analysis (COA) and Material Safety Data Sheets (MSDS)"
    },
    {
      icon: Puzzle,
      title: "Custom Formulations & Packaging",
      description: "Tailored extract formulations and packaging solutions for your brand's needs."
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Efficient logistics network ensuring timely delivery worldwide"
    },
    {
      icon: MapPin,
      title: "Local Support",
      description: "Regional representatives providing personalized service"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Compliance with international regulations and standards"
    }
  ];

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-20 bg-[#FFF8EC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#126D39] mb-4">
            Why Brands Rely on Tirupati Herbal
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4" 
                   style={{ background: 'linear-gradient(135deg, #26C164 0%, #B85E0E 100%)' }}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#126D39] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
