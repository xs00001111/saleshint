import React from 'react';

const Logo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Green background with rounded corners */}
      <rect width="100" height="100" rx="18" fill="#059669"/>
      
      {/* Ratio icon - two intersecting rectangles with white stroke */}
      <g transform="translate(50, 50) scale(2.5) translate(-12, -12)">
        <rect width="12" height="20" x="6" y="2" rx="2" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect width="20" height="12" x="2" y="6" rx="2" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
};

export default Logo;