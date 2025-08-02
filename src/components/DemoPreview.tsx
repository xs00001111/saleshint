import React from 'react';

const DemoPreview = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[700px]">
      <div className="bg-[#1C1C1E] rounded-xl overflow-hidden shadow-2xl h-full">
        <iframe
          src="/demo/sales-demo.html"
          className="w-full h-full border-0"
          title="SalesHint Interactive Demo"
          style={{ 
            borderRadius: '12px',
            background: '#1C1C1E'
          }}
        />
      </div>
      
    </div>
  );
};

export default DemoPreview;