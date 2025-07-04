import React, { useState } from 'react';
import { Send } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { translations } from '../translations';

interface ContactProps {
  language: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const buildMailtoLink = () => {
    const subject = encodeURIComponent(formState.subject || 'Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\n\nMessage:\n${formState.message}`
    );
    return `mailto:info@d3.net?subject=${subject}&body=${body}`;
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-8">
        <SectionTitle
          title={translations[language].contactTitle as string}
          subtitle=""
          description=""
        />
        
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {translations[language].contactName}
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
                  {translations[language].contactEmail}
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
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {translations[language].contactPhone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {translations[language].contactSubject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {translations[language].contactMessage}
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
              <a
                href={buildMailtoLink()}
                className="w-full block text-center hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                style={{
                  background: 'linear-gradient(100deg, #0059A8 0%, #00427C 100%)',
                  fontFamily: 'Inter, sans-serif',
                  pointerEvents: formState.name && formState.email && formState.phone && formState.subject && formState.message ? 'auto' : 'none',
                  opacity: formState.name && formState.email && formState.phone && formState.subject && formState.message ? 1 : 0.6
                }}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={formState.name && formState.email && formState.phone && formState.subject && formState.message ? 0 : -1}
              >
                {translations[language].contactSend}
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
