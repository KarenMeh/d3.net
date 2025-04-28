import React from 'react';
import { History, Code, Server, Cpu } from 'lucide-react';
import SectionTitle from './SectionTitle';

const AboutUs = () => {
  // High contrast text color for AAA-level contrast (13.58:1)
  const highContrastTextColor = '#121212';

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Us"
          subtitle="Our Journey of Innovation"
          description="With over 25 years in the industry, d3.net has been at the forefront of healthcare IT innovation, providing secure and reliable solutions."
        />
        
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className=" rounded-lg h-[400px] w-full overflow-hidden relative">
              <div className="absolute inset-0" style={{
                    backgroundImage: "url('/hero.png')",  // Replace with the relative path to your image in the public folder
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    boxShadow: '0 0 12px rgba(0, 89, 168, 0.4)'
                  }}></div>

                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full">
                  <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,53.3C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" 
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-500 rounded-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-blue-200 rounded-xl -z-10"></div>
            </div>
          </div>
          
          <div>
            <p 
              className="text-lg mb-8"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: '32px',
                color: highContrastTextColor
              }}
            >
              At d3.net, we've been pioneering healthcare IT solutions since 1999. We started as an internet service provider and evolved into a comprehensive cloud hosting and technology partner for healthcare organizations worldwide.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <HistoryItem 
                icon={<History className="h-8 w-8 text-blue-700" />}
                title="Heritage"
                description="25+ years of experience in healthcare IT"
                highContrastColor={highContrastTextColor}
              />
              <HistoryItem 
                icon={<Code className="h-8 w-8 text-blue-700" />}
                title="Expertise"
                description="Custom software development for healthcare"
                highContrastColor={highContrastTextColor}
              />
              <HistoryItem 
                icon={<Server className="h-8 w-8 text-blue-700" />}
                title="Infrastructure"
                description="Secure server and cloud hosting solutions"
                highContrastColor={highContrastTextColor}
              />
              <HistoryItem 
                icon={<Cpu className="h-8 w-8 text-blue-700" />}
                title="Innovation"
                description="AI-powered automation for healthcare workflows"
                highContrastColor={highContrastTextColor}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HistoryItem = ({ 
  icon, 
  title, 
  description, 
  highContrastColor 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  highContrastColor: string;
}) => {
  return (
    <div className="p-5 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="mb-3">{icon}</div>
      <h3 
        className="font-semibold text-xl mb-2"
        style={{ 
          fontFamily: 'Inter, sans-serif',
          color: '#0c4a6e', // Darker blue for better contrast
          fontWeight: 500 // Semibold weight
        }}
      >
        {title}
      </h3>
      <p 
        style={{ 
          fontFamily: 'Inter, sans-serif',
          fontWeight: 300,
          fontSize: '16px',
          lineHeight: '32px',
          color: highContrastColor
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default AboutUs;