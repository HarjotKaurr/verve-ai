
import React from 'react';

interface TimelineItem {
  id: number;
  time: string;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  description?: string;
}

interface TimeWeaveProps {
  items: TimelineItem[];
}

const TimeWeave: React.FC<TimeWeaveProps> = ({ items }) => {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-semibold text-verve-grey mb-4 flex items-center">
        <span className="bg-gradient-to-r from-verve-teal to-verve-lilac bg-clip-text text-transparent font-bold mr-2">
          Time-Weave
        </span>
        <span className="text-sm font-normal">Timeline</span>
      </h2>
      
      <div className="flex-1 overflow-y-auto pr-2 hide-scrollbar">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-verve-teal/50 via-verve-lilac/30 to-verve-grey/20"></div>
          
          {/* Timeline items */}
          <div className="space-y-6">
            {items.map((item, index) => (
              <div 
                key={item.id}
                className={`
                  relative pl-10 animate-fade-in
                  ${index % 2 === 0 ? 'animate-slide-up' : ''}
                  transition-all duration-300 ease-in-out
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div 
                  className={`
                    absolute left-0 top-1.5 w-5 h-5 rounded-full flex items-center justify-center
                    ${item.status === 'completed' ? 'bg-verve-teal' : 
                      item.status === 'in-progress' ? 'bg-verve-lilac' : 'bg-verve-grey/40'}
                  `}
                >
                  <div 
                    className={`
                      w-2 h-2 rounded-full 
                      ${item.status === 'in-progress' ? 'bg-white animate-pulse' : 'bg-transparent'}
                    `}
                  ></div>
                </div>
                
                {/* Content */}
                <div className="glass-card p-3 hover:bg-white/5 transition-all duration-300">
                  <div className="text-xs text-verve-grey mb-1">{item.time}</div>
                  <div className="text-sm font-medium text-white mb-1">{item.title}</div>
                  {item.description && (
                    <div className="text-xs text-verve-grey">{item.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeWeave;
