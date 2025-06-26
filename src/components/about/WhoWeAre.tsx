
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

  return (
    <section id="who-we-are" ref={sectionRef} className="py-20" style={{ backgroundColor: '#FFF8EC' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern herbal manufacturing facility"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#126D39] mb-6">
              A Certified Leader in Botanical Extraction
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Tirupati Herbal</strong> is an <strong>ISO 9001:2015, GMP & HALAL certified</strong> herbal manufacturer based in Bazpur, Uttarakhand.
              </p>
              <p>
                We specialize in producing <strong>high-purity Calcium Sennoside and extracts from Senna leaves and pods</strong>, trusted by nutraceutical companies globally.
              </p>
              <p>
                With a clear commitment to <strong>consistency, ethics, and science</strong>, we ensure premium-quality output from plant to package.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
