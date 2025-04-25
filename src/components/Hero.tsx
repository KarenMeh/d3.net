import React, { useEffect, useState } from 'react';
import { Shield, Server, CloudCog, Database } from 'lucide-react';

const Hero = () => {
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
      className="relative overflow-hidden text-blue-200"
      style={{ 
        background: 'linear-gradient(135deg, #f8fbff 0%, #e6efff 100%)',
        height, 
        minHeight: '650px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="text-center md:text-left">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fadeInUp"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: '#2e2e2e', 
                fontWeight: '800', // Extra bold weight
                fontSize: '50px', // Adjusted font size
                lineHeight: '60px', // 1.2 ratio of font size
                letterSpacing: '-0.02em', // Optional: small negative letter spacing for a compact look
              }}
            >
              Cloud & Hosting Solutions for <span className="text-blue-800">Healthcare.</span>
            </h1>
            <p 
              className="text-base font-light leading-8 mb-8 max-w-xl mx-auto md:mx-0 animate-fadeInUp delay-150"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: '32px',
                color: '#2e2e2e' 
              }}
            >
              With over 25 years of excellence in secure cloud hosting, software development, and AI automation, we specialize in powering the healthcare industry with future-ready tech. From intelligent systems to scalable infrastructure, we turn complexity into seamless innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                className="hover:bg-blue-900 text-white px-10 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(100deg, #0059A8 0%, #00427C 100%)',
                  borderColor: '#0059A8',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  boxShadow: '0 0 12px rgba(0, 89, 168, 0.4)'
                }}
              >
                Get Started
              </button>
              <button 
                className="border-2 text-black px-9 py-3 hover:bg-blue-900 rounded-md hover:text-white transition-all duration-300"
                style={{
                  borderColor: '#0059A8',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  

                 
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-6">
              <AnimatedFeatureBox
                icon={<Shield className="h-12 w-12 text-blue-800" />}
                title="HIPAA Compliant"
                delay="0"
              />
              <AnimatedFeatureBox
                icon={<CloudCog className="h-12 w-12 text-blue-800" />}
                title="AI Automation"
                delay="300"
              />
              <AnimatedFeatureBox
                icon={<Server className="h-12 w-12 text-blue-800" />}
                title="Cloud Hosting"
                delay="150"
              />
              <AnimatedFeatureBox
                icon={<Database className="h-12 w-12 text-blue-800" />}
                title="Secure Storage"
                delay="450"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimatedFeatureBox = ({ icon, title, delay }) => {
  return (
    <div
      className="group relative p-[1px] rounded-2xl overflow-hidden animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-white rounded-2xl p-6 h-full w-full transition-all duration-300 ease-out shadow-xl group-hover:scale-[1.03] group-hover:rotate-[0.5deg]">
        <div className="mb-4 p-4 rounded-full bg-blue-50 w-fit mx-auto group-hover:animate-bounceSlow transition-all duration-300">
          {icon}
        </div>
        <h3 
          className="text-lg text-center font-light text-gray-800"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {title}
        </h3>
      </div>

      {/* animated border shimmer */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 blur-xl opacity-30 animate-gradientMove"></div>
    </div>
  );
};

const HeroWithStyles = () => {
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

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-bounceSlow {
          animation: bounceSlow 2s ease-in-out infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 6s linear infinite;
        }

        html, body {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 32px;
          color: '#444343FF';
        }

        * {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap" />
      <Hero />
    </>
  );
};

export default HeroWithStyles;
