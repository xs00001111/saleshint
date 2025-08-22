import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Logo className="h-10 w-10" />
            <span className="ml-2 text-2xl font-bold">SalesHint</span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering sales professionals with AI-powered insights to close more deals.
          </p>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="mb-6 space-y-3">
            <p className="text-gray-400">
              Real-Time Hints Labs · 1 Dock 72 Way, Brooklyn, NY 11249
            </p>
            <p className="text-gray-400">
              <a 
                href="mailto:founders@saleshint.com"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                Contact our founders
              </a>
            </p>
            <p className="text-gray-400">
              Checkout our other project:{' '}
              <a 
                href="https://interm.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                Interview Terminator
              </a>
            </p>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SalesHint AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;