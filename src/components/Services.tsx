import React from 'react';
import { MessageSquare, ClipboardList, Pill, Bot } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { translations } from '../translations';

interface ServicesProps {
  language: string;
}

const gradientStyle = {
  background: "linear-gradient(100deg, #0059A8 0%, #00427C 100%)",
};

const Services: React.FC<ServicesProps> = ({ language }) => {
  const serviceCategories = [
    {
      icon: <Pill className="h-8 w-8 text-white" />,
      title: translations[language].aisTitle as string,
      description: translations[language].aisDescription as string,
      link: "https://ais.d3.net"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: translations[language].centralChatTitle as string,
      description: translations[language].centralChatDescription as string,
      link: "https://centralchat.me/"
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-white" />,
      title: translations[language].teamstarTitle as string,
      description: translations[language].teamstarDescription as string,
      link: "https://en.teamstar.me/"
    },
    {
      icon: <Bot className="h-8 w-8 text-white" />,
      title: translations[language].botificationTitle as string,
      description: translations[language].botificationDescription as string,
      link: "https://botification.ai"
    }
  ];

  return (
    <section id="software-solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-800">
            {translations[language].softwareSolutionsTitle}
          </h2>
          <h4
            className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-blue-900"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: '1.3'
            }}
          >
            {translations[language].softwareSolutionsIntro}
          </h4>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((service, index) => (
            <ServiceCard key={index} service={service} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
  };
  language: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ service, language }) => {
  return (
    <a 
      href={service.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col block"
    >
      <div className="p-6 transition-all group-hover:py-8" style={gradientStyle}>
        <div className="flex justify-center">{service.icon}</div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="font-bold text-xl text-blue-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-5">{service.description}</p>
        <div className="mt-auto">
          <span className="inline-block text-blue-700 group-hover:text-blue-900 font-medium">
            {translations[language].visitWebsite}
          </span>
        </div>
      </div>
    </a>
  );
};

export default Services;
