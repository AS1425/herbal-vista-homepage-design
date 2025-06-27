
import { Award, Shield, Microscope, Users } from "lucide-react";

const QualityCommitment = () => {
  const qualityFeatures = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "ISO Certified",
      description: "Our facilities meet international quality standards with ISO certifications ensuring consistent excellence."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "GMP Compliant", 
      description: "Following Good Manufacturing Practices to guarantee the safety and efficacy of our products."
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Lab Tested",
      description: "Every batch undergoes rigorous testing for purity, potency, and contamination analysis."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Our skilled professionals bring decades of experience in herbal extraction and quality control."
    }
  ];

  const rdFeatures = [
    {
      title: "Uncompromising Quality Standards",
      description: "We maintain the highest quality benchmarks through continuous monitoring and improvement of our manufacturing processes.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Advanced R&D Lab",
      description: "Our state-of-the-art research facility enables innovation in extraction techniques and product development.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Quality Standards */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-[#B85E0E] uppercase tracking-wider mb-2">
            Quality Assurance
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-[#126D39] mb-6 leading-tight">
            Our Commitment to <span className="text-[#26C164]">Quality</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quality is not just our priority—it's our promise. Every step of our process is designed to deliver excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {qualityFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-[#F8F9F4] rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center text-[#26C164] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#126D39] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* R&D Section with gap */}
        <div className="space-y-16">
          {rdFeatures.map((feature, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-[#126D39] leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="w-20 h-1 bg-[#26C164] rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityCommitment;
