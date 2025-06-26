
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
      <div className="container mx-auto px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="image-container" style={{ 
              minHeight: '520px',
              maxHeight: '520px',
              borderRadius: '8px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}>
              <img 
                src="/lovable-uploads/0f939594-4bd5-47ba-893b-b2e6d73237aa.png" 
                alt="Modern laboratory with test tubes and botanical extracts"
                style={{
                  height: '100%',
                  width: '100%',
                  maxHeight: '520px',
                  objectFit: 'cover',
                  aspectRatio: '4/3'
                }}
              />
            </div>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#126D39] mb-8">
              A Certified Leader in Botanical Extraction
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Tirupati Herbal</strong> is an <strong>ISO 9001:2015, GMP and HALAL certified</strong> company based in Bazpur, District Udham Singh Nagar, Uttarakhand, India.
              </p>
              <p>
                Our core business encompass manufacturing of <strong>Calcium Sennoside & Extracts of Senna leaves and pods</strong>.
              </p>
              
              <h3 className="text-2xl font-bold text-[#126D39] mt-8 mb-4">
                Quality Standards
              </h3>
              <p>
                We aim to maintain the quality of the product as we perform different stringent quality measures under the strict direction of our skilled professionals.
              </p>
              
              <h3 className="text-2xl font-bold text-[#126D39] mt-8 mb-4">
                Research & Development
              </h3>
              <p>
                The laboratory is not only equipped with sophisticated instruments but also manned by highly skilled and experienced professionals. We also have a close co-ordination with International Analytical Laboratories for additional high level facilities.
              </p>
              
              <p className="mt-6">
                We at Tirupati Herbal are committed to provide natural, safe & pure products, making sure that we deliver as per client's requirements & needs. All our products are manufactured from the Selected quality Raw material. Moreover, we have modern technology, good manufacturing practices & stringent quality control of raw materials, processed & finished products, we ensure superior quality & product consistency. At our manufacturing facility, Good manufacturing practices including safety, cleanliness, and hygiene are strictly followed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
