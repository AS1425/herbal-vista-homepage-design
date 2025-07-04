
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
          <DialogTitle className="text-3xl font-bold text-[#126D39] mb-4 pr-12">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-6 pt-4">
          {/* Large Product Placeholder */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-3xl h-[500px] rounded-xl shadow-lg border-2 border-gray-200 bg-gradient-to-br from-[#26C164] to-[#126D39] flex items-center justify-center hover:shadow-xl transition-shadow">
              <span className="text-white text-9xl font-bold drop-shadow-lg">
                {product.name.charAt(0)}
              </span>
            </div>
          </div>
          
          {/* Product Details Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/70 p-4 rounded-lg border border-gray-200">
                <span className="font-semibold text-[#126D39] text-lg block mb-2">Standardized For:</span>
                <p className="text-gray-700 text-base">{product.standardization}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/70 p-4 rounded-lg border border-gray-200">
                <span className="font-semibold text-[#126D39] text-lg block mb-2">Testing Method:</span>
                <p className="text-gray-700 text-base">{product.testingMethod}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="bg-white/70 p-4 rounded-lg border border-gray-200">
              <span className="font-semibold text-[#126D39] text-lg block mb-2">Description:</span>
              <p className="text-gray-700 text-base leading-relaxed">{product.description}</p>
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

export default NutraceuticalModal;
