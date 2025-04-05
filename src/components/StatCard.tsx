
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string | number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, trend }) => {
  return (
    <div className="glass-card p-4 h-full">
      <div className="flex justify-between items-start mb-2">
        <div className="text-sm text-verve-grey">{title}</div>
        {icon && <div>{icon}</div>}
      </div>
      
      <div className="text-2xl font-semibold mb-1">{value}</div>
      
      {change && (
        <div className={`
          text-xs flex items-center
          ${trend === 'up' ? 'text-verve-teal' : 
            trend === 'down' ? 'text-verve-pink' : 
            'text-verve-grey'}
        `}>
          <span className={`
            inline-block mr-1 text-lg
            ${trend === 'up' ? 'transform -rotate-45' : 
              trend === 'down' ? 'transform rotate-45' : ''}
          `}>
            {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'}
          </span>
          <span>{change}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
