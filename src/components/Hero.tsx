import React from 'react';
import { Sparkles } from 'lucide-react';
import DemoPreview from './DemoPreview';
import DownloadButtons from './DownloadButtons';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-24 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-8 fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI Sales Assistant</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sell Smarter with <span className="text-green-900">AI</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Get real-time guidance during sales calls to handle objections and close more deals.
            </p>
            
            {/* Download Buttons */}
            <div className="mb-4">
              <DownloadButtons variant="hero" />
            </div>
            
            {/* Platform availability with real logos */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm">
              <div className="flex items-center text-emerald-700">
                {/* Real Apple Logo */}
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>Available for macOS</span>
              </div>
              
              <div className="flex items-center text-gray-500">
                {/* Real Microsoft Windows Logo */}
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351"/>
                </svg>
                <span>Windows coming soon</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-8 slide-in">
            <DemoPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;