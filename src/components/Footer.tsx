
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribed(true);
    toast({
      title: "Successfully joined!",
      description: "Thank you for joining our updates.",
    });
    
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#126D39] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/64c539e1-444d-445b-a5a2-f0b62d619ae1.png" 
              alt="Tirupati Herbal Logo" 
              className="h-12"
            />
            <p className="text-[#FFF8EC] text-sm leading-relaxed">
              Tirupati Herbal – Delivering botanical excellence. We manufacture high-quality 
              herbal extracts for nutraceutical, pharma, and wellness industries worldwide, 
              with a commitment to purity and sustainability.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#26C164]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-[#FFF8EC] hover:text-[#26C164] transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("who-we-are")}
                  className="text-[#FFF8EC] hover:text-[#26C164] transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("products")}
                  className="text-[#FFF8EC] hover:text-[#26C164] transition-colors text-sm"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("career")}
                  className="text-[#FFF8EC] hover:text-[#26C164] transition-colors text-sm"
                >
                  Career
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-[#FFF8EC] hover:text-[#26C164] transition-colors text-sm"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#26C164]">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#FFF8EC] mt-1 flex-shrink-0" />
                <p className="text-[#FFF8EC] text-sm">
                  Vill. Chakarpur, Block Bazpur<br />
                  Distt: Udham Singh Nagar<br />
                  State: Uttarakhand
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#FFF8EC]" />
                <div>
                  <p className="text-[#FFF8EC] text-sm">+91 74550 58849</p>
                  <p className="text-[#FFF8EC] text-sm">+91 87554 24007</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#FFF8EC]" />
                <p className="text-[#FFF8EC] text-sm">info@tirupatiherbal.com</p>
              </div>
            </div>
          </div>
          
          {/* Connect & Join Updates */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#26C164]">Connect & Join Our Updates</h3>
            
            <div className="flex space-x-3 mb-6">
              <a href="#" className="w-8 h-8 bg-[#FFF8EC] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-[#B85E0E] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#FFF8EC] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-[#B85E0E] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#FFF8EC] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-[#B85E0E] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <p className="text-[#FFF8EC] text-sm">Join Our Updates</p>
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-gray-300 text-sm rounded-r-none"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-[#B85E0E] hover:bg-[#A0520C] px-3 rounded-l-none"
                  >
                    ✓
                  </Button>
                </div>
              </form>
            ) : (
              <div className="flex items-center space-x-2 text-[#26C164]">
                <div className="w-5 h-5 rounded-full bg-[#26C164] flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm">Joined Successfully</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer Base */}
      <div className="border-t border-[#FFF8EC] border-opacity-20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#FFF8EC] text-sm">
              © 2025 Tirupati Herbal. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-[#FFF8EC] hover:text-[#26C164] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#FFF8EC] hover:text-[#26C164] text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
