
import React, { useState, useEffect } from 'react';
import { Heart, Clock, BrainCircuit, Star } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import Avatar3D from '@/components/Avatar3D';
import TimeWeave from '@/components/TimeWeave';
import PatternRadar from '@/components/PatternRadar';
import StatCard from '@/components/StatCard';
import QuickAction from '@/components/QuickAction';

// Sample data for our components
const timelineItems = [
  { 
    id: 1, 
    time: '08:30 AM', 
    title: 'Morning Journal', 
    status: 'completed' as const,
    description: 'You completed your morning reflection'
  },
  { 
    id: 2, 
    time: 'Now', 
    title: 'Daily Planning', 
    status: 'in-progress' as const,
    description: 'Organizing your priorities for today'
  },
  { 
    id: 3, 
    time: '11:00 AM', 
    title: 'Focus Session', 
    status: 'upcoming' as const,
    description: '45 minutes deep work on Project X'
  },
  { 
    id: 4, 
    time: '01:30 PM', 
    title: 'Team Meeting', 
    status: 'upcoming' as const,
    description: 'Quarterly planning with design team'
  },
  { 
    id: 5, 
    time: '03:00 PM', 
    title: 'Learning Block', 
    status: 'upcoming' as const,
    description: 'Continue course on new technologies'
  },
];

const habitData = [
  { label: 'Sleep', value: 8, color: '#00F0FF' },
  { label: 'Exercise', value: 6, color: '#B98EFF' },
  { label: 'Work', value: 9, color: '#FF4081' },
  { label: 'Learning', value: 7, color: '#00F0FF' },
  { label: 'Social', value: 5, color: '#B98EFF' },
  { label: 'Meditation', value: 4, color: '#FF4081' },
];

const quickActions = [
  { label: 'New Task', variant: 'primary' as const },
  { label: 'Schedule Meeting', variant: 'secondary' as const },
  { label: 'Add Note', variant: 'outline' as const },
  { label: 'Ask Verve', variant: 'primary' as const },
];

const Index = () => {
  const [isAIActive, setIsAIActive] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Set avatar to active state after a delay for demo effect
    const timeout = setTimeout(() => {
      setIsAIActive(true);
    }, 2000);
    
    // Generate greeting based on time of day
    const hour = new Date().getHours();
    let newGreeting = '';
    
    if (hour < 12) newGreeting = 'Good Morning';
    else if (hour < 18) newGreeting = 'Good Afternoon';
    else newGreeting = 'Good Evening';
    
    setGreeting(newGreeting);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <DashboardLayout currentPage="dashboard">
      <div className="h-full">
        {/* Welcome Header */}
        <div className="glass-panel p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                <span className="text-glow">{greeting},</span> User
              </h1>
              <p className="text-verve-grey">
                Today is <span className="text-white">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
              </p>
            </div>
            <div className="flex space-x-2">
              {quickActions.map((action, index) => (
                <QuickAction 
                  key={index} 
                  label={action.label} 
                  variant={action.variant} 
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          {/* Left Column - Avatar */}
          <div className="col-span-12 md:col-span-3">
            <div className="glass-panel h-[400px] p-6">
              <Avatar3D isActive={isAIActive} />
            </div>
          </div>
          
          {/* Center Column - Timeline */}
          <div className="col-span-12 md:col-span-5">
            <div className="glass-panel h-[400px] p-6">
              <TimeWeave items={timelineItems} />
            </div>
          </div>
          
          {/* Right Column - Pattern Radar */}
          <div className="col-span-12 md:col-span-4">
            <div className="glass-panel h-[400px] p-6">
              <PatternRadar habits={habitData} />
            </div>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <StatCard 
              title="Focus Score" 
              value="87%" 
              change="+12%" 
              trend="up" 
              icon={<BrainCircuit size={18} className="text-verve-teal" />}
            />
          </div>
          <div className="col-span-12 md:col-span-3">
            <StatCard 
              title="Sleep Quality" 
              value="92%" 
              change="+5%" 
              trend="up" 
              icon={<Clock size={18} className="text-verve-lilac" />}
            />
          </div>
          <div className="col-span-12 md:col-span-3">
            <StatCard 
              title="Stress Level" 
              value="Low" 
              change="-18%" 
              trend="down" 
              icon={<Heart size={18} className="text-verve-pink" />}
            />
          </div>
          <div className="col-span-12 md:col-span-3">
            <StatCard 
              title="Goal Progress" 
              value="68%" 
              change="On Track" 
              trend="neutral" 
              icon={<Star size={18} className="text-verve-lilac" />}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
