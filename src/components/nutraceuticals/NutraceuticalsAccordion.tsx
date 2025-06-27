
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NutraceuticalsAccordion = () => {
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
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#126D39] mb-4">
            Our Nutraceutical Extract Range
          </h2>
          <p className="text-lg text-gray-700">
            Science-backed ingredients with verified purity and potency for optimal wellness
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {products.map((product, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/95 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <AccordionTrigger className="hover:no-underline px-6 py-4">
                <div className="flex items-start space-x-4 text-left w-full">
                  <div className="w-16 h-16 bg-[#26C164]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 bg-[#26C164] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{product.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-[#126D39] mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {product.description}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-[#126D39]">Standardized For:</span>
                      <p className="text-gray-700">{product.standardization}</p>
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-[#126D39]">Testing Method:</span>
                    <p className="text-gray-700">{product.testingMethod}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default NutraceuticalsAccordion;
