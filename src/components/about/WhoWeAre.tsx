
import { useEffect, useRef, useState } from "react";
import { Shield, FlaskConical } from "lucide-react";

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
        {/* Main Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column: Full-Height Image */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div 
              className="w-full"
              style={{ 
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                aspectRatio: '4/3'
              }}
            >
              <img 
                src="/lovable-uploads/0f939594-4bd5-47ba-893b-b2e6d73237aa.png" 
                alt="Modern laboratory with Senna pods and botanical extracts"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Column: Content Block */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#126D39] mb-8">
              A Certified Leader in Botanical Extraction
            </h2>
            
            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Tirupati Herbal</strong> is an <strong>ISO 9001:2015, GMP and HALAL certified</strong> company based in Bazpur, District Udham Singh Nagar, Uttarakhand, India.
              </p>
              <p>
                Our core business encompasses manufacturing of <strong>Calcium Sennoside & Extracts of Senna leaves and pods</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Our Commitment Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#126D39]">
            Our Commitment to Quality & Innovation
          </h3>
        </div>

        {/* Two-Column Icon Strip */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Quality Standards Column */}
          <div 
            className={`bg-white rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#26C164] border-2 border-transparent ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              boxShadow: 'rgba(0,0,0,0.05) 0px 4px 10px',
              transitionDelay: '600ms'
            }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-[#26C164]/10 rounded-full mr-4">
                <Shield className="w-8 h-8 text-[#26C164]" strokeWidth={2} />
              </div>
              <h4 className="text-2xl font-bold text-[#126D39]">
                Quality Standards
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We aim to maintain the quality of the product as we perform different stringent quality measures under the strict direction of our skilled professionals.
            </p>
          </div>

          {/* Research & Development Column */}
          <div 
            className={`bg-white rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#26C164] border-2 border-transparent ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              boxShadow: 'rgba(0,0,0,0.05) 0px 4px 10px',
              transitionDelay: '800ms'
            }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-[#26C164]/10 rounded-full mr-4">
                <FlaskConical className="w-8 h-8 text-[#26C164]" strokeWidth={2} />
              </div>
              <h4 className="text-2xl font-bold text-[#126D39]">
                Research & Development
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The laboratory is not only equipped with sophisticated instruments but also manned by highly skilled and experienced professionals. We also have a close co-ordination with International Analytical Laboratories for additional high level facilities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We at Tirupati Herbal are committed to provide natural, safe & pure products, making sure that we deliver as per client's requirements & needs. All our products are manufactured from the Selected quality Raw material. Moreover, we have modern technology, good manufacturing practices & stringent quality control of raw materials, processed & finished products, we ensure superior quality & product consistency. At our manufacturing facility, Good manufacturing practices including safety, cleanliness, and hygiene are strictly followed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
