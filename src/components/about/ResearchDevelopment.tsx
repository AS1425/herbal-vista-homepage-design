
import { useEffect, useRef, useState } from "react";
import { Microscope, FlaskConical, Award } from "lucide-react";

const ResearchDevelopment = () => {
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Advanced laboratory equipment and testing"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#126D39] mb-6">
              Science Behind Every Batch
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our state-of-the-art R&D facility is equipped with modern instruments and staffed by experienced researchers dedicated to botanical excellence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Strategic partnerships with international analytical labs ensure top-tier quality control and compliance with global standards.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#26C164] to-[#B85E0E] flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-medium text-[#126D39]">Advanced Analytical Testing</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#26C164] to-[#B85E0E] flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-medium text-[#126D39]">Custom Formulation Development</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#26C164] to-[#B85E0E] flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-medium text-[#126D39]">International Lab Partnerships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchDevelopment;
