
import { useEffect, useRef, useState } from "react";

const OurFoundation = () => {
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
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: '#FFF8EC' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#126D39] mb-6">
              Our Foundation, Our Focus
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                With a focused mission to extract nature's best, we have built a strong reputation through <strong>certified processes, transparent business ethics, and consistent product outcomes</strong>.
              </p>
              <p>
                From local sourcing in India to customized delivery for global clients – <strong>quality and compliance are always at the core</strong>.
              </p>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Aerial view of manufacturing facility"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFoundation;
