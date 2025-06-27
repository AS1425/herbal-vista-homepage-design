
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Company: ${formData.company}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}
    `);
    
    const mailtoLink = `mailto:tirupatiherbal07@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened!",
      description: "Your inquiry has been prepared in your default email client.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#F8F9F4]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-sm font-semibold text-[#B85E0E] uppercase tracking-wider mb-2">
              Get In Touch
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#126D39] mb-6 leading-tight">
              Ready to Start Your <span className="text-[#26C164]">Journey?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Contact us today to discuss your botanical extract requirements and discover how we can support your business growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#126D39] mb-6">Let's Connect</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you're looking for standardized extracts, custom formulations, or partnership opportunities, 
                  our team is here to help you achieve your goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-[#26C164] bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#26C164]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#126D39]">Call Us</h4>
                    <p className="text-gray-600">+91 74550 58849</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-[#26C164] bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#26C164]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#126D39]">Email Us</h4>
                    <p className="text-gray-600">tirupatiherbal07@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-[#26C164] bg-opacity-20 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-[#26C164]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#126D39]">WhatsApp</h4>
                    <p className="text-gray-600">Quick responses on WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#126D39] mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-[#26C164]"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-[#26C164]"
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-[#26C164]"
                  />
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-[#26C164]"
                  />
                </div>
                
                <Textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="border-gray-300 focus:border-[#26C164] resize-none"
                  required
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-[#26C164] text-white hover:bg-[#1F9B57] py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
