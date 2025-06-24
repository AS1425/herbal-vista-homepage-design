
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    "WHO-GMP",
    "ISO 9001:2015",
    "HALAL Certified",
    "USDA Organic",
    "HACCP",
    "FSSAI"
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#26C164] mb-4">
            Certifications & Quality Assurance
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our commitment to quality is backed by internationally recognized certifications and standards:
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-[#26C164] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-8 h-8 bg-[#26C164] rounded"></div>
                </div>
                <p className="text-sm font-medium text-[#126D39]">{cert}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button className="bg-[#B85E0E] hover:bg-[#A0520C] text-white px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <Download className="w-5 h-5 mr-2" />
              Download Certification Pack
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
