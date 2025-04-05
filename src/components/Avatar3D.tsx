
import React, { useState, useEffect } from 'react';

interface Avatar3DProps {
  isActive?: boolean;
}

const Avatar3D: React.FC<Avatar3DProps> = ({ isActive = false }) => {
  const [pulseEffect, setPulseEffect] = useState(false);
  
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setPulseEffect(prev => !prev);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isActive]);
  
  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      {/* 3D Avatar Container */}
      <div className={`
        rounded-full bg-gradient-to-b from-verve-teal/20 to-verve-lilac/20 
        w-48 h-48 flex items-center justify-center backdrop-blur-sm
        border border-white/10 mb-4 relative overflow-hidden
        ${isActive ? 'animate-pulse-glow' : ''}
      `}>
        {/* Placeholder for 3D model - in a real app you'd use three.js here */}
        <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-verve-midnight via-verve-midnight/90 to-verve-midnight/80 flex items-center justify-center">
          <div className="text-6xl font-bold bg-gradient-to-r from-verve-teal to-verve-lilac bg-clip-text text-transparent animate-float">
            V
          </div>
        </div>
        
        {/* Animated ring effect */}
        <div className={`
          absolute inset-0 rounded-full border-2 border-verve-teal/30
          ${pulseEffect ? 'animate-pulse-glow' : ''}
        `}></div>
      </div>
      
      {/* AI Status */}
      <div className="text-center">
        <div className="text-verve-grey text-sm uppercase font-semibold tracking-wider mb-1">
          AI Status
        </div>
        <div className={`
          inline-flex items-center px-3 py-1 rounded-full 
          ${isActive 
            ? 'bg-verve-teal/20 text-verve-teal border border-verve-teal/50' 
            : 'bg-verve-grey/20 text-verve-grey border border-verve-grey/30'
          }
        `}>
          <span className={`
            w-2 h-2 rounded-full mr-2
            ${isActive ? 'bg-verve-teal animate-pulse' : 'bg-verve-grey'}
          `}></span>
          <span className="text-xs font-medium">
            {isActive ? 'LISTENING' : 'STANDBY'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Avatar3D;
