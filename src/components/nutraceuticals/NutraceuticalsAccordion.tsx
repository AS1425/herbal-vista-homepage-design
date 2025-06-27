
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
      name: "L-Arginine Base",
      standardization: "98%",
      testingMethod: "Titration",
      description: "Supports nitric oxide production and circulation for cardiovascular health."
    },
    {
      name: "L-Carnitine Tartrate",
      standardization: "98%",
      testingMethod: "HPLC",
      description: "Essential for energy metabolism and fat burning processes."
    },
    {
      name: "Creatine Monohydrate",
      standardization: "99%",
      testingMethod: "UV",
      description: "Enhances muscle strength, power, and athletic performance."
    },
    {
      name: "Coenzyme Q10",
      standardization: "10%",
      testingMethod: "HPLC",
      description: "Powerful antioxidant for heart and cellular energy production."
    },
    {
      name: "Glucosamine Sulphate",
      standardization: "99%",
      testingMethod: "Titration",
      description: "Supports joint health and cartilage maintenance."
    },
    {
      name: "MSM (Methylsulfonylmethane)",
      standardization: "99%",
      testingMethod: "Titration",
      description: "Natural sulfur compound supporting joint flexibility and comfort."
    },
    {
      name: "Omega 3 Fish Oil",
      standardization: "30% EPA, 20% DHA",
      testingMethod: "GC",
      description: "Essential fatty acids for brain, heart, and inflammatory response support."
    },
    {
      name: "Multivitamin Blend",
      standardization: "NA",
      testingMethod: "Internal Standard",
      description: "Comprehensive blend of essential vitamins for daily nutritional support."
    },
    {
      name: "Vitamin C (Ascorbic Acid)",
      standardization: "99%",
      testingMethod: "Titration",
      description: "Powerful antioxidant supporting immune function and collagen synthesis."
    },
    {
      name: "Zinc Gluconate",
      standardization: "12% Zn",
      testingMethod: "UV",
      description: "Essential mineral for immune function and wound healing."
    },
    {
      name: "Magnesium Oxide",
      standardization: "60% Mg",
      testingMethod: "Titration",
      description: "Vital mineral for muscle function, bone health, and energy metabolism."
    },
    {
      name: "Calcium Citrate",
      standardization: "21% Ca",
      testingMethod: "Titration",
      description: "Highly bioavailable calcium for bone health and muscle function."
    },
    {
      name: "Lycopene 10%",
      standardization: "10%",
      testingMethod: "HPLC",
      description: "Potent carotenoid antioxidant supporting prostate and cardiovascular health."
    },
    {
      name: "Biotin",
      standardization: "1%",
      testingMethod: "HPLC",
      description: "B-vitamin essential for hair, skin, nail health and energy metabolism."
    },
    {
      name: "Inositol",
      standardization: "99%",
      testingMethod: "UV",
      description: "Supports cellular signaling and mental wellness balance."
    },
    {
      name: "Choline Bitartrate",
      standardization: "98%",
      testingMethod: "Titration",
      description: "Essential nutrient for brain function and liver health."
    },
    {
      name: "Alpha Lipoic Acid",
      standardization: "98%",
      testingMethod: "HPLC",
      description: "Universal antioxidant supporting blood sugar balance and nerve health."
    },
    {
      name: "L-Theanine",
      standardization: "99%",
      testingMethod: "HPLC",
      description: "Promotes mental relaxation without drowsiness and stress relief."
    },
    {
      name: "Vitamin B-Complex",
      standardization: "Blended Actives",
      testingMethod: "Internal Spec",
      description: "Complete B-vitamin complex for energy production and nervous system support."
    },
    {
      name: "Selenium Enriched Yeast",
      standardization: "0.2% Se",
      testingMethod: "AAS",
      description: "Organic selenium for antioxidant protection and thyroid function."
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
            Our Nutraceutical Product Portfolio
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
                <div className="flex items-center space-x-4 text-left w-full">
                  <div className="w-16 h-16 bg-[#26C164]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 bg-[#26C164] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{product.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="flex-1">
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
