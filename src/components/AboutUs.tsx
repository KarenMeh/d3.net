import React from 'react';
import { History, Code, Server, Cpu } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { translations } from '../translations';

interface AboutUsProps {
  language: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ language }) => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={translations[language].aboutUsTitle}
          subtitle={translations[language].aboutUsSubtitle}
          description={translations[language].aboutUsDescription}
        />
        
        <div className="mt-10 sm:mt-16 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            <div className="md:col-span-2">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <p className="text-lg sm:text-xl leading-relaxed text-gray-700 font-light">
                {translations[language].aboutUsHistory1}
                </p>
              </div>
            </div>
            
            <HistoryItem 
              icon={<History className="h-8 w-8 sm:h-10 sm:w-10" style={{ 
                stroke: '#0059A8',
                strokeWidth: 2.5,
                fontWeight: 'bold'
              }} />}
              title={translations[language].aboutUsDevelopmentTitle}
              description={translations[language].aboutUsDevelopmentDesc}
            />
            <HistoryItem 
              icon={<Code className="h-8 w-8 sm:h-10 sm:w-10" style={{ 
                stroke: '#0059A8',
                strokeWidth: 2.5,
                fontWeight: 'bold'
              }} />}
              title={translations[language].aboutUsTodayTitle}
              description={translations[language].aboutUsTodayDesc}
            />
      
            <HistoryItem 
              icon={<Cpu className="h-8 w-8 sm:h-10 sm:w-10" style={{ 
                stroke: '#0059A8',
                strokeWidth: 2.5,
                fontWeight: 'bold'
              }} />}
              title={translations[language].aboutUsMissionTitle}
              description={translations[language].aboutUsMissionDesc}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const HistoryItem = ({ 
  icon, 
  title, 
  description
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="group p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="mb-4 sm:mb-6 p-3 bg-blue-50 rounded-xl w-fit group-hover:bg-blue-100 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default AboutUs;