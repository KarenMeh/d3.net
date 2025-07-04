import React from 'react';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
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
              <a 
                href="https://d3.net/impressum" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-teal-300 transition-colors duration-300 text-sm"
              >
                Impressum
              </a>
              <a 
                href="https://d3.net/datenschutz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-teal-300 transition-colors duration-300 text-sm"
              >
                Datenschutz
              </a>
              <a 
                href="https://d3.net/agb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-teal-300 transition-colors duration-300 text-sm"
              >
                AGB
              </a>
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