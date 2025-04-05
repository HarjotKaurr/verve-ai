
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Calendar } from '@/components/ui/calendar';

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Sample tasks data
  const scheduledTasks = [
    { date: new Date(), title: 'Team Meeting', time: '10:30 AM', duration: '1h', category: 'work' },
    { date: new Date(), title: 'Project Review', time: '2:00 PM', duration: '45m', category: 'work' },
    { date: new Date(Date.now() + 86400000), title: 'Doctor Appointment', time: '9:00 AM', duration: '1h', category: 'personal' },
    { date: new Date(Date.now() + 172800000), title: 'Client Call', time: '11:00 AM', duration: '30m', category: 'work' },
  ];
  
  // Filter tasks for the selected date
  const tasksForSelectedDate = scheduledTasks.filter(task => 
    date && 
    task.date.getDate() === date.getDate() && 
    task.date.getMonth() === date.getMonth() && 
    task.date.getFullYear() === date.getFullYear()
  );

  // Function to get category color
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'work': return 'border-verve-blue';
      case 'personal': return 'border-verve-pink';
      default: return 'border-verve-teal';
    }
  };
  
  return (
    <DashboardLayout currentPage="calendar">
      <div className="h-full">
        <div className="glass-panel p-6 mb-6">
          <h1 className="text-2xl font-medium mb-1">
            <span className="text-white">Your </span>
            <span className="text-verve-teal">Calendar</span>
          </h1>
          <p className="text-white/70">
            View and manage your scheduled tasks and appointments
          </p>
        </div>
        
        <div className="grid grid-cols-12 gap-6">
          {/* Calendar */}
          <div className="col-span-12 md:col-span-8">
            <div className="glass-panel p-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <Calendar 
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="mx-auto pointer-events-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Tasks for selected date */}
          <div className="col-span-12 md:col-span-4">
            <div className="glass-panel p-6 h-full">
              <h2 className="text-lg font-medium text-white mb-4">
                {date ? (
                  <span>
                    Tasks for {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                  </span>
                ) : 'Select a date'}
              </h2>
              
              {tasksForSelectedDate.length > 0 ? (
                <div className="space-y-3">
                  {tasksForSelectedDate.map((task, index) => (
                    <div 
                      key={index}
                      className={`glass-card p-3 border-l-2 ${getCategoryColor(task.category)}`}
                    >
                      <div className="font-medium text-white">{task.title}</div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">{task.time}</span>
                        <span className="text-white/50">{task.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-white/50 text-center py-8">
                  No tasks scheduled for this day
                </div>
              )}
              
              <button className="mt-4 w-full bg-white/10 hover:bg-white/15 text-white py-2 rounded-md transition-colors">
                + Add New Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CalendarPage;
