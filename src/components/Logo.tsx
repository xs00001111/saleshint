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
      <rect width="100" height="100" rx="22" fill="#4a9216"/>
      
      {/* Clean ratio icon - overlapping rectangles representing proportion/balance */}
      <g transform="translate(25, 25)">
        {/* Vertical rectangle */}
        <rect width="20" height="35" x="10" y="7.5" rx="3" fill="none" stroke="white" strokeWidth="3"/>
        
        {/* Horizontal rectangle */}
        <rect width="35" height="20" x="7.5" y="15" rx="3" fill="none" stroke="white" strokeWidth="3"/>
      </g>
    </svg>
  );
};

export default Logo;