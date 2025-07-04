import React from 'react';

const Logo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M16 2L2 16L16 30L30 16L16 2Z" 
        className="fill-emerald-800"
      />
      <path 
        d="M16 7L9 16L16 25L23 16L16 7Z" 
        fill="white"
      />
      <circle 
        cx="16" 
        cy="16" 
        r="3" 
        className="fill-emerald-800"
      />
    </svg>
  );
};

export default Logo;