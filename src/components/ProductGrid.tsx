
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
      image: "/lovable-uploads/6b9ddeb1-5f42-48b8-a6ba-23eb3422d5c8.png"
    },
    {
      name: "Aloe Vera Extract",
      description: "Soothes and hydrates skin",
      image: "/lovable-uploads/24608fb0-76a1-4874-a642-5da7b24cca15.png"
    },
    {
      name: "Akarkara Extract",
      description: "Supports vitality and cognition",
      image: "/lovable-uploads/0b09a8cd-2f91-44e1-9da5-28f363dc7c93.png"
    },
    {
      name: "Ashwagandha Extract",
      description: "Reduces stress, boosts energy",
      image: "/lovable-uploads/0b09a8cd-2f91-44e1-9da5-28f363dc7c93.png"
    },
    {
      name: "Bacopa Extract",
      description: "Cognitive support botanical extract enhancing memory and mental clarity",
      image: "/lovable-uploads/e0e6fc48-00cb-47fa-9545-b2dccce9c6ab.png"
    },
    {
      name: "Cranberry Extract",
      description: "Urinary tract health support with powerful antioxidant compounds",
      image: "/lovable-uploads/7f992822-3a78-4432-abb5-043be53a6094.png"
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
        
        <div className="max-w-6xl mx-auto mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full ${
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
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
