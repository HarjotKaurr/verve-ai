
import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ 
  icon, 
  label, 
  to, 
  isActive = false,
  onClick
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`
        flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300
        ${isActive 
          ? 'bg-verve-teal/20 text-verve-teal border border-verve-teal/30' 
          : 'text-verve-grey hover:bg-white/5 hover:text-white'}
      `}
    >
      <div className={`
        ${isActive ? 'text-verve-teal' : 'text-verve-grey'}
      `}>
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
      
      {isActive && (
        <div className="ml-auto h-2 w-2 rounded-full bg-verve-teal animate-pulse"></div>
      )}
    </Link>
  );
};

export default NavItem;
