import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Download, ChevronDown } from 'lucide-react';
import { analytics } from '../lib/analytics';

interface DownloadButtonsProps {
  variant?: 'hero' | 'page';
  className?: string;
}

const DownloadButtons: React.FC<DownloadButtonsProps> = ({ variant = 'hero', className = '' }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

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
    
    if (!isDropdownOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX + (rect.width / 2)
      });
    }
    
    setIsDropdownOpen(!isDropdownOpen);
  };

  const renderDropdown = () => {
    if (!isDropdownOpen) return null;
    
    return createPortal(
      <div 
        ref={dropdownRef}
        className="fixed bg-white rounded-lg shadow-2xl border border-gray-200 min-w-[280px]" 
        style={{ 
          top: dropdownPosition.top,
          left: dropdownPosition.left,
          transform: 'translateX(-50%)',
          zIndex: 999999 
        }}
      >
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
      </div>,
      document.body
    );
  };

  if (variant === 'hero') {
    return (
      <>
        <div className={`flex justify-center ${className}`} ref={buttonRef}>
          <div className="inline-flex rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={handleDefaultDownload}
              className="bg-gray-900 text-white hover:bg-gray-800 inline-flex items-center justify-center px-8 py-4 font-medium transition-all duration-200 text-lg"
            >
              <Download className="mr-3 h-6 w-6" />
              Download for Mac
            </button>
            <button
              onClick={toggleDropdown}
              className="bg-gray-900 text-white hover:bg-gray-800 inline-flex items-center justify-center px-3 py-4 border-l border-gray-700 transition-all duration-200"
            >
              <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
        {renderDropdown()}
      </>
    );
  }

  // Page variant - keep the same structure for consistency
  return (
    <>
      <div className={`text-center ${className}`} ref={buttonRef}>
        <div className="inline-flex rounded-lg shadow-lg overflow-hidden">
          <button
            onClick={handleDefaultDownload}
            className="bg-gray-900 text-white hover:bg-gray-800 inline-flex items-center justify-center px-8 py-4 font-medium transition-all duration-200 text-lg"
          >
            <Download className="mr-3 h-6 w-6" />
            Download for Mac
          </button>
          <button
            onClick={toggleDropdown}
            className="bg-gray-900 text-white hover:bg-gray-800 inline-flex items-center justify-center px-3 py-4 border-l border-gray-700 transition-all duration-200"
          >
            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
      {renderDropdown()}
    </>
  );
};

export default DownloadButtons;