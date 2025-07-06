import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);

  const handleFooterLinkClick = (path: string, e: React.MouseEvent) => {
    if (location.pathname === path) {
      // If we're already on this page, prevent default navigation and scroll to top
      e.preventDefault();
      setIsScrolling(true);
      
      // Use multiple scroll methods to ensure it works
      const scrollToTop = () => {
        // Method 1: window.scrollTo with smooth behavior
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        
        // Method 2: Direct scrollTop assignment
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Method 3: Scroll to the very top of the document
        window.scrollTo(0, 0);
      };
      
      // Execute scroll immediately
      scrollToTop();
      
      // Also execute after a small delay to ensure it works
      setTimeout(scrollToTop, 100);
      
      // Focus on the navbar header to move focus away from footer
      setTimeout(() => {
        const navbar = document.querySelector('header') || document.querySelector('nav');
        if (navbar) {
          navbar.focus();
        }
      }, 200);
      
      // Reset the flag after scroll completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
    // If we're on a different page, let the Link component handle navigation normally
    // The new page will load at the top by default
  };

  return (
    <footer className="bg-gradient-to-r from-[#075599] to-[#00427C] text-white py-8 sm:py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/d3w.png" 
              alt="D3.net Logo" 
              className="h-12 sm:h-16 w-auto"
            />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Professional and reliable services. We are committed to providing our customers with the best possible service and support.            </p>
          </div>

          {/* Quick Links */}
          
        </div>

        {/* Legal Links and Copyright */}
        <div className="border-t border-blue-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
              <Link 
                to="/impressum" 
                onClick={(e) => handleFooterLinkClick('/impressum', e)}
                className="text-gray-300 hover:text-teal-300 transition-colors duration-300 text-sm"
              >
                Impressum
              </Link>
              <Link 
                to="/datenschutz" 
                onClick={(e) => handleFooterLinkClick('/datenschutz', e)}
                className="text-gray-300 hover:text-teal-300 transition-colors duration-300 text-sm"
              >
                Datenschutz
              </Link>
              <span className="text-gray-300 text-sm">
                AGB
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} d3.net. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-300 hover:text-teal-300 transition-colors duration-300 text-sm"
    >
      {children}
    </a>
  </li>
);

export default Footer; 