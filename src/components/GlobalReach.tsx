
import { useEffect, useRef, useState } from "react";

const GlobalReach = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countAnimated, setCountAnimated] = useState(false);
  const [countries, setCountries] = useState(0);
  const [continents, setContinents] = useState(0);
  const [clients, setClients] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!countAnimated) {
            animateCounters();
            setCountAnimated(true);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [countAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const countriesTarget = 25;
    const continentsTarget = 6;
    const clientsTarget = 500;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCountries(Math.floor(countriesTarget * progress));
      setContinents(Math.floor(continentsTarget * progress));
      setClients(Math.floor(clientsTarget * progress));

      if (step >= steps) {
        clearInterval(timer);
        setCountries(countriesTarget);
        setContinents(continentsTarget);
        setClients(clientsTarget);
      }
    }, duration / steps);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[#126D39] relative overflow-hidden">
      {/* World map background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Supplying Extracts Across Continents
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div 
            className={`text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-5xl font-bold text-[#B85E0E] mb-2">
              {countries}+
            </div>
            <div className="text-white text-lg">Countries Served</div>
          </div>
          
          <div 
            className={`text-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-5xl font-bold text-[#B85E0E] mb-2">
              {continents}
            </div>
            <div className="text-white text-lg">Continents Covered</div>
          </div>
          
          <div 
            className={`text-center transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-5xl font-bold text-[#B85E0E] mb-2">
              {clients}+
            </div>
            <div className="text-white text-lg">Clients Globally</div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-[#FFF8EC] text-lg mb-8">
            North America • Europe • Middle East • Southeast Asia • South America • Africa
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
