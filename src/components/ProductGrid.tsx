
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const ProductGrid = () => {
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

  const products = [
    {
      name: "Amla Extract",
      description: "Promotes immunity and skin health",
      image: "/lovable-uploads/29afdef2-019e-4a7c-9d4b-c33f4fb28efc.png"
    },
    {
      name: "Aloe Vera Extract",
      description: "Soothes and hydrates skin",
      image: "/lovable-uploads/036983db-6cf0-48c1-9e8a-24fd64f6a037.png"
    },
    {
      name: "Akarkara Extract",
      description: "Supports vitality and cognition",
      image: "/lovable-uploads/b75c7ca3-f8fd-423d-abab-58fcafaf46af.png"
    },
    {
      name: "Ashwagandha Extract",
      description: "Reduces stress, boosts energy",
      image: "/lovable-uploads/5adb452a-1ad6-41e8-bf82-a7c69800fcc1.png"
    }
  ];

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#126D39] mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Standardized extracts for diverse applications – From wellness to pharmaceuticals, 
            we have a solution to meet your specific needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#126D39] mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-[#26C164] hover:bg-[#1F9B57] text-white px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            Explore More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
