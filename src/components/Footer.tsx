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
      description: "Thank you for staying connected with us.",
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
    <footer className="bg-[#DDF3E4] text-[#126D39]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="p-4 inline-block">
              <img 
                src="/lovable-uploads/6516ad55-a994-4457-8472-e7432ce3c894.png" 
                alt="Tirupati Herbal Logo" 
                className="h-24 w-auto"
                style={{ maxWidth: '200px' }}
              />
            </div>
            <p className="text-[#126D39] text-sm leading-relaxed">
              Tirupati Herbal – Delivering botanical excellence. We manufacture high-quality 
              herbal extracts for nutraceutical, pharma, and wellness industries worldwide, 
              with a commitment to purity and sustainability.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#126D39]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-[#126D39] hover:text-[#26C164] transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("who-we-are")}
                  className="text-[#126D39] hover:text-[#26C164] transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("products")}
                  className="text-[#126D39] hover:text-[#26C164] transition-colors text-sm"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("career")}
                  className="text-[#126D39] hover:text-[#26C164] transition-colors text-sm"
                >
                  Career
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-[#126D39] hover:text-[#26C164] transition-colors text-sm"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#126D39]">Contact Info</h3>
            <div className="space-y-4">
              {/* Head Office */}
              <div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#126D39] mt-1 flex-shrink-0" />
                  <p className="text-[#126D39] text-sm">
                    <span className="font-medium">HO:</span> B-08, Upper Ground Floor, Tower 3,<br />
                    NX ONE Commercial, Techzone IV,<br />
                    Greater Noida West 201306
                  </p>
                </div>
              </div>
              
              {/* Works */}
              <div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#126D39] mt-1 flex-shrink-0" />
                  <p className="text-[#126D39] text-sm">
                    <span className="font-medium">Works:</span> 01, Main Road Chakarpur Bazpur,<br />
                    Udham Singh Nagar, Uttarakhand,<br />
                    India - 262401
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#126D39]" />
                <div>
                  <p className="text-[#126D39] text-sm">+91 74550 58849</p>
                  <p className="text-[#126D39] text-sm">+91 87554 24007</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#126D39]" />
                <div>
                  <a 
                    href="mailto:info@tirupatiherbal.com"
                    className="text-[#126D39] text-sm hover:text-[#26C164] transition-colors"
                  >
                    info@tirupatiherbal.com
                  </a>
                  <br />
                  <a 
                    href="mailto:kunal.goel@tirupatiherbal.com"
                    className="text-[#126D39] text-sm hover:text-[#26C164] transition-colors"
                  >
                    kunal.goel@tirupatiherbal.com
                  </a>
                  <br />
                  <a 
                    href="mailto:tirupatiherbal07@gmail.com"
                    className="text-[#126D39] text-sm hover:text-[#26C164] transition-colors"
                  >
                    tirupatiherbal07@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connect & Stay Connected */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#126D39]">Stay Connected</h3>
            
            <div className="flex space-x-3 mb-6">
              <a href="#" className="w-8 h-8 bg-[#126D39] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-[#B85E0E] transition-colors">
                <Facebook className="w-4 h-4 text-[#126D39]" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#126D39] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-[#B85E0E] transition-colors">
                <Linkedin className="w-4 h-4 text-[#126D39]" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#126D39] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-[#B85E0E] transition-colors">
                <Instagram className="w-4 h-4 text-[#126D39]" />
              </a>
            </div>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <p className="text-[#126D39] text-sm">Stay Connected</p>
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white bg-opacity-80 border-[#126D39] border-opacity-30 text-[#126D39] placeholder-gray-500 text-sm rounded-r-none"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-[#B85E0E] hover:bg-[#A0520C] px-3 rounded-l-none text-white"
                  >
                    →
                  </Button>
                </div>
              </form>
            ) : (
              <div className="flex items-center space-x-2 text-[#26C164]">
                <div className="w-5 h-5 rounded-full bg-[#26C164] flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm">Connected Successfully</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer Base */}
      <div className="border-t border-[#126D39] border-opacity-20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#126D39] text-sm">
              © 2025 Tirupati Herbal. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-[#126D39] hover:text-[#26C164] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#126D39] hover:text-[#26C164] text-sm transition-colors">
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
