
import { Mail, Phone } from "lucide-react";

const TopInfoBar = () => {
  return (
    <div className="bg-[#F7FFF8] py-3 px-4 text-sm border-b border-gray-100">
      <div className="container mx-auto max-w-8xl flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="flex items-center space-x-2 text-[#126D39]">
          <Mail className="w-4 h-4" />
          <a 
            href="mailto:info@tirupatiherbal.com" 
            className="hover:text-[#26C164] transition-colors"
          >
            info@tirupatiherbal.com
          </a>
        </div>
        
        <div className="flex items-center space-x-2 text-[#126D39]">
          <Phone className="w-4 h-4" />
          <a 
            href="tel:+917455058849" 
            className="hover:text-[#26C164] transition-colors"
          >
            +91-7455058849
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
