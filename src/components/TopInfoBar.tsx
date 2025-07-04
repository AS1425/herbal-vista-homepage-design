
import { Mail, Phone } from "lucide-react";

const TopInfoBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#F7FFF8] py-2 px-4 text-xs border-b border-gray-100">
      <div className="container mx-auto max-w-8xl flex justify-end items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-[#126D39]">
            <Mail className="w-3 h-3" />
            <a 
              href="mailto:info@tirupatiherbal.com" 
              className="hover:text-[#26C164] transition-colors text-xs"
            >
              info@tirupatiherbal.com
            </a>
          </div>
          
          <div className="flex items-center space-x-2 text-[#126D39]">
            <Phone className="w-3 h-3" />
            <a 
              href="tel:+917455058849" 
              className="hover:text-[#26C164] transition-colors text-xs"
            >
              +91-7455058849
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
