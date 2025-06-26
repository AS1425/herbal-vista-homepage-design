
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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

  const certifications = [
    {
      name: "HACCP",
      logo: "/lovable-uploads/e2b8a2cb-92d2-49e2-9e4b-63576e10ea61.png",
      certificate: "/lovable-uploads/1af14d47-7644-4cb8-881e-c3930ffc54c0.png"
    },
    {
      name: "HALAL Certified",
      logo: "/lovable-uploads/543128e5-82f9-4400-ae75-3f62696ef26e.png",
      certificate: "/lovable-uploads/dd477a70-bd7d-472d-8288-6a3d685ccc57.png"
    },
    {
      name: "ISO 9001:2015",
      logo: "/lovable-uploads/c49a6aaf-ac2a-4762-be19-67b570030e9b.png",
      certificate: "/lovable-uploads/63ea9a19-c9a5-4ac4-a5e9-8b52aaba144a.png"
    },
    {
      name: "KOSHER",
      logo: "/lovable-uploads/1cfd7f1f-b6af-41d2-8914-d02fcb1db100.png",
      certificate: "/lovable-uploads/cfc6bfa7-477d-47e3-8fcc-103834972b50.png"
    }
  ];

  const openModal = (index: number) => {
    setCurrentCertIndex(index);
    setIsDialogOpen(true);
  };

  const nextCertificate = () => {
    setCurrentCertIndex((prev) => (prev + 1) % certifications.length);
  };

  const previousCertificate = () => {
    setCurrentCertIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#126D39] mb-4">
            Globally Recognized Standards
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our commitment to quality is backed by internationally recognized certifications:
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openModal(index)}
              >
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <img 
                    src={cert.logo} 
                    alt={cert.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-[#126D39]">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-transparent border-none shadow-none">
            <div className="relative w-full h-full bg-black/90 rounded-lg overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setIsDialogOpen(false)}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={previousCertificate}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={nextCertificate}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Certificate Image */}
              <div className="w-full h-full flex items-center justify-center p-8">
                <img
                  src={certifications[currentCertIndex].certificate}
                  alt={certifications[currentCertIndex].name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Certificate Name */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg font-medium bg-black/50 px-4 py-2 rounded-full">
                {certifications[currentCertIndex].name}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certifications;
