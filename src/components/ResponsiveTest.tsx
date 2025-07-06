import React from 'react';

const ResponsiveTest: React.FC = () => {
  return (
    <div className="responsive-container p-responsive">
      <h1 className="responsive-heading text-center mb-8">Responsive Design Test</h1>
      
      {/* Responsive Grid Test */}
      <div className="responsive-grid mb-8">
        <div className="responsive-card bg-white shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Mobile (320px - 640px)</h3>
          <p className="responsive-text">
            Single column layout, larger touch targets, optimized typography
          </p>
        </div>
        
        <div className="responsive-card bg-white shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Tablet (641px - 1024px)</h3>
          <p className="responsive-text">
            Two-column layout, medium spacing, balanced typography
          </p>
        </div>
        
        <div className="responsive-card bg-white shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Desktop (1025px+)</h3>
          <p className="responsive-text">
            Multi-column layout, generous spacing, full typography scale
          </p>
        </div>
      </div>
      
      {/* Responsive Button Test */}
      <div className="text-center mb-8">
        <button className="responsive-button bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Responsive Button
        </button>
      </div>
      
      {/* Responsive Spacing Test */}
      <div className="space-responsive flex flex-wrap justify-center">
        <div className="bg-gray-200 p-4 rounded">Item 1</div>
        <div className="bg-gray-200 p-4 rounded">Item 2</div>
        <div className="bg-gray-200 p-4 rounded">Item 3</div>
        <div className="bg-gray-200 p-4 rounded">Item 4</div>
      </div>
    </div>
  );
};

export default ResponsiveTest; 