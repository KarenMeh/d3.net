import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation would go here
    // This is a simulation of form submission
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormState({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contact Us"
          subtitle="Get in Touch With Our Team"
          description="Have questions about our healthcare IT solutions? Reach out to us today."
        />
        
        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">We're Here to Help</h3>
            <p className="text-gray-600 mb-8">
              Our team of healthcare IT specialists is ready to answer your questions and provide solutions tailored to your organization's needs.
            </p>
            
            <div className="space-y-6">
              <ContactInfo 
                icon={<Phone className="h-5 w-5 text-teal-600" />}
                title="Call Us"
                info="+1 (888) 555-0123"
                link="tel:+18885550123"
              />
              <ContactInfo 
                icon={<Mail className="h-5 w-5 text-teal-600" />}
                title="Email Us"
                info="info@d3.net"
                link="mailto:info@d3.net"
              />
              <ContactInfo 
                icon={<MapPin className="h-5 w-5 text-teal-600" />}
                title="Visit Us"
                info="123 Tech Plaza, San Francisco, CA 94105"
                link="#"
              />
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Send className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <h4 className="text-green-800 font-semibold text-lg">Message Sent!</h4>
                  <p className="text-green-700">We'll be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="consent"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                      I consent to d3.net processing my data for contact purposes. *
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full  hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(100deg, #0059A8 0%, #00427C 100%)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, info, link }: { icon: React.ReactNode; title: string; info: string; link: string }) => {
  return (
    <div className="flex items-start">
      <div className="bg-blue-100 p-2 rounded-full mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-blue-900">{title}</h4>
        <a 
          href={link} 
          className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
        >
          {info}
        </a>
      </div>
    </div>
  );
};

export default Contact;
