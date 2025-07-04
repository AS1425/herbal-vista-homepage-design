
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface NutraceuticalModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    standardization: string;
    testingMethod: string;
    description: string;
  };
}

const NutraceuticalModal = ({ isOpen, onClose, product }: NutraceuticalModalProps) => {
  // Generate a placeholder image based on product name
  const getProductImage = (name: string) => {
    // Use first letter for a consistent placeholder
    return `https://via.placeholder.com/400x300/26C164/ffffff?text=${encodeURIComponent(name.charAt(0))}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFF8EC] border-none">
        <DialogHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-0 top-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
          <DialogTitle className="text-2xl font-bold text-[#126D39] mb-4 pr-8">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-64 rounded-lg shadow-md border border-gray-200 bg-gradient-to-br from-[#26C164] to-[#126D39] flex items-center justify-center">
              <span className="text-white text-6xl font-bold">
                {product.name.charAt(0)}
              </span>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <span className="font-semibold text-[#126D39]">Standardized For:</span>
              <p className="text-gray-700">{product.standardization}</p>
            </div>
            
            <div>
              <span className="font-semibold text-[#126D39]">Testing Method:</span>
              <p className="text-gray-700">{product.testingMethod}</p>
            </div>
            
            <div>
              <span className="font-semibold text-[#126D39]">Description:</span>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <Button 
              className="bg-[#B85E0E] hover:bg-[#A0520C] text-white px-8 py-3 rounded-lg shadow-md transition-all duration-300"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Request Sample
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NutraceuticalModal;
