
import { useEffect, useRef, useState } from "react";
import { Factory, Users, Award, FileCheck } from "lucide-react";

const ManufacturingExcellence = () => {
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
      className="py-20 bg-[#FFF8EC]"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <img
                src="/lovable-uploads/490f2d50-6dcd-4bdc-b74b-3d293f3e66a0.png"
                alt="Advanced Manufacturing Facility"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#126D39] mb-4">
              Our Advanced Manufacturing Facility
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Precision, consistency, and care in every batch.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Factory className="w-6 h-6 text-[#126D39] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">Key Function: Extraction</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[#126D39] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">Area: 150,000 sq. ft.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[#126D39] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-xs font-bold">C</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">Capacity: 1,500 MT/year (Raw Material)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-[#126D39] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">Staff Strength: 200+</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[#126D39] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-xs font-bold">I</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">Infrastructure: Extractors, Purification, Drying & Formulations</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Award className="w-6 h-6 text-[#126D39] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">Certifications: ISO 9001:2015, HACCP, Halal, Kosher</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FileCheck className="w-6 h-6 text-[#126D39] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">License: FSSAI Approved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingExcellence;
