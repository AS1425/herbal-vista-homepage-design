
import { MapPin, Users, Globe, Award } from "lucide-react";

const GlobalReach = () => {
  const stats = [
    {
      icon: <Globe className="w-8 h-8" />,
      number: "25+",
      label: "Countries Served",
      description: "Global distribution network"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Satisfied Clients",
      description: "Trusted partnerships worldwide"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: "Years Experience",
      description: "Industry expertise and knowledge"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: "5",
      label: "Manufacturing Units",
      description: "State-of-the-art facilities"
    }
  ];

  return (
    <section className="py-16 bg-[#126D39] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-[#26C164] uppercase tracking-wider mb-2">
            Global Presence
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Supplying Extracts Across Continents
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            From local markets to international shores, our premium botanical extracts reach customers worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="flex justify-center text-[#26C164] mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-300">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
