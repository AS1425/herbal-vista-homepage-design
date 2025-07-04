
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    botanicalName?: string;
    image: string;
    standardization: string;
    testingMethod: string;
    description: string;
    partUsed?: string;
  };
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
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
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full max-w-md h-64 object-cover rounded-lg shadow-md border border-gray-200"
            />
          </div>
          
          {/* Product Details */}
          <div className="space-y-4">
            {product.botanicalName && (
              <div>
                <span className="font-semibold text-[#126D39]">Botanical Name:</span>
                <p className="text-gray-700 italic">{product.botanicalName}</p>
              </div>
            )}
            
            {product.partUsed && (
              <div>
                <span className="font-semibold text-[#126D39]">Part Used:</span>
                <p className="text-gray-700">{product.partUsed}</p>
              </div>
            )}
            
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
                // Navigate to contact page or open contact form
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

export default ProductModal;
