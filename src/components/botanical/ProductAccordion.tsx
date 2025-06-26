
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
      testingMethod: "Chemical Analysis"
    },
    {
      name: "Aloe Vera",
      botanicalName: "Aloe barbadensis",
      partUsed: "Whole Leaf",
      standardization: "Gel, Dry Powder 200:1, Aloin 10-50%",
      testingMethod: "HPLC"
    },
    {
      name: "Amla Extract",
      botanicalName: "Emblica officinalis",
      partUsed: "Fruit",
      standardization: "Up to 40% Tannins (Titration), 30% Polyphenols (UV)",
      testingMethod: "Titration, UV"
    },
    {
      name: "Arjuna Extract",
      botanicalName: "Terminalia Arjuna",
      partUsed: "Stem Bark",
      standardization: "0.5% Arjunolic Acid",
      testingMethod: "HPLC"
    },
    {
      name: "Ashwagandha Extract",
      botanicalName: "Withania Somnifera",
      partUsed: "Root",
      standardization: "Up to 10% Withanolides",
      testingMethod: "Gravimetric"
    },
    {
      name: "Bacopa Extract",
      botanicalName: "Bacopa Monnieri",
      partUsed: "Dried Aerial Part",
      standardization: "Up to 50% Bacosides",
      testingMethod: "HPLC"
    },
    {
      name: "Banaba Extract",
      botanicalName: "Lagerstroemia Speciosa",
      partUsed: "Dried Leaves",
      standardization: "Up to 20% Corosolic Acid",
      testingMethod: "HPLC"
    },
    {
      name: "Boswellia Extract",
      botanicalName: "Boswellia serrata",
      partUsed: "Dried Gum",
      standardization: "Up to 90% Boswellic Acids (Titration), 35% AKBA",
      testingMethod: "Titration, HPLC"
    },
    {
      name: "Cinnamon Extract",
      botanicalName: "Cinnamomum zeylanicum",
      partUsed: "Dried Stem Bark",
      standardization: "Up to 50% Polyphenols",
      testingMethod: "UV"
    },
    {
      name: "Cocoa Extract",
      botanicalName: "Theobroma cacao",
      partUsed: "Seed",
      standardization: "Up to 20% Theobromine, 60% Polyphenols",
      testingMethod: "HPLC, UV"
    },
    {
      name: "Cranberry Extract",
      botanicalName: "Vaccinium Macrocarpon",
      partUsed: "Fruit",
      standardization: "25% Anthocyanins",
      testingMethod: "UV"
    },
    {
      name: "Fenugreek Extract",
      botanicalName: "Trigonella foenum-graecum",
      partUsed: "Seed",
      standardization: "Up to 90% 4-hydroxyisoleucine, 50% Saponins",
      testingMethod: "HPLC, Gravimetric"
    },
    {
      name: "Garcinia Cambogia Extract",
      botanicalName: "Garcinia cambogia",
      partUsed: "Dried Fruit Rind",
      standardization: "70% Hydroxycitric Acid (Water + Non-Water Soluble)",
      testingMethod: "Titration"
    },
    {
      name: "Ginger Extract",
      botanicalName: "Zingiber officinale",
      partUsed: "Rhizome",
      standardization: "25% Gingerols Powder, 40% Gingerol Oleoresin",
      testingMethod: "HPLC"
    },
    {
      name: "Ginseng Extract",
      botanicalName: "Panax ginseng",
      partUsed: "Dried Root",
      standardization: "80% Ginsenosides (UV), 40% Ginsenosides (HPLC)",
      testingMethod: "UV, HPLC"
    },
    {
      name: "Gotukola Extract",
      botanicalName: "Centella Asiatica",
      partUsed: "Whole Plant",
      standardization: "50% Triterpenes / Asiaticosides",
      testingMethod: "HPLC"
    },
    {
      name: "Green Coffee Extract",
      botanicalName: "Coffee Arabica",
      partUsed: "Seed",
      standardization: "Up to 60% Chlorogenic Acid",
      testingMethod: "HPLC"
    },
    {
      name: "Green Tea Extract",
      botanicalName: "Camellia sinensis",
      partUsed: "Tea Leaves",
      standardization: "Up to 50% EGCG",
      testingMethod: "HPLC"
    },
    {
      name: "Guggul Extract",
      botanicalName: "Commiphora Mukul",
      partUsed: "Dried Gum",
      standardization: "Up to 10% Guggulsterones",
      testingMethod: "HPLC"
    },
    {
      name: "Gymnema Extract",
      botanicalName: "Gymnema sylvestre",
      partUsed: "Dried Leaf",
      standardization: "Up to 75% Gymnemic Acids",
      testingMethod: "Gravimetry"
    },
    {
      name: "Kalmegh Extract",
      botanicalName: "Andrographis Paniculata",
      partUsed: "Dried Leaf",
      standardization: "Up to 95% Andrographolide",
      testingMethod: "HPLC"
    },
    {
      name: "Mangosteen Extract",
      botanicalName: "Garcinia Mangostana",
      partUsed: "Fruit",
      standardization: "Up to 40% Mangostin",
      testingMethod: "HPLC"
    },
    {
      name: "Mucuna Extract",
      botanicalName: "Mucuna Pruriens",
      partUsed: "Dried Seed",
      standardization: "Up to 60% Levodopa",
      testingMethod: "HPLC"
    },
    {
      name: "Mulethi Extract",
      botanicalName: "Glycyrrhiza glabra",
      partUsed: "Dried Root",
      standardization: "Up to 25% Glycyrrhizinic Acid",
      testingMethod: "HPLC"
    },
    {
      name: "Pomegranate Extract",
      botanicalName: "Punica Granatum",
      partUsed: "Fruit",
      standardization: "Up to 40% Ellagic Acid",
      testingMethod: "HPLC"
    },
    {
      name: "Safed Musli",
      botanicalName: "Chlorophytum",
      partUsed: "Root & Seed",
      standardization: "Up to 50% Saponins",
      testingMethod: "Gravimetric"
    },
    {
      name: "Senna Extract",
      botanicalName: "Cassia Angustifolia",
      partUsed: "Dried Leaf",
      standardization: "Up to 60% Calcium Sennoside",
      testingMethod: "UV"
    },
    {
      name: "Tribulus Extract",
      botanicalName: "Tribulus terrestris",
      partUsed: "Dried Aerial Part",
      standardization: "Up to 60% Steroidal Saponins",
      testingMethod: "Gravimetric"
    },
    {
      name: "Turmeric Extract",
      botanicalName: "Curcuma longa",
      partUsed: "Dried Rhizome",
      standardization: "Up to 95% Curcuminoids",
      testingMethod: "HPLC"
    },
    {
      name: "Valerian Extract",
      botanicalName: "Valeriana officinalis",
      partUsed: "Root",
      standardization: "0.8% Valerenic Acid (Powder), 10% Valerenic Acid (Paste)",
      testingMethod: "HPLC"
    }
  ];

  return (
    <section id="products-accordion" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#126D39] mb-4">
            Our Botanical Extract Portfolio
          </h2>
          <p className="text-lg text-gray-600">
            Standardized herbal ingredients with verified potency and purity
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {products.map((product, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="hover:no-underline px-6 py-4">
                <div className="flex items-center space-x-4 text-left">
                  <div className="w-10 h-10 bg-[#26C164]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-[#26C164]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#126D39]">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 italic">
                      {product.botanicalName}
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
