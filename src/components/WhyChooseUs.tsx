
import { Beaker, Hand, Factory, Microscope, Puzzle } from "lucide-react";
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
      title: "Ethical Sourcing",
      description: "Ingredients sourced from certified farms for sustainability and authenticity."
    },
    {
      icon: Factory,
      title: "Scalable Production",
      description: "Flexible production volumes, from small sample batches to large-scale orders."
    },
    {
      icon: Microscope,
      title: "Lab-Tested Purity",
      description: "Rigorous testing for each batch. Every extract comes with a COA and MSDS for quality assurance."
    },
    {
      icon: Puzzle,
      title: "Custom Formulations",
      description: "Tailored extract formulations and packaging solutions to fit your brand's needs."
    }
  ];

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-20 bg-[#FFF8EC] relative overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-[#26C164]"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-[#26C164]"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#126D39] mb-4">
            Why Brands Rely on Tirupati Herbal
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#26C164] bg-opacity-10 rounded-full mb-6 group-hover:bg-[#26C164] transition-colors">
                <feature.icon className="w-8 h-8 text-[#26C164]" />
              </div>
              <h3 className="text-xl font-semibold text-[#126D39] mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
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
