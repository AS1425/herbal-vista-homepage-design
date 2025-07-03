
import { useEffect, useRef, useState } from "react";
import { MapPin, Truck } from "lucide-react";

const GlobalReach = () => {
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

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#1F8A4D] text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Supplying Extracts Across Continents
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            From Asia to Europe, Americas to Africa - our premium botanical extracts reach customers worldwide, 
            ensuring global access to nature's finest ingredients.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <MapPin className="w-16 h-16 mb-4 text-[#FFF8EC]" />
              <h3 className="text-2xl font-semibold mb-2">Global Presence</h3>
              <p className="text-lg opacity-90">
                Serving customers across 25+ countries with consistent quality and reliable supply chains.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Truck className="w-16 h-16 mb-4 text-[#FFF8EC]" />
              <h3 className="text-2xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-lg opacity-90">
                Efficient logistics network ensuring timely delivery of your herbal extract orders worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
