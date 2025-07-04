
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
      name: "ISO 9001:2015",
      logo: "/lovable-uploads/c49a6aaf-ac2a-4762-be19-67b570030e9b.png"
    },
    {
      name: "HACCP",
      logo: "/lovable-uploads/e2b8a2cb-92d2-49e2-9e4b-63576e10ea61.png"
    },
    {
      name: "Halal",
      logo: "/lovable-uploads/543128e5-82f9-4400-ae75-3f62696ef26e.png"
    },
    {
      name: "Kosher",
      logo: "/lovable-uploads/1cfd7f1f-b6af-41d2-8914-d02fcb1db100.png"
    },
    {
      name: "WHO-GMP",
      logo: "/lovable-uploads/be6c6a7b-5e52-4daa-a54d-ec6a0e0b7418.png"
    },
    {
      name: "FSSAI",
      logo: "/lovable-uploads/d00a5f04-d9a4-41b3-ab40-af4e732e76dc.png"
    }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-[#FFF8EC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#126D39] mb-4">
            Globally Recognized Standards
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our commitment to quality is backed by internationally recognized certifications:
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
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
