
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Leaf } from "lucide-react";

const ProductAccordion = () => {
  const products = [
    {
      name: "Akarkara Extract",
      botanicalName: "Anacyclus Pyrethrum",
      partUsed: "Root",
      standardization: "Hexane soluble lipid 0.20%",
      testingMethod: "Chemical Analysis",
      description: "Natural vitality enhancer supporting cognitive function and overall wellness.",
      image: "/lovable-uploads/9c203346-46f2-4468-b79d-a4b3284da568.png"
    },
    {
      name: "Aloe Vera",
      botanicalName: "Aloe barbadensis",
      partUsed: "Whole Leaf",
      standardization: "Gel, Dry Powder 200:1, Aloin 10-50%",
      testingMethod: "HPLC",
      description: "Soothing and hydrating botanical extract for skin health and digestive wellness.",
      image: "/lovable-uploads/03269bfa-89c9-4ab0-b77f-ecf852aa10e0.png"
    },
    {
      name: "Amla Extract",
      botanicalName: "Emblica officinalis",
      partUsed: "Fruit",
      standardization: "Up to 40% Tannins (Titration), 30% Polyphenols (UV)",
      testingMethod: "Titration, UV",
      description: "Powerful antioxidant-rich extract supporting immunity and natural vitality.",
      image: "/lovable-uploads/1de69854-ba1b-48f8-bfc7-0c2831e9c04c.png"
    },
    {
      name: "Arjuna Extract",
      botanicalName: "Terminalia Arjuna",
      partUsed: "Stem Bark",
      standardization: "0.5% Arjunolic Acid",
      testingMethod: "HPLC",
      description: "Traditional heart-healthy botanical extract supporting cardiovascular wellness.",
      image: "/lovable-uploads/fc6735d8-6233-4ebc-8788-74ae1f914092.png"
    },
    {
      name: "Ashwagandha Extract",
      botanicalName: "Withania Somnifera",
      partUsed: "Root",
      standardization: "Up to 10% Withanolides",
      testingMethod: "Gravimetric",
      description: "Adaptogenic herb extract for stress management and energy enhancement.",
      image: "/lovable-uploads/c6d12ca1-59dd-453b-9927-e8c086f765a1.png"
    },
    {
      name: "Bacopa Extract",
      botanicalName: "Bacopa Monnieri",
      partUsed: "Dried Aerial Part",
      standardization: "Up to 50% Bacosides",
      testingMethod: "HPLC",
      description: "Cognitive support botanical extract enhancing memory and mental clarity.",
      image: "/lovable-uploads/6501f360-bb41-43c6-858b-203c0ebc0573.png"
    },
    {
      name: "Banaba Extract",
      botanicalName: "Lagerstroemia Speciosa",
      partUsed: "Dried Leaves",
      standardization: "Up to 20% Corosolic Acid",
      testingMethod: "HPLC",
      description: "Natural metabolic support extract for healthy blood sugar management.",
      image: "/lovable-uploads/1fe63eb7-10e6-4dd2-b6ba-11e10b85a4e7.png"
    },
    {
      name: "Boswellia Extract",
      botanicalName: "Boswellia serrata",
      partUsed: "Dried Gum",
      standardization: "Up to 90% Boswellic Acids (Titration), 35% AKBA",
      testingMethod: "Titration, HPLC",
      description: "Anti-inflammatory botanical extract supporting joint health and mobility.",
      image: "/lovable-uploads/74835f6d-27bc-4269-aa3a-413a8519bfc2.png"
    },
    {
      name: "Cinnamon Extract",
      botanicalName: "Cinnamomum zeylanicum",
      partUsed: "Dried Stem Bark",
      standardization: "Up to 50% Polyphenols",
      testingMethod: "UV",
      description: "Aromatic spice extract with metabolic and antioxidant properties.",
      image: "/lovable-uploads/c6d12ca1-59dd-453b-9927-e8c086f765a1.png"
    },
    {
      name: "Cocoa Extract",
      botanicalName: "Theobroma cacao",
      partUsed: "Seed",
      standardization: "Up to 20% Theobromine, 60% Polyphenols",
      testingMethod: "HPLC, UV",
      description: "Rich antioxidant extract supporting cardiovascular and cognitive health.",
      image: "/lovable-uploads/1de69854-ba1b-48f8-bfc7-0c2831e9c04c.png"
    },
    {
      name: "Cranberry Extract",
      botanicalName: "Vaccinium Macrocarpon",
      partUsed: "Fruit",
      standardization: "25% Anthocyanins",
      testingMethod: "UV",
      description: "Urinary tract health support with powerful antioxidant compounds.",
      image: "/lovable-uploads/1de69854-ba1b-48f8-bfc7-0c2831e9c04c.png"
    },
    {
      name: "Fenugreek Extract",
      botanicalName: "Trigonella foenum-graecum",
      partUsed: "Seed",
      standardization: "Up to 90% 4-hydroxyisoleucine, 50% Saponins",
      testingMethod: "HPLC, Gravimetric",
      description: "Metabolic support extract for healthy blood sugar and digestive wellness.",
      image: "/lovable-uploads/1de69854-ba1b-48f8-bfc7-0c2831e9c04c.png"
    },
    {
      name: "Garcinia Cambogia Extract",
      botanicalName: "Garcinia cambogia",
      partUsed: "Dried Fruit Rind",
      standardization: "70% Hydroxycitric Acid (Water + Non-Water Soluble)",
      testingMethod: "Titration",
      description: "Natural weight management support with appetite control properties.",
      image: "/lovable-uploads/1de69854-ba1b-48f8-bfc7-0c2831e9c04c.png"
    },
    {
      name: "Ginger Extract",
      botanicalName: "Zingiber officinale",
      partUsed: "Rhizome",
      standardization: "25% Gingerols Powder, 40% Gingerol Oleoresin",
      testingMethod: "HPLC",
      description: "Digestive wellness extract with anti-inflammatory and warming properties.",
      image: "/lovable-uploads/c6d12ca1-59dd-453b-9927-e8c086f765a1.png"
    },
    {
      name: "Ginseng Extract",
      botanicalName: "Panax ginseng",
      partUsed: "Dried Root",
      standardization: "80% Ginsenosides (UV), 40% Ginsenosides (HPLC)",
      testingMethod: "UV, HPLC",
      description: "Adaptogenic energy enhancer supporting vitality and mental performance.",
      image: "/lovable-uploads/c6d12ca1-59dd-453b-9927-e8c086f765a1.png"
    },
    {
      name: "Gotukola Extract",
      botanicalName: "Centella Asiatica",
      partUsed: "Whole Plant",
      standardization: "50% Triterpenes / Asiaticosides",
      testingMethod: "HPLC",
      description: "Brain health support extract enhancing cognitive function and circulation.",
      image: "/lovable-uploads/6501f360-bb41-43c6-858b-203c0ebc0573.png"
    },
    {
      name: "Green Coffee Extract",
      botanicalName: "Coffee Arabica",
      partUsed: "Seed",
      standardization: "Up to 60% Chlorogenic Acid",
      testingMethod: "HPLC",
      description: "Antioxidant-rich extract supporting metabolic health and weight management.",
      image: "/lovable-uploads/1de69854-ba1b-48f8-bfc7-0c2831e9c04c.png"
    },
    {
      name: "Green Tea Extract",
      botanicalName: "Camellia sinensis",
      partUsed: "Tea Leaves",
      standardization: "Up to 50% EGCG",
      testingMethod: "HPLC",
      description: "Powerful antioxidant extract supporting metabolism and cellular health.",
      image: "/lovable-uploads/6501f360-bb41-43c6-858b-203c0ebc0573.png"
    },
    {
      name: "Guggul Extract",
      botanicalName: "Commiphora Mukul",
      partUsed: "Dried Gum",
      standardization: "Up to 10% Guggulsterones",
      testingMethod: "HPLC",
      description: "Traditional lipid management extract supporting healthy cholesterol levels.",
      image: "/lovable-uploads/fc6735d8-6233-4ebc-8788-74ae1f914092.png"
    },
    {
      name: "Gymnema Extract",
      botanicalName: "Gymnema sylvestre",
      partUsed: "Dried Leaf",
      standardization: "Up to 75% Gymnemic Acids",
      testingMethod: "Gravimetry",
      description: "Sugar control botanical extract supporting healthy glucose metabolism.",
      image: "/lovable-uploads/6501f360-bb41-43c6-858b-203c0ebc0573.png"
    },
    {
      name: "Kalmegh Extract",
      botanicalName: "Andrographis Paniculata",
      partUsed: "Dried Leaf",
      standardization: "Up to 95% Andrographolide",
      testingMethod: "HPLC",
      description: "Immune system support extract with natural detoxifying properties.",
      image: "/lovable-uploads/6501f360-bb41-43c6-858b-203c0ebc0573.png"
    },
    {
      name: "Mangosteen Extract",
      botanicalName: "Garcinia Mangostana",
      partUsed: "Fruit",
      standardization: "Up to 40% Mangostin",
      testingMethod: "HPLC",
      description: "Antioxidant-rich tropical extract supporting immune and skin health.",
      image: "/lovable-uploads/1de69854-ba1b-48f8-bfc7-0c2831e9c04c.png"
    },
    {
      name: "Mucuna Extract",
      botanicalName: "Mucuna Pruriens",
      partUsed: "Dried Seed",
      standardization: "Up to 60% Levodopa",
      testingMethod: "HPLC",
      description: "Mood and vitality support extract with natural L-DOPA compounds.",
      image: "/lovable-uploads/1de69854-ba1b-48f8-bfc7-0c2831e9c04c.png"
    },
    {
      name: "Mulethi Extract",
      botanicalName: "Glycyrrhiza glabra",
      partUsed: "Dried Root",
      standardization: "Up to 25% Glycyrrhizinic Acid",
      testingMethod: "HPLC",
      description: "Respiratory and digestive wellness extract with soothing properties.",
      image: "/lovable-uploads/c6d12ca1-59dd-453b-9927-e8c086f765a1.png"
    },
    {
      name: "Pomegranate Extract",
      botanicalName: "Punica Granatum",
      partUsed: "Fruit",
      standardization: "Up to 40% Ellagic Acid",
      testingMethod: "HPLC",
      description: "Antioxidant powerhouse extract supporting heart and cellular health.",
      image: "/lovable-uploads/1de69854-ba1b-48f8-bfc7-0c2831e9c04c.png"
    },
    {
      name: "Safed Musli",
      botanicalName: "Chlorophytum",
      partUsed: "Root & Seed",
      standardization: "Up to 50% Saponins",
      testingMethod: "Gravimetric",
      description: "Traditional vitality enhancer supporting energy and reproductive health.",
      image: "/lovable-uploads/c6d12ca1-59dd-453b-9927-e8c086f765a1.png"
    },
    {
      name: "Senna Extract",
      botanicalName: "Cassia Angustifolia",
      partUsed: "Dried Leaf",
      standardization: "Up to 60% Calcium Sennoside",
      testingMethod: "UV",
      description: "Natural digestive support extract promoting healthy bowel function.",
      image: "/lovable-uploads/6501f360-bb41-43c6-858b-203c0ebc0573.png"
    },
    {
      name: "Tribulus Extract",
      botanicalName: "Tribulus terrestris",
      partUsed: "Dried Aerial Part",
      standardization: "Up to 60% Steroidal Saponins",
      testingMethod: "Gravimetric",
      description: "Athletic performance support extract enhancing strength and endurance.",
      image: "/lovable-uploads/6501f360-bb41-43c6-858b-203c0ebc0573.png"
    },
    {
      name: "Turmeric Extract",
      botanicalName: "Curcuma longa",
      partUsed: "Dried Rhizome",
      standardization: "Up to 95% Curcuminoids",
      testingMethod: "HPLC",
      description: "Golden anti-inflammatory extract supporting joint health and wellness.",
      image: "/lovable-uploads/c6d12ca1-59dd-453b-9927-e8c086f765a1.png"
    },
    {
      name: "Valerian Extract",
      botanicalName: "Valeriana officinalis",
      partUsed: "Root",
      standardization: "0.8% Valerenic Acid (Powder), 10% Valerenic Acid (Paste)",
      testingMethod: "HPLC",
      description: "Natural relaxation support extract promoting restful sleep and calm.",
      image: "/lovable-uploads/c6d12ca1-59dd-453b-9927-e8c086f765a1.png"
    }
  ];

  return (
    <section 
      id="products-accordion" 
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
            Our Botanical Extract Portfolio
          </h2>
          <p className="text-lg text-gray-700">
            Standardized herbal ingredients with verified potency and purity
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
                  <div className="w-16 h-16 bg-[#26C164]/10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#126D39] mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 italic mb-1">
                      {product.botanicalName}
                    </p>
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
                      <span className="font-medium text-[#126D39]">Part Used:</span>
                      <p className="text-gray-700">{product.partUsed}</p>
                    </div>
                    <div>
                      <span className="font-medium text-[#126D39]">Testing Method:</span>
                      <p className="text-gray-700">{product.testingMethod}</p>
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-[#126D39]">Standardized For:</span>
                    <p className="text-gray-700">{product.standardization}</p>
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

export default ProductAccordion;
