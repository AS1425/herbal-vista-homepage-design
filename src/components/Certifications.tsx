
import { useEffect, useRef, useState } from "react";

const Certifications = () => {
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

  const certifications = [
    {
      name: "WHO-GMP",
      logo: "/lovable-uploads/26b5e005-7624-4314-a628-4ada653f0e0c.png"
    },
    {
      name: "ISO 9001:2015",
      logo: "/lovable-uploads/c49a6aaf-ac2a-4762-be19-67b570030e9b.png"
    },
    {
      name: "HACCP",
      logo: "/lovable-uploads/e2b8a2cb-92d2-49e2-9e4b-63576e10ea61.png"
    },
    {
      name: "FSSAI",
      logo: "/lovable-uploads/56c393dd-3edd-4f4f-b645-d1040ed8fa66.png"
    },
    {
      name: "USDA Organic",
      logo: "/lovable-uploads/6dac4e6c-4c7e-4a2f-a6ed-e6c6545d5d41.png"
    },
    {
      name: "HALAL Certified",
      logo: "/lovable-uploads/543128e5-82f9-4400-ae75-3f62696ef26e.png"
    }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#126D39] mb-4">
            Globally Recognized Standards
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our commitment to quality is backed by internationally recognized certifications:
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <img 
                    src={cert.logo} 
                    alt={cert.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-[#126D39]">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
