import React from 'react';
import { Shield, Server, Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-blue-800">
          <div>
            <div className="flex items-center mb-5">
              <div className="flex items-center text-teal-400 mr-3">
                <Shield className="h-6 w-6 mr-1" />
                <Server className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl">
                d3<span className="text-teal-400">.net</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Providing secure, reliable cloud hosting and IT solutions for healthcare organizations for over 25 years.
            </p>
            <div className="flex space-x-3">
              <SocialIcon icon={<Facebook className="h-4 w-4" />} />
              <SocialIcon icon={<Twitter className="h-4 w-4" />} />
              <SocialIcon icon={<Linkedin className="h-4 w-4" />} />
              <SocialIcon icon={<Instagram className="h-4 w-4" />} />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-5">Company</h4>
            <ul className="space-y-3">
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
          
          <div>
            <h4 className="font-semibold text-lg mb-5">Resources</h4>
            <ul className="space-y-3">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Case Studies</FooterLink>
              <FooterLink href="#">Whitepapers</FooterLink>
              <FooterLink href="#">Support</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-8 mb-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Cookie Policy</a>
          </div>
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