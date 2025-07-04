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
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SalesHint AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;