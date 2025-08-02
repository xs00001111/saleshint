import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Download, Monitor, X } from 'lucide-react';
import { analytics } from '../lib/analytics';

interface DownloadButtonsProps {
  variant?: 'hero' | 'page';
  className?: string;
}

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: (architecture: 'x64' | 'arm64') => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  const portalRoot = document.getElementById('portal-root');
  if (!portalRoot) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              {/* Real Apple Logo */}
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Choose Your Mac Version</h2>
            <p className="text-gray-600">
              Select the version that matches your Mac's processor
            </p>
          </div>

          <div className="space-y-4">
            {/* Apple Silicon */}
            <button
              onClick={() => onDownload('arm64')}
              className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-200 text-left group"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Apple Silicon</h3>
                  <p className="text-sm text-gray-600">For M1, M2, M3 Macs (2020 and newer)</p>
                </div>
                <Download className="h-5 w-5 text-gray-400 group-hover:text-emerald-600 transition-colors" />
              </div>
            </button>

            {/* Intel */}
            <button
              onClick={() => onDownload('x64')}
              className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 text-left group"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-600 transition-colors">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Intel</h3>
                  <p className="text-sm text-gray-600">For Intel-based Macs (2019 and older)</p>
                </div>
                <Download className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
              </div>
            </button>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Not sure which Mac you have?{' '}
              <button 
                onClick={() => alert('Go to Apple Menu > About This Mac to see your processor type')}
                className="text-emerald-600 hover:text-emerald-700 underline"
              >
                Check here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>,
    portalRoot
  );
};

const DownloadButtons: React.FC<DownloadButtonsProps> = ({ variant = 'hero', className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = (architecture: 'x64' | 'arm64') => {
    // Track download event
    analytics.trackDownload('macOS', architecture);

    const downloadUrls = {
      x64: 'https://github.com/xs00001111/saleshint/releases/download/v1.0.0/Sales-Hint-x64.dmg',
      arm64: 'https://github.com/xs00001111/saleshint/releases/download/v1.0.0/Sales-Hint-arm64.dmg'
    };
    
    // Open the download URL in a new tab
    window.open(downloadUrls[architecture], '_blank');
    
    // Close modal after download starts
    setIsModalOpen(false);
  };

  const openModal = () => {
    analytics.track('download_modal_opened');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    analytics.track('download_modal_closed');
    setIsModalOpen(false);
  };

  if (variant === 'hero') {
    return (
      <>
        <div className={`${className}`}>
          <button
            onClick={openModal}
            className="btn bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-all duration-200 text-lg"
          >
            <Download className="mr-3 h-6 w-6" />
            Download for Mac
          </button>
        </div>

        <DownloadModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          onDownload={handleDownload}
        />
      </>
    );
  }

  // Page variant - keep the same structure for consistency
  return (
    <>
      <div className={`text-center ${className}`}>
        <button
          onClick={openModal}
          className="btn bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-all duration-200 text-lg"
        >
          <Download className="mr-3 h-6 w-6" />
          Download for Mac
        </button>
      </div>

      <DownloadModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        onDownload={handleDownload}
      />
    </>
  );
};

export default DownloadButtons;