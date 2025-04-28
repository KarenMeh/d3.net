import React from 'react';
import { Shield, Server, Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" text-white pt-16 pb-8"
    style={{
      background: 'linear-gradient(100deg, #075599FF 0%, #00427C 100%)',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-blue-800">
          <div>
            <div className="flex items-center mb-5">
            <img 
              src="/w.png" 
              alt="D3.net Logo" 
              className="h-16 w-auto"
            />              
            </div>
            <p className="text-gray-300 mb-6">
            With our hosting and domain service we offer professional and reliable web hosting. We always strive to provide our customers with the best possible service.

</p>
          </div>          
          <div className="ml-5 sm:ml-3 md:ml-10 lg:ml-10">
          <h4 className="font-semibold text-lg mb-5">Company</h4>
            <ul className="space-y-3 ">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#compliance">Compliance</FooterLink>
              <FooterLink href="#global">Global Presence</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-5">Solutions</h4>
            <ul className="space-y-3">
              <FooterLink href="#">Healthcare Cloud</FooterLink>
              <FooterLink href="#">Secure Hosting</FooterLink>
              <FooterLink href="#">Custom Software</FooterLink>
              <FooterLink href="#">AI & Automation</FooterLink>
              <FooterLink href="#">Managed IT Services</FooterLink>
            </ul>
          </div>
          
          
        </div>
        
        <div className="mt-8 text-center">
          
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} d3.net. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <a href={href} className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
        {children}
      </a>
    </li>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-teal-600 transition-colors duration-300">
      {icon}
    </a>
  );
};

export default Footer;