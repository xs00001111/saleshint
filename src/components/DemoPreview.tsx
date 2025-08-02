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
      
      {/* Demo instructions overlay */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
        <div className="flex items-center justify-between">
          <span>🎯 Interactive Demo: Click "Start Listen" to begin the sales conversation simulation</span>
          <div className="flex gap-2 text-xs opacity-75">
            <span>⌘L</span>
            <span>⌘↵</span>
            <span>⌘N</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPreview;