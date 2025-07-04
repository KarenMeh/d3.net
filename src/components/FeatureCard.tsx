import React from 'react';
import { Database } from 'lucide-react';

interface FeatureCardProps {
  name: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ name }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-3 flex items-center hover:bg-gray-100 transition-colors duration-200">
      <div className="bg-teal-100 p-2 rounded-full mr-3">
        <Database className="h-4 w-4 text-teal-600" />
      </div>
      <span className="text-gray-700 font-medium">{name}</span>
    </div>
  );
};

export default FeatureCard; 