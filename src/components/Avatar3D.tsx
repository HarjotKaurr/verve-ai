
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
        rounded-full border border-white/20 
        w-44 h-44 flex items-center justify-center
        ${isActive ? 'animate-pulse-glow' : ''}
      `}>
        {/* Placeholder for 3D model - in a real app you'd use three.js here */}
        <div className="w-36 h-36 rounded-full bg-black flex items-center justify-center border border-white/10">
          <div className="text-5xl font-bold text-verve-teal animate-float">
            V
          </div>
        </div>
        
        {/* Animated ring effect */}
        <div className={`
          absolute inset-0 rounded-full border border-verve-teal/30
          ${pulseEffect ? 'animate-pulse-glow' : ''}
        `}></div>
      </div>
      
      {/* AI Status */}
      <div className="text-center mt-4">
        <div className="text-verve-gray text-xs uppercase font-semibold tracking-wider mb-1">
          AI Status
        </div>
        <div className={`
          inline-flex items-center px-3 py-1 rounded-full 
          ${isActive 
            ? 'bg-verve-teal/10 text-verve-teal border border-verve-teal/30' 
            : 'bg-white/10 text-white border border-white/20'}
        `}>
          <span className={`
            w-1.5 h-1.5 rounded-full mr-2
            ${isActive ? 'bg-verve-teal' : 'bg-white/50'}
          `}></span>
          <span className="text-xs font-medium">
            {isActive ? 'ACTIVE' : 'STANDBY'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Avatar3D;
