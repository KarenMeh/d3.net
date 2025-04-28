import React, { useState, useEffect } from 'react';
import { Shield, Server, Menu, X } from 'lucide-react';
import { translations } from '../translations';

interface NavbarProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/d32.png" 
              alt="D3.net Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks textColor={scrolled ? 'text-gray-800' : 'text-black'} language={language} />
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
                className="flex items-center justify-center w-8 h-6 overflow-hidden rounded shadow-sm hover:opacity-80 transition-opacity duration-300"
                aria-label={language === 'en' ? 'Switch to German' : 'Switch to English'}
              >
                {language === 'en' ? (
                  // German Flag
                  <div className="w-full h-full flex flex-col">
                    <div className="h-1/3 bg-black"></div>
                    <div className="h-1/3 bg-red-600"></div>
                    <div className="h-1/3 bg-yellow-400"></div>
                  </div>
                ) : (
                  // Simplified American Flag
                  <div className="w-full h-full relative">
                    {/* Stripes - simplified to 7 stripes */}
                    <div className="absolute inset-0 flex flex-col">
                      <div className="h-1/6 bg-red-600"></div>
                      <div className="h-1/6 bg-white"></div>
                      <div className="h-1/6 bg-red-600"></div>
                      <div className="h-1/6 bg-white"></div>
                      <div className="h-1/6 bg-red-600"></div>
                      <div className="h-1/6 bg-white"></div>
                    </div>
                    {/* Blue canton */}
                    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-800 flex items-center justify-center">
                      <div className="text-white text-xs">★</div>
                    </div>
                  </div>
                )}
              </button>
              <button className=" hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg"
               style={{
                background: 'linear-gradient(100deg, #0059A8 0%, #00427C 100%)',
                fontFamily: 'Inter, sans-serif',
              }}>
                {translations[language].contactUs}
              </button>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4 pt-2 pb-3">
              <NavLinks textColor="text-gray-800" language={language} />
              <button 
                onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
                className="flex items-center justify-center w-8 h-6 overflow-hidden rounded shadow-sm hover:opacity-80 transition-opacity duration-300 mx-auto"
                aria-label={language === 'en' ? 'Switch to German' : 'Switch to English'}
              >
                {language === 'en' ? (
                  // German Flag
                  <div className="w-full h-full flex flex-col">
                    <div className="h-1/3 bg-black"></div>
                    <div className="h-1/3 bg-red-600"></div>
                    <div className="h-1/3 bg-yellow-400"></div>
                  </div>
                ) : (
                  // Simplified American Flag
                  <div className="w-full h-full relative">
                    {/* Stripes - simplified to 6 stripes */}
                    <div className="absolute inset-0 flex flex-col">
                      <div className="h-1/6 bg-red-600"></div>
                      <div className="h-1/6 bg-white"></div>
                      <div className="h-1/6 bg-red-600"></div>
                      <div className="h-1/6 bg-white"></div>
                      <div className="h-1/6 bg-red-600"></div>
                      <div className="h-1/6 bg-white"></div>
                    </div>
                    {/* Blue canton */}
                    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-800 flex items-center justify-center">
                      <div className="text-white text-xs">★</div>
                    </div>
                  </div>
                )}
              </button>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg">
                {translations[language].contactUs}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLinks = ({ textColor, language }: { textColor: string; language: string }) => {
  return (
    <>
      <a href="#about" className={`${textColor} hover:text-blue-600 transition-colors duration-300`}>
        {translations[language].aboutUs}
      </a>
      <a href="#services" className={`${textColor} hover:text-blue-600 transition-colors duration-300`}>
        {translations[language].services}
      </a>
      <a href="#compliance" className={`${textColor} hover:text-blue-600 transition-colors duration-300`}>
        {translations[language].compliance}
      </a>
      <a href="#global" className={`${textColor} hover:text-blue-600 transition-colors duration-300`}>
        {translations[language].globalPresence}
      </a>
    </>
  );
};

export default Navbar;