
import React from "react";
import { Leaf, Beaker, Globe, Users } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: <Leaf className="w-12 h-12 text-[#26C164]" />,
      title: "Integrity in Every Batch",
      description: "We maintain strict standards for safety, ethics, and transparency."
    },
    {
      icon: <Beaker className="w-12 h-12 text-[#26C164]" />,
      title: "Innovation Through Nature",
      description: "We blend traditional wisdom with modern science."
    },
    {
      icon: <Globe className="w-12 h-12 text-[#26C164]" />,
      title: "Sustainable Growth",
      description: "We care for people, plants, and the planet."
    },
    {
      icon: <Users className="w-12 h-12 text-[#26C164]" />,
      title: "People First",
      description: "We invest in our team's well-being and career growth."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#126D39]">
          Our Core Values
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 rounded-lg shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#126D39]">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
