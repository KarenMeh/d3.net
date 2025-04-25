import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  description: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, description, light = false }) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className={`text-sm font-semibold uppercase tracking-wider ${light ? 'text-blue-900' : 'text-blue-800'}`}>
        {title}
      </h2>
      <h3 className={`text-3xl md:text-4xl font-bold mt-2 mb-4 ${light ? 'text-white' : 'text-blue-900'}`}>
        {subtitle}
      </h3>
      <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;