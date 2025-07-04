import React, { useState, useEffect } from 'react';
import { Shield, Server, Menu, X, LogIn } from 'lucide-react';
import { translations } from '../translations';

// Add font import
const NavbarWithStyles: React.FC<NavbarProps> = (props) => {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" />
      <style>{`
        * {
          font-family: 'Open Sans', sans-serif;
          font-weight: 300;
        }
      `}</style>
      <Navbar {...props} />
    </>
  );
};

interface NavbarProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Detect browser language on component mount
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'de' || browserLang === 'en') {
      setLanguage(browserLang);
    } else {
      setLanguage('de'); // Default to German if browser language is not supported
    }
  }, [setLanguage]);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log('Login button clicked'); // Debug log
    window.open('https://login.d3.net', '_blank', 'noopener,noreferrer');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/D3.png" 
              alt="D3.net Logo" 
              className="h-12 sm:h-16 md:h-20 w-auto transition-all duration-300"
            />
          </div>
          
          {/* Right side container for nav and buttons */}
          <div className="flex items-center space-x-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLinks textColor={scrolled ? 'text-gray-800' : 'text-gray-900'} language={language} />
            </nav>
            
            {/* Language Switcher and Login Button */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
                className="flex items-center justify-center w-8 h-6 overflow-hidden rounded shadow-sm hover:opacity-80 transition-opacity duration-300"
                aria-label={language === 'en' ? 'Switch to German' : 'Switch to English'}
                style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 300 }}
              >
                {language === 'en' ? (
                  <div className="w-full h-full flex flex-col">
                    <div className="h-1/3 bg-black"></div>
                    <div className="h-1/3 bg-red-600"></div>
                    <div className="h-1/3 bg-yellow-400"></div>
                  </div>
                ) : (
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 flex flex-col">
                      <div className="h-1/6 bg-red-600"></div>
                      <div className="h-1/6 bg-white"></div>
                      <div className="h-1/6 bg-red-600"></div>
                      <div className="h-1/6 bg-white"></div>
                      <div className="h-1/6 bg-red-600"></div>
                      <div className="h-1/6 bg-white"></div>
                    </div>
                    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-800 flex items-center justify-center">
                      <div className="text-white text-xs">★</div>
                    </div>
                  </div>
                )}
              </button>
              <a 
                href="https://login.d3.net" 
                onClick={handleLoginClick}
                className="hidden md:inline-block hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                style={{
                  background: 'linear-gradient(100deg, #0059A8 0%, #00427C 100%)',
                  fontFamily: 'Open Sans, sans-serif',
                  fontWeight: 300
                }}
              >
                {translations[language].login}
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none mobile-menu-button"
              aria-label="Toggle menu"
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
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mobile-menu`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-4">
            <NavLinks 
              textColor="text-gray-800" 
              language={language} 
              onLinkClick={() => setMobileMenuOpen(false)}
            />
            <a 
              href="https://login.d3.net" 
              onClick={handleLoginClick}
              className="block w-full text-center hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg mt-4 cursor-pointer"
              style={{
                background: 'linear-gradient(100deg, #0059A8 0%, #00427C 100%)',
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 300
              }}
            >
              {translations[language].login}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ textColor, language, onLinkClick }: { textColor: string; language: string; onLinkClick?: () => void }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 80; // Height of the fixed header
      const sectionTop = section.offsetTop - headerHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Close mobile menu if it's open
    if (onLinkClick) {
      onLinkClick();
    }

    // Scroll to section after a brief delay
    setTimeout(() => {
      scrollToSection(targetId);
    }, 50);
  };

  return (
    <>
      <a 
        href="#about" 
        onClick={(e) => handleClick(e, 'about')}
        className={`${textColor} hover:text-blue-600 transition-colors duration-300 text-base block md:inline-block py-2 md:py-0 cursor-pointer`}
        style={{ 
          fontFamily: 'Open Sans, sans-serif', 
          fontWeight: 300,
          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
          letterSpacing: '0.01em'
        }}
      >
        {translations[language].aboutUs}
      </a>
      <a 
        href="#software-solutions" 
        onClick={(e) => handleClick(e, 'software-solutions')}
        className={`${textColor} hover:text-blue-600 transition-colors duration-300 text-base block md:inline-block py-2 md:py-0 cursor-pointer`}
        style={{ 
          fontFamily: 'Open Sans, sans-serif', 
          fontWeight: 300,
          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
          letterSpacing: '0.01em'
        }}
      >
        {translations[language].softwareSolutions}
      </a>
      <a 
        href="#server-offerings" 
        onClick={(e) => handleClick(e, 'server-offerings')}
        className={`${textColor} hover:text-blue-600 transition-colors duration-300 text-base block md:inline-block py-2 md:py-0 cursor-pointer`}
        style={{ 
          fontFamily: 'Open Sans, sans-serif', 
          fontWeight: 300,
          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
          letterSpacing: '0.01em'
        }}
      >
        {translations[language].serverOfferings}
      </a>
      <a 
        href="#contact" 
        onClick={(e) => handleClick(e, 'contact')}
        className={`${textColor} hover:text-blue-600 transition-colors duration-300 text-base block md:inline-block py-2 md:py-0 cursor-pointer`}
        style={{ 
          fontFamily: 'Open Sans, sans-serif', 
          fontWeight: 300,
          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
          letterSpacing: '0.01em'
        }}
      >
        {translations[language].contactUs}
      </a>
    </>
  );
};

export default NavbarWithStyles;