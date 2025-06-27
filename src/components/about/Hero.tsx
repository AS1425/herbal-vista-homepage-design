
import { useEffect, useRef, useState } from "react";

const Hero = () => {
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
      className="relative min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #1E774C 0%, #126D39 100%)'
      }}
    >
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-20"
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            About <span className="text-[#FFF8EC]">Tirupati Herbal</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Certified herbal manufacturer specializing in high-quality herbal extracts and natural wellness solutions.
          </p>
          <div className="w-24 h-1 bg-[#B85E0E] mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
