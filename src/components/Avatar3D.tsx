
import React, { useState, useEffect } from 'react';

interface Avatar3DProps {
  isActive?: boolean;
  enableChat?: boolean;
}

const Avatar3D: React.FC<Avatar3DProps> = ({ isActive = false, enableChat = false }) => {
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
      
      {/* Chat Interface - Only show if enableChat is true */}
      {enableChat && (
        <div className="w-full mt-8">
          <div className="glass-card p-4 max-h-64 overflow-y-auto mb-3">
            <div className="space-y-3">
              <div className="bg-white/5 p-2 rounded-lg text-sm">
                <span className="text-verve-teal font-medium">Verve</span>
                <p className="text-white/90">How can I help you today?</p>
              </div>
              
              <div className="bg-white/10 p-2 rounded-lg text-sm ml-auto max-w-[80%]">
                <span className="text-white/70 font-medium">You</span>
                <p className="text-white">What's on my schedule today?</p>
              </div>
              
              <div className="bg-white/5 p-2 rounded-lg text-sm">
                <span className="text-verve-teal font-medium">Verve</span>
                <p className="text-white/90">You have a meeting at 2pm and a focus session at 4pm.</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <input type="text" className="flex-1 bg-white/5 border border-white/20 rounded-l-md p-2 text-sm text-white focus:outline-none focus:border-verve-teal" placeholder="Message Verve.ai..." />
            <button className="bg-verve-teal text-black px-4 py-2 rounded-r-md text-sm font-medium">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar3D;
