import React, { useState, useRef, useEffect } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { analytics } from '../lib/analytics';

interface DownloadButtonsProps {
  variant?: 'hero' | 'page';
  className?: string;
}

const DownloadButtons: React.FC<DownloadButtonsProps> = ({ variant = 'hero', className = '' }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDownload = (architecture: 'x64' | 'arm64') => {
    // Track download event
    analytics.trackDownload('macOS', architecture);

    const downloadUrls = {
      x64: 'https://github.com/xs00001111/saleshint/releases/download/v1.0.2/Sales-Hint-x64.dmg',
      arm64: 'https://github.com/xs00001111/saleshint/releases/download/v1.0.2/Sales-Hint-arm64.dmg'
    };
    
    // Open the download URL in a new tab
    window.open(downloadUrls[architecture], '_blank');
    
    // Close dropdown after download starts
    setIsDropdownOpen(false);
  };

  const handleDefaultDownload = () => {
    handleDownload('arm64');
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (variant === 'hero') {
    return (
      <div className={`relative flex justify-center ${className}`} ref={dropdownRef}>
        <div className="inline-flex">
          <button
            onClick={handleDefaultDownload}
            className="btn bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl inline-flex items-center justify-center px-8 py-4 rounded-l-lg font-medium transition-all duration-200 text-lg"
          >
            <Download className="mr-3 h-6 w-6" />
            Download for Mac
          </button>
          <button
            onClick={toggleDropdown}
            className="btn bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl inline-flex items-center justify-center px-3 py-4 rounded-r-lg border-l border-gray-700 transition-all duration-200"
          >
            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {isDropdownOpen && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-[9999] min-w-[280px]">
            <div className="py-2">
              <button
                onClick={() => handleDownload('arm64')}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center"
              >
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Apple Silicon (ARM64)</div>
                  <div className="text-sm text-gray-600">For M1, M2, M3 Macs (2020 and newer)</div>
                </div>
                <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Default</div>
              </button>
              <button
                onClick={() => handleDownload('x64')}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="font-semibold text-gray-900">Intel (x64)</div>
                <div className="text-sm text-gray-600">For Intel-based Macs (2019 and older)</div>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Page variant - keep the same structure for consistency
  return (
    <div className={`relative text-center ${className}`} ref={dropdownRef}>
      <div className="inline-flex">
        <button
          onClick={handleDefaultDownload}
          className="btn bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl inline-flex items-center justify-center px-8 py-4 rounded-l-lg font-medium transition-all duration-200 text-lg"
        >
          <Download className="mr-3 h-6 w-6" />
          Download for Mac
        </button>
        <button
          onClick={toggleDropdown}
          className="btn bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl inline-flex items-center justify-center px-3 py-4 rounded-r-lg border-l border-gray-700 transition-all duration-200"
        >
          <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {isDropdownOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-[9999] min-w-[280px]">
          <div className="py-2">
            <button
              onClick={() => handleDownload('arm64')}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center"
            >
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Apple Silicon (ARM64)</div>
                <div className="text-sm text-gray-600">For M1, M2, M3 Macs (2020 and newer)</div>
              </div>
              <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Default</div>
            </button>
            <button
              onClick={() => handleDownload('x64')}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="font-semibold text-gray-900">Intel (x64)</div>
              <div className="text-sm text-gray-600">For Intel-based Macs (2019 and older)</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadButtons;