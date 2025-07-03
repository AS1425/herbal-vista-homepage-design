
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Sent Successfully!",
      description: "We'll get back to you within 24 hours with sample information.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-[#E8F5E9]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#126D39] mb-4">
              Request Samples
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Experience the quality of our botanical extracts firsthand. 
              Request samples and discover why industry leaders trust Tirupati Herbal.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#126D39] w-5 h-5" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-12 h-12 border-gray-300 focus:border-[#126D39] focus:ring-[#126D39]"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#126D39] w-5 h-5" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-12 h-12 border-gray-300 focus:border-[#126D39] focus:ring-[#126D39]"
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#126D39] w-5 h-5" />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="pl-12 h-12 border-gray-300 focus:border-[#126D39] focus:ring-[#126D39]"
                  required
                />
              </div>
              
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-[#126D39] w-5 h-5" />
                <Textarea
                  name="message"
                  placeholder="Tell us about your specific extract requirements, quantities needed, and any other details..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="pl-12 min-h-32 border-gray-300 focus:border-[#126D39] focus:ring-[#126D39] resize-none"
                  required
                />
              </div>
              
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#B85E0E] hover:bg-[#A0520C] text-white px-12 py-4 text-lg rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending Request..." : "Request Samples Now"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
