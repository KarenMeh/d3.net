import React from 'react';
import { Database } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { solutions } from '../schemas/industry';

const IndustrySolutions = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Industry Solutions"
          subtitle="Specialized Technology Solutions"
          description="Comprehensive software and infrastructure solutions tailored for specific industry needs"
        />
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className=" p-4 rounded-full inline-block mb-6" style={{
                    background: 'linear-gradient(100deg, #0059A8 0%, #00427C 100%)',
                    fontFamily: 'Inter, sans-serif',
                }}>
                  <Icon className="h-12 w-12 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <Database className="h-4 w-4 text-teal-500 mr-2" />
                          {feature.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                        >
                          {industry.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
   
      </div>
    </section>
  );
};

export default IndustrySolutions;