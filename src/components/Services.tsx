import React from 'react';
import { Server, Code, Database, Bot, Network, ShieldCheck, Lock, CloudCog } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Services = () => {
  const serviceCategories = [
    {
      icon: <Server className="h-8 w-8 text-white" />,
      title: "Cloud Hosting",
      description: "Secure, scalable cloud infrastructure specifically designed for healthcare applications.",
      industries: ["Healthcare", "Pharma", "Medical Research"],
    },
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Software Development",
      description: "Custom healthcare applications built with security and compliance in mind.",
      industries: ["Healthcare", "IT", "Pharma"],
    },
    {
      icon: <Bot className="h-8 w-8 text-white" />,
      title: "AI & Automation",
      description: "Intelligent solutions that streamline healthcare workflows and improve outcomes.",
      industries: ["Healthcare", "Research", "Pharma"],
    },
    {
      icon: <Network className="h-8 w-8 text-white" />,
      title: "Internet Provider",
      description: "Reliable, high-speed connectivity solutions for healthcare organizations.",
      industries: ["Healthcare", "IT", "Retail"],
    },
  ];

  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-700" />,
      title: "Security First",
      description: "End-to-end encryption and security protocols for all services.",
    },
    {
      icon: <Lock className="h-6 w-6 text-blue-700" />,
      title: "Compliance Guaranteed",
      description: "Built-in HIPAA, GDPR, and ISO compliance across our services.",
    },
    {
      icon: <CloudCog className="h-6 w-6 text-blue-700" />,
      title: "24/7 Monitoring",
      description: "Continuous systems monitoring and rapid incident response.",
    },
    {
      icon: <Database className="h-6 w-6 text-blue-700" />,
      title: "Data Protection",
      description: "Robust data protection with automated backups and recovery.",
    },
  ];

  const gradientStyle = {
    background: "linear-gradient(100deg, #0059A8 0%, #00427C 100%)",
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive Healthcare IT Solutions"
          description="We offer a full spectrum of technology services tailored specifically for healthcare organizations."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-10">Core Features Across All Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    industries: string[];
  };
}

const gradientStyle = {
  background: "linear-gradient(100deg, #0059A8 0%, #00427C 100%)",
};

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col">
      <div className="p-6 transition-all group-hover:py-8" style={gradientStyle}>
        <div className="flex justify-center">{service.icon}</div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="font-bold text-xl text-blue-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-5">{service.description}</p>
        <div className="mt-auto">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Industries Served:</h4>
          <div className="flex flex-wrap gap-2">
            {service.industries.map((industry, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureProps {
  feature: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
}

const FeatureCard: React.FC<FeatureProps> = ({ feature }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all duration-300 border-t-4 border-blue-700">
      <div className="bg-blue-50 p-3 rounded-full inline-block mb-4">{feature.icon}</div>
      <h3 className="font-semibold text-lg text-blue-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

export default Services;
