
import { useEffect, useRef, useState } from "react";
import { MapPin, Globe } from "lucide-react";

const GlobalPresence = () => {
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

  const regions = [
    { name: "North America", countries: "USA, Canada" },
    { name: "Europe", countries: "Germany, UK, France, Italy" },
    { name: "Asia Pacific", countries: "Japan, Australia, Singapore" },
    { name: "Middle East", countries: "UAE, Saudi Arabia, Jordan" },
    { name: "Africa", countries: "South Africa, Nigeria, Kenya" },
    { name: "South America", countries: "Brazil, Argentina, Chile" }
  ];

  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: '#FFF8EC' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#26C164] to-[#B85E0E] flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#126D39] mb-4">
            Global Presence
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Delivering Quality to Over 25 Countries Worldwide
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className={`relative bg-white rounded-2xl p-8 shadow-xl mb-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="text-center mb-8">
              <img 
                src="https://images.unsplash.com/photo-1614851099175-e5b30eb872c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="World map showing global reach"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-[#26C164] mr-2" />
                  <h3 className="text-lg font-bold text-[#126D39]">
                    {region.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  {region.countries}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
