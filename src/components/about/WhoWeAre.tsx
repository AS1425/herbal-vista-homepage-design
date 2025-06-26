
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
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/d3d1d20f-a80f-4f82-a706-a72cfe49cf76.png" 
                alt="Herbal extract powder and senna pods on wooden surface"
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
                <strong>Tirupati Herbal</strong> is an <strong>ISO 9001:2015, GMP and HALAL certified</strong> company based in Bazpur, District Udham Singh Nagar, Uttarakhand, India.
              </p>
              <p>
                Our core business encompass manufacturing of <strong>Calcium Sennoside & Extracts of Senna leaves and pods</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Second image and content section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-3xl font-bold text-[#126D39] mb-6">
              Quality Standards
            </h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                We aim to maintain the quality of the product as we perform different stringent quality measures under the strict direction of our skilled professionals.
              </p>
              
              <h4 className="text-2xl font-bold text-[#126D39] mt-8 mb-4">
                Research & Development
              </h4>
              <p>
                The laboratory is not only equipped with sophisticated instruments but also manned by highly skilled and experienced professionals. We also have a close co-ordination with International Analytical Laboratories for additional high level facilities.
              </p>
              
              <p className="mt-6">
                We at Tirupati Herbal are committed to provide natural, safe & pure products, making sure that we deliver as per client's requirements & needs. All our products are manufactured from the Selected quality Raw material. Moreover, we have modern technology, good manufacturing practices & stringent quality control of raw materials, processed & finished products, we ensure superior quality & product consistency.
              </p>
            </div>
          </div>

          <div 
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/27f8cb2a-7a52-48e8-8ef3-b3bbc45d8734.png" 
                alt="Modern laboratory equipment and herbal research facility"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
