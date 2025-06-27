
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    file: null as File | null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Your message has been sent!",
      description: "We'll be in touch soon.",
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        file: null
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, file });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form - Left Column */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#126D39] mb-6">Send us a Message</h2>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-[#26C164]"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-[#26C164]"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-[#26C164]"
                  />
                </div>
                
                <div>
                  <Select onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                    <SelectTrigger className="border-gray-300 focus:border-[#26C164]">
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inquiry">Inquiry</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="border-gray-300 focus:border-[#26C164] resize-none"
                    required
                  />
                </div>
                
                <div>
                  <div className="flex items-center space-x-2">
                    <Upload className="w-5 h-5 text-gray-400" />
                    <label className="block text-sm font-medium text-gray-700">
                      Attach File (Optional)
                    </label>
                  </div>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#26C164] file:text-white hover:file:bg-[#1F9B57]"
                    accept=".pdf,.doc,.docx,.txt"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#26C164] text-white hover:bg-[#126D39] py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-[#26C164] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#126D39] mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  ✅ Your message has been sent. We'll be in touch soon!
                </p>
              </div>
            )}
          </div>
          
          {/* Contact Information - Right Column */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#126D39] mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#26C164] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#126D39] mb-1">Office Address</h4>
                    <p className="text-gray-600">
                      Tirupati Herbal<br />
                      Vill. Chakarpur, Block Bazpur,<br />
                      Distt: Udham Singh Nagar,<br />
                      Uttarakhand – India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#26C164] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#126D39] mb-1">Phone Numbers</h4>
                    <p className="text-gray-600">
                      +91 74550 58849<br />
                      +91 87554 24007
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#26C164] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#126D39] mb-1">Email Addresses</h4>
                    <p className="text-gray-600">
                      tirupatiherbal07@gmail.com<br />
                      info@tirupatiherbal.com<br />
                      sales@tirupatiherbal.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#126D39] mb-4">Find Us</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.4757845547437!2d79.1087967!3d29.2847058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09addae2a0061%3A0x7a5ca8e0e5a7e8a2!2sChakarpur%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1703176800000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tirupati Herbal Location - Chakarpur, Bazpur, Udham Singh Nagar, Uttarakhand"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
