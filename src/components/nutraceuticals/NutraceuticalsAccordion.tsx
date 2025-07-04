import React, { useState } from "react";
import NutraceuticalModal from "@/components/NutraceuticalModal";

const NutraceuticalsAccordion = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const products = [
    {
      name: "Beta Carotene Powder",
      standardization: "10%",
      testingMethod: "UV",
      description: "Natural provitamin A for eye health and immune system support."
    },
    {
      name: "Beta Carotene Oil",
      standardization: "20%",
      testingMethod: "UV",
      description: "Concentrated oil-soluble beta carotene for enhanced bioavailability."
    },
    {
      name: "Grape Seed Extract",
      standardization: "95% OPC",
      testingMethod: "HPLC",
      description: "Powerful antioxidant complex for cardiovascular and skin health."
    },
    {
      name: "Lutein Free Oleoresin",
      standardization: "20%",
      testingMethod: "HPLC",
      description: "Oil-based lutein extract for optimal absorption and eye protection."
    },
    {
      name: "Lutein Free Powder",
      standardization: "10%",
      testingMethod: "HPLC",
      description: "Powdered lutein for macular health and blue light protection."
    },
    {
      name: "Lycopene Oil",
      standardization: "6%",
      testingMethod: "UV",
      description: "Oil-soluble lycopene for prostate health and antioxidant protection."
    },
    {
      name: "Lycopene Powder",
      standardization: "10%",
      testingMethod: "HPLC",
      description: "Concentrated lycopene powder for cardiovascular wellness support."
    },
    {
      name: "Spirulina",
      standardization: "Protein 60%, Phycocyanin 15%",
      testingMethod: "UV + Gravimetry",
      description: "Complete superfood algae rich in protein and essential nutrients."
    }
  ];

  return (
    <>
      <section 
        id="nutraceuticals-accordion" 
        className="py-20 relative"
        style={{
          backgroundImage: `url('/lovable-uploads/9167e5a2-8203-4095-8c42-f211fb1bea4f.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/85"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#126D39] mb-4">
              Our Nutraceutical Extract Range
            </h2>
            <p className="text-lg text-gray-700">
              Science-backed ingredients with verified purity and potency for optimal wellness
            </p>
          </div>

          <div className="space-y-10">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white/95 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow backdrop-blur-sm p-6"
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  {/* Product Placeholder - 40% width on desktop */}
                  <div className="lg:w-2/5 flex justify-center lg:justify-start">
                    <div className="w-full max-w-[350px] lg:max-w-none">
                      <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-[#26C164] to-[#126D39] rounded-lg shadow-md flex items-center justify-center">
                        <span className="text-white text-6xl lg:text-8xl font-bold drop-shadow-lg">
                          {product.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Information - 60% width on desktop */}
                  <div className="lg:w-3/5 flex flex-col justify-center space-y-4">
                    <div>
                      <h3 
                        className="text-xl lg:text-2xl font-bold text-[#126D39] mb-3 cursor-pointer hover:text-[#26C164] transition-colors"
                        onClick={() => handleProductClick(product)}
                      >
                        {product.name}
                      </h3>
                      <p className="text-base text-gray-600 mb-4 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                    
                    {/* Product Attributes Table */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                        <div className="p-4 bg-gray-50/50">
                          <span className="block font-semibold text-[#126D39] text-sm mb-1">Standardized For:</span>
                          <p className="text-gray-700 text-sm">{product.standardization}</p>
                        </div>
                        <div className="p-4">
                          <span className="block font-semibold text-[#126D39] text-sm mb-1">Testing Method:</span>
                          <p className="text-gray-700 text-sm">{product.testingMethod}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <NutraceuticalModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
      )}
    </>
  );
};

export default NutraceuticalsAccordion;
