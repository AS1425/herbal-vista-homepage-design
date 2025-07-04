
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
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-[#FFF8EC] border-none p-0">
        <DialogHeader className="relative p-6 pb-0">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
          <DialogTitle className="text-3xl font-bold text-[#126D39] mb-2 pr-12">
            {product.name}
          </DialogTitle>
          {product.botanicalName && (
            <p className="text-lg text-gray-600 italic">{product.botanicalName}</p>
          )}
        </DialogHeader>
        
        <div className="p-6 pt-4">
          {/* Large Product Image */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-3xl">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
          
          {/* Product Details Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {product.partUsed && (
                <div className="bg-white/70 p-4 rounded-lg border border-gray-200">
                  <span className="font-semibold text-[#126D39] text-lg block mb-2">Part Used:</span>
                  <p className="text-gray-700 text-base">{product.partUsed}</p>
                </div>
              )}
              
              <div className="bg-white/70 p-4 rounded-lg border border-gray-200">
                <span className="font-semibold text-[#126D39] text-lg block mb-2">Testing Method:</span>
                <p className="text-gray-700 text-base">{product.testingMethod}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/70 p-4 rounded-lg border border-gray-200">
                <span className="font-semibold text-[#126D39] text-lg block mb-2">Standardized For:</span>
                <p className="text-gray-700 text-base">{product.standardization}</p>
              </div>
              
              <div className="bg-white/70 p-4 rounded-lg border border-gray-200">
                <span className="font-semibold text-[#126D39] text-lg block mb-2">Description:</span>
                <p className="text-gray-700 text-base leading-relaxed">{product.description}</p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center pt-8">
            <Button 
              className="bg-[#B85E0E] hover:bg-[#A0520C] text-white px-12 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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

export default ProductModal;
