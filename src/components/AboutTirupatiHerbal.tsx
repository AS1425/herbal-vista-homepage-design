
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutTirupatiHerbal = () => {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  };

  return (
    <section id="who-we-are" className="py-20 bg-[#F8F9F4]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#26C164] to-[#B85E0E] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Herbal extract manufacturing facility"
                className="relative w-full h-[400px] object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-[#B85E0E] uppercase tracking-wider mb-2">
                  About Tirupati Herbal
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold text-[#126D39] leading-tight">
                  Your Trusted Partner in
                  <span className="text-[#26C164]"> Botanical Extraction</span>
                </h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Since our establishment, Tirupati Herbal has been at the forefront of herbal extract manufacturing, 
                combining traditional wisdom with cutting-edge technology to deliver premium botanical solutions.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#26C164] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-[#126D39]">Quality Assurance:</span> 
                    Every batch is rigorously tested for purity, potency, and consistency
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#26C164] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-[#126D39]">Scientific Approach:</span> 
                    State-of-the-art extraction methods preserve bioactive compounds
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#26C164] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-[#126D39]">Global Standards:</span> 
                    Certified facilities meeting international quality benchmarks
                  </p>
                </div>
              </div>

              <Button 
                onClick={navigateToAbout}
                className="bg-[#B85E0E] hover:bg-[#A0520C] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTirupatiHerbal;
