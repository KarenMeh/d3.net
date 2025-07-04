import React from 'react';
import { Database, Server, Cloud, CheckCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { translations } from '../translations';

interface IndustrySolutionsProps {
  language: string;
}

const gradientStyle = {
  background: "linear-gradient(100deg, #0059A8 0%, #00427C 100%)",
};

const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ language }) => {
  const solutions = [
    {
      title: translations[language].industrySolutions1Title,
      description: translations[language].industrySolutions1Desc,
      icon: Server
    },
    {
      title: translations[language].industrySolutions2Title,
      description: translations[language].industrySolutions2Desc,
      icon: Database
    },
    {
      title: translations[language].industrySolutions3Title,
      description: translations[language].industrySolutions3Desc,
      icon: Cloud
    }
  ];

  const keyFeatures = translations[language].industrySolutionsFeatures as string[];

  return (
    <section id="server-offerings" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-800 mb-2">
            {translations[language].industrySolutionsSectionTitle}
          </h2>
          <h3 
            className="text-3xl md:text-4xl font-bold text-blue-900"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: '1.3'
            }}
          >
            {translations[language].industrySolutionsSectionSubtitle}
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index} 
                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col"
              >
                <div className="p-8 flex-grow flex flex-col items-center justify-center" style={gradientStyle}>
                  <div className="flex justify-center mb-6">
                    <Icon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4">{solution.title}</h3>
                  <p className="text-gray-200 text-center">{solution.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12" style={gradientStyle}>
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">{translations[language].industrySolutionsFeaturesTitle}</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {keyFeatures.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center bg-white/10 rounded-lg p-4"
                >
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;