import React from 'react';
import { Code, MessageSquare, Users, Bot } from 'lucide-react';
import { translations } from '../translations';

interface SoftwareSolutionsProps {
  language: string;
}

const SoftwareSolutions: React.FC<SoftwareSolutionsProps> = ({ language }) => {
  const products = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: translations[language].aisTitle,
      description: translations[language].aisDescription,
      link: translations[language].aisLink,
      linkUrl: "https://ais.d3.net"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: translations[language].centralChatTitle,
      description: translations[language].centralChatDescription,
      link: translations[language].centralChatLink,
      linkUrl: "https://centralchat.ai"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: translations[language].teamstarTitle,
      description: translations[language].teamstarDescription,
      link: translations[language].teamstarLink,
      linkUrl: "https://teamstar.d3.net"
    },
    {
      icon: <Bot className="h-8 w-8 text-blue-600" />,
      title: translations[language].botificationTitle,
      description: translations[language].botificationDescription,
      link: translations[language].botificationLink,
      linkUrl: "https://botification.ai"
    }
  ];

  return (
    <section id="software-solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{translations[language].softwareSolutionsTitle}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {translations[language].softwareSolutionsIntro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {product.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <a 
                    href={product.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    {product.link}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSolutions; 