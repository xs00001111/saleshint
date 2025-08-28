import React from 'react';

const DemoPreview = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[700px] mt-8">
      <div className="bg-white rounded-xl overflow-hidden shadow-2xl h-full border border-gray-200" style={{ zIndex: 1 }}>
        <iframe
          src="/demo/sales-demo.html"
          className="w-full h-full border-0"
          title="SalesHint Interactive Demo"
          style={{ 
            borderRadius: '12px',
            background: '#ffffff'
          }}
        />
      </div>
      
    </div>
  );
};

export default DemoPreview;