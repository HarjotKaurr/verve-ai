
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
  // Function to get the color based on status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-verve-teal';
      case 'in-progress': return 'bg-verve-blue';
      case 'upcoming': return 'bg-white/30';
      default: return 'bg-white/30';
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-medium text-white mb-4 flex items-center">
        <span className="text-verve-teal font-semibold mr-2">
          Time-Weave
        </span>
        <span className="text-sm font-normal text-white/70">Timeline</span>
      </h2>
      
      <div className="flex-1 overflow-y-auto pr-2 hide-scrollbar">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-2.5 top-0 bottom-0 w-px bg-white/10"></div>
          
          {/* Timeline items */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <div 
                key={item.id}
                className={`
                  relative pl-8 animate-fade-in
                  ${index % 2 === 0 ? 'animate-slide-up' : ''}
                  transition-all duration-300 ease-in-out
                `}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Timeline dot */}
                <div 
                  className={`
                    absolute left-0 top-2 w-5 h-5 rounded-full flex items-center justify-center
                    border border-white/20
                  `}
                >
                  <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(item.status)}`}></div>
                </div>
                
                {/* Content */}
                <div className="glass-card p-3 hover:bg-white/10 transition-all duration-300">
                  <div className="text-xs text-white/50 mb-1">{item.time}</div>
                  <div className="text-sm font-medium text-white mb-1">{item.title}</div>
                  {item.description && (
                    <div className="text-xs text-white/70">{item.description}</div>
                  )}
                  
                  {/* Progress indicator for tasks */}
                  {item.status === 'completed' && (
                    <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-verve-teal rounded-full"></div>
                    </div>
                  )}
                  {item.status === 'in-progress' && (
                    <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-verve-blue rounded-full"></div>
                    </div>
                  )}
                  {item.status === 'upcoming' && (
                    <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-verve-pink rounded-full"></div>
                    </div>
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
