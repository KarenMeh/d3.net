import React from 'react';
import { Server, Shield, Cloud, CheckCircle } from 'lucide-react';
import { translations } from '../translations';

interface ServerOfferingsProps {
  language: string;
}

const ServerOfferings: React.FC<ServerOfferingsProps> = ({ language }) => {
  const offerings = [
    {
      icon: <Server className="h-12 w-12 text-white" />,
      title: translations[language].managedServerTitle,
      description: translations[language].managedServerDescription
    },
    {
      icon: <Shield className="h-12 w-12 text-white" />,
      title: translations[language].rootServerTitle,
      description: translations[language].rootServerDescription
    },
    {
      icon: <Cloud className="h-12 w-12 text-white" />,
      title: translations[language].cloudHostingTitle,
      description: translations[language].cloudHostingDescription
    }
  ];

  const features = (translations[language].features as string[]).map((feature, index) => ({
    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    text: feature
  }));

  return (
    <section id="server-offerings" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-800 mb-2">
            Server Solutions
          </h2>
          <h3 
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: '1.3'
            }}
          >
            Our Server Solutions
          </h3>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of server solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col"
            >
              <div 
                className="p-8 flex-grow flex flex-col items-center justify-center"
                style={{
                  background: "linear-gradient(100deg, #0059A8 0%, #00427C 100%)"
                }}
              >
                <div className="flex justify-center mb-6">
                  {offering.icon}
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">{offering.title}</h3>
                <p className="text-gray-200 text-center">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div 
            className="p-8 md:p-12"
            style={{
              background: "linear-gradient(100deg, #0059A8 0%, #00427C 100%)"
            }}
          >
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center bg-white/10 rounded-lg p-4"
                >
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                  <span className="text-white font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerOfferings; 