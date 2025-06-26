
import { useEffect, useRef, useState } from "react";
import { FlaskConical, Microscope } from "lucide-react";

const QualityCommitment = () => {
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
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div 
            className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#26C164] to-[#B85E0E] flex items-center justify-center shadow-lg">
              <FlaskConical className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#126D39] mb-4 text-center">
              Uncompromising Product Quality
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Our facility follows rigorous testing processes from raw material to final batch, governed by Good Manufacturing Practices (GMP).
            </p>
          </div>

          <div 
            className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "150ms" }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#26C164] to-[#B85E0E] flex items-center justify-center shadow-lg">
              <Microscope className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#126D39] mb-4 text-center">
              Advanced R&D Lab
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Our lab is equipped with sophisticated testing instruments and works in close collaboration with international analytical labs for verified output.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCommitment;
