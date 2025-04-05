
import React, { useState } from 'react';
import { LayoutDashboard, User, Target, LineChart, MessageCircle, Settings, Bell } from 'lucide-react';
import NavItem from './NavItem';
import BackgroundParticles from './BackgroundParticles';

interface DashboardLayoutProps {
  children?: React.ReactNode;
  currentPage?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, currentPage = 'dashboard' }) => {
  const [notifications, setNotifications] = useState(3);

  const navItems = [
    { icon: <LayoutDashboard size={18} />, label: 'Dashboard', to: '/', id: 'dashboard' },
    { icon: <User size={18} />, label: 'Avatar', to: '/avatar', id: 'avatar' },
    { icon: <LineChart size={18} />, label: 'Insights', to: '/insights', id: 'insights' },
    { icon: <Target size={18} />, label: 'Goals', to: '/goals', id: 'goals' },
    { icon: <MessageCircle size={18} />, label: 'Chat', to: '/chat', id: 'chat' },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Background particles */}
      <BackgroundParticles />
      
      {/* Header */}
      <header className="glass-panel fixed top-4 left-4 right-4 z-10 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-2 text-2xl font-bold bg-gradient-to-r from-verve-teal to-verve-lilac bg-clip-text text-transparent">
            Verve<span className="text-white">.ai</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
            <Bell size={18} className="text-verve-grey" />
            {notifications > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-verve-pink rounded-full"></span>
            )}
          </button>
          
          <button className="w-8 h-8 rounded-full bg-gradient-to-b from-verve-teal/30 to-verve-lilac/30 flex items-center justify-center">
            <span className="text-sm font-medium">JS</span>
          </button>
        </div>
      </header>
      
      {/* Sidebar Navigation */}
      <aside className="glass-panel fixed top-20 left-4 bottom-4 w-56 z-10 p-4 flex flex-col">
        <nav className="flex-1 mt-2 space-y-1">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              to={item.to}
              isActive={currentPage === item.id}
            />
          ))}
        </nav>
        
        <div className="pt-4 mt-4 border-t border-white/10">
          <NavItem
            icon={<Settings size={18} />}
            label="Settings"
            to="/settings"
            isActive={currentPage === 'settings'}
          />
        </div>
      </aside>
      
      {/* Main content */}
      <main className="pt-20 pb-4 pl-64 pr-4 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
