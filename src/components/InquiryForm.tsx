
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, CheckCircle, Send, Users, Zap, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 1-2 business days.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const usps = [
    { icon: CheckCircle, text: "Free Sample Testing", description: "Try our extracts with complimentary samples." },
    { icon: Zap, text: "Custom Formulations", description: "Products tailored to your requirements." },
    { icon: Users, text: "Technical Support", description: "Expert guidance and documentation provided." },
    { icon: DollarSign, text: "Competitive Pricing", description: "Get the best value for quality." }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-[#B85E0E] to-[#26C164]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Request Samples or a Custom Quote
          </h2>
          <p className="text-lg text-[#FFF8EC] max-w-2xl mx-auto">
            Ready to experience the Tirupati Herbal difference? Reach out for samples, 
            custom formulations, or any inquiries – our team is here to help.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Details & USPs */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#FFF8EC]" />
                  <div>
                    <p className="text-white font-medium">+91 74550 58849</p>
                    <p className="text-[#FFF8EC]">+91 87554 24007</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#FFF8EC]" />
                  <div>
                    <p className="text-white">info@tirupatiherbal.com</p>
                    <p className="text-[#FFF8EC]">kunal.goel@tirupatiherbal.com</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {usps.map((usp, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <usp.icon className="w-5 h-5 text-[#FFF8EC] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">{usp.text}</p>
                      <p className="text-[#FFF8EC] text-sm">{usp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Inquiry Form */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-gray-200 focus:border-[#FFF8EC]"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-gray-200 focus:border-[#FFF8EC]"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-gray-200 focus:border-[#FFF8EC]"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-gray-200 focus:border-[#FFF8EC] resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#26C164] text-white hover:bg-[#1F9B57] py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Inquiry
                </Button>
                
                <p className="text-[#FFF8EC] text-sm text-center">
                  We'll get back to you within 1-2 business days.
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-[#FFF8EC]">
                  Thank you for your inquiry. We'll be in touch soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
