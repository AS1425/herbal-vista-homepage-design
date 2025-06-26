
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
      image: "/lovable-uploads/29e27b2c-c84d-4d49-8893-75284b1034cc.png"
    },
    {
      name: "ISO 9001:2015",
      image: "/lovable-uploads/fe4af3e4-b6ad-49d7-8162-e78ddfcad490.png"
    },
    {
      name: "HACCP",
      image: "/lovable-uploads/c62804f3-b9c7-457d-8a3a-8ce402a21bbe.png"
    },
    {
      name: "FSSAI",
      image: "/lovable-uploads/57c254cc-fb57-4d16-945e-7bebb5031402.png"
    },
    {
      name: "USDA Organic",
      image: "/lovable-uploads/4f33868a-beaa-4095-8be7-bd76250dc77c.png"
    },
    {
      name: "HALAL Certified",
      image: "/lovable-uploads/58e6f61d-c528-4131-abe7-7aacfefd1b1a.png"
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
        
        <div className="max-w-6xl mx-auto">
          <div 
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-3">
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="max-w-full max-h-full object-contain"
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
