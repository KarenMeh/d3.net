import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Compliance = () => {
  const certificates = [
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance for protecting sensitive patient data",
      icon: <ShieldCheck className="h-12 w-12 text-blue-700" />,
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for data protection and privacy in the EU",
      icon: <FileCheck className="h-12 w-12 text-blue-700" />,
    },
    {
      name: "ISO 27001",
      description: "Information Security Management System certification for secure data handling",
      icon: <ShieldCheck className="h-12 w-12 text-blue-700" />,
    },
    {
      name: "SOC 2",
      description: "Service Organization Control 2 compliance for secure data management",
      icon: <FileCheck className="h-12 w-12 text-blue-700" />,
    }
  ];

  const securityFeatures = [
    "End-to-end encryption for all data transfers",
    "Multi-factor authentication for all access points",
    "Regular security audits and penetration testing",
    "Real-time threat monitoring and mitigation",
    "Automatic backup and disaster recovery systems",
    "Strict access control and logging"
  ];

  return (
    <section id="compliance" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -right-32 -bottom-32 w-64 h-64 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute -left-16 top-32 w-48 h-48 bg-teal-100 rounded-full opacity-50 blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Compliance & Security"
          subtitle="Enterprise-Grade Security for Healthcare"
          description="Our infrastructure and processes are designed to meet and exceed the strictest security and compliance requirements in healthcare."
        />
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{cert.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{cert.name}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20  rounded-xl overflow-hidden shadow-xl" style={{
                background: 'linear-gradient(100deg, #0059A8 0%, #00427C 100%)',
                fontFamily: 'Inter, sans-serif',
              }}>
          <div className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Security Promise</h3>
            <p className="text-gray-300 mb-8 max-w-3xl">
              At d3.net, security isn't just a feature—it's the foundation of everything we build. Our systems are designed with multiple layers of protection to safeguard your most sensitive healthcare data.
            </p>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-white">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Compliance;