
import { useEffect, useRef, useState } from "react";

const LeadershipTeam = () => {
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

  const teamMembers = [
    {
      name: "MR. NARENDRA KUMAR GOYAL",
      designation: "Co-Founder & Managing Partner"
    },
    {
      name: "MR. AVINASH SHARMA",
      designation: "Co-Founder"
    },
    {
      name: "MR. KUNAL GOEL",
      designation: "Assistant Managing Partner"
    },
    {
      name: "ER. RAJAT TOMAR",
      designation: "General Manager (B.Tech – Chem)"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#126D39] mb-4">
            Meet the People Behind the Purity
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#26C164] transition-all duration-300 hover:shadow-lg ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-[#26C164] mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600 font-medium">
                {member.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
