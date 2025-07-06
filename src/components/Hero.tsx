import React, { useEffect, useState } from 'react';
import { translations } from '../translations';

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    const handleResize = () => {
      setHeight(`${window.innerHeight}px`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      id="hero"
      className="relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        height, 
        minHeight: '100vh',
        fontFamily: 'Open Sans, sans-serif',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 relative z-10 h-full flex items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 max-w-2xl text-left md:pr-8">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-3 sm:mb-4 md:mb-6 animate-fadeInUp"
              style={{ 
                fontFamily: 'Open Sans, sans-serif',
                color: '#1e293b',
                fontWeight: '700',
                fontSize: 'clamp(1.5rem, 3vw, 3.5rem)',
                lineHeight: '1.2',
                letterSpacing: '-0.03em',
                textShadow: '0 2px 4px rgba(51, 51, 51, 0.1)',
                position: 'relative',
                display: 'inline-block'
              }}
            >
              {translations[language].heroTitle}
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl font-light leading-6 sm:leading-7 md:leading-8 mb-3 sm:mb-4 md:mb-6 animate-fadeInUp delay-150"
              style={{ 
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)',
                lineHeight: '1.6',
                color: '#334155' 
              }}
            >
              {translations[language].heroSubtitle}
            </p>
            <p 
              className="text-sm sm:text-base md:text-lg font-light leading-6 sm:leading-7 md:leading-8 mb-4 sm:mb-6 md:mb-8 max-w-xl animate-fadeInUp delay-300"
              style={{ 
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(0.75rem, 1.25vw, 1rem)',
                lineHeight: '1.6',
                color: '#475569' 
              }}
            >
              {translations[language].heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp delay-400">
              <button 
                className="w-full sm:w-auto hover:bg-blue-900 text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 text-sm sm:text-base"
                style={{
                  background: 'linear-gradient(100deg, #0059A8 0%, #00427C 100%)',
                  borderColor: '#0059A8',
                  fontFamily: 'Open Sans, sans-serif',
                  fontWeight: 300,
                  boxShadow: '0 0 12px rgba(0, 89, 168, 0.4)'
                }}
                onClick={() => {
                  const contactForm = document.getElementById('contact');
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {translations[language].contactUs}
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <img 
              src="/hero.png"
              alt="Hero Image"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              style={{ 
                maxHeight: '400px',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroWithStyles: React.FC<HeroProps> = (props) => {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .delay-150 {
          animation-delay: 150ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        html, body {
          font-family: 'Open Sans', sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 32px;
          color: '#444343FF';
        }

        * {
          font-family: 'Open Sans', sans-serif;
        }

        .animate-fadeInUp.delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" />
      <Hero {...props} />
    </>
  );
};

export default HeroWithStyles;
