
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductGrid = () => {
  const navigate = useNavigate();

  const navigateToBotanicalExtracts = () => {
    navigate('/botanical-extracts');
  };

  const products = [
    {
      title: "Standardized Herbal Extracts",
      description: "Premium quality extracts with guaranteed potency and purity for pharmaceutical applications.",
      image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: ["GMP Certified", "Lab Tested", "Consistent Quality"]
    },
    {
      title: "Nutraceutical Compounds",
      description: "Scientifically formulated botanical compounds for health and wellness products.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: ["Natural Sources", "Bioavailable", "Third-Party Tested"]
    },
    {
      title: "Custom Formulations",
      description: "Tailored extract solutions designed to meet your specific requirements and applications.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: ["Bespoke Solutions", "R&D Support", "Scale-Up Services"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-[#B85E0E] uppercase tracking-wider mb-2">
            Our Products
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-[#126D39] mb-6 leading-tight">
            Premium <span className="text-[#26C164]">Botanical Extracts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of herbal extracts, meticulously crafted for various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#126D39] mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#26C164] rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-[#26C164] text-[#26C164] hover:bg-[#26C164] hover:text-white transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={navigateToBotanicalExtracts}
            className="bg-[#26C164] hover:bg-[#1F9B57] text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
          >
            Explore More Products
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
