
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { BarChart, LineChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Brain, Moon, Zap, HeartPulse } from 'lucide-react';

const InsightsPage = () => {
  // Sample sleep data
  const sleepData = [
    { day: 'Mon', hours: 7.5, quality: 85 },
    { day: 'Tue', hours: 6.2, quality: 70 },
    { day: 'Wed', hours: 8.0, quality: 90 },
    { day: 'Thu', hours: 7.8, quality: 88 },
    { day: 'Fri', hours: 5.5, quality: 60 },
    { day: 'Sat', hours: 9.0, quality: 95 },
    { day: 'Sun', hours: 8.5, quality: 92 },
  ];

  // Sample productivity data
  const productivityData = [
    { time: '8am', focus: 60, energy: 80 },
    { time: '10am', focus: 90, energy: 95 },
    { time: '12pm', focus: 75, energy: 70 },
    { time: '2pm', focus: 60, energy: 55 },
    { time: '4pm', focus: 80, energy: 65 },
    { time: '6pm', focus: 65, energy: 50 },
  ];

  // Sample stress data
  const stressData = [
    { date: 'Apr 1', level: 65 },
    { date: 'Apr 2', level: 45 },
    { date: 'Apr 3', level: 55 },
    { date: 'Apr 4', level: 40 },
    { date: 'Apr 5', level: 30 },
    { date: 'Apr 6', level: 35 },
    { date: 'Apr 7', level: 25 },
  ];
  
  return (
    <DashboardLayout currentPage="insights">
      <div className="h-full">
        <div className="glass-panel p-6 mb-6">
          <h1 className="text-2xl font-medium mb-1">
            <span className="text-white">Your </span>
            <span className="text-verve-teal">Insights</span>
          </h1>
          <p className="text-white/70">
            Analytics and tracking to help you optimize your performance
          </p>
        </div>
        
        <div className="grid grid-cols-12 gap-6 mb-6">
          {/* Sleep Analysis */}
          <div className="col-span-12 md:col-span-6">
            <div className="glass-panel p-6">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                <Moon size={18} className="mr-2 text-verve-blue" />
                <span>Sleep Analysis</span>
              </h2>
              
              <div className="bg-white/5 rounded-lg p-4" style={{ height: '280px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sleepData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                    <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '4px',
                        color: 'white',
                      }}
                    />
                    <Bar dataKey="hours" fill="#536DFE" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="bg-white/5 p-3 rounded-lg">
                  <div className="text-xs text-white/50 mb-1">Avg Hours</div>
                  <div className="text-xl font-medium text-white">7.5</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg">
                  <div className="text-xs text-white/50 mb-1">Avg Quality</div>
                  <div className="text-xl font-medium text-verve-blue">82%</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg">
                  <div className="text-xs text-white/50 mb-1">Trend</div>
                  <div className="text-xl font-medium text-verve-teal">+5%</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Productivity Tracking */}
          <div className="col-span-12 md:col-span-6">
            <div className="glass-panel p-6">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                <Zap size={18} className="mr-2 text-verve-teal" />
                <span>Productivity Tracking</span>
              </h2>
              
              <div className="bg-white/5 rounded-lg p-4" style={{ height: '280px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={productivityData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                    <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '4px',
                        color: 'white',
                      }}
                    />
                    <Area type="monotone" dataKey="focus" stroke="#00F0FF" fill="#00F0FF" fillOpacity={0.2} />
                    <Area type="monotone" dataKey="energy" stroke="#FF4081" fill="#FF4081" fillOpacity={0.1} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="bg-white/5 p-3 rounded-lg">
                  <div className="text-xs text-white/50 mb-1">Peak Focus</div>
                  <div className="text-xl font-medium text-verve-teal">10am</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg">
                  <div className="text-xs text-white/50 mb-1">Avg Focus</div>
                  <div className="text-xl font-medium text-white">72%</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg">
                  <div className="text-xs text-white/50 mb-1">Productivity</div>
                  <div className="text-xl font-medium text-verve-lime">High</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-6">
          {/* Stress Levels */}
          <div className="col-span-12 md:col-span-6">
            <div className="glass-panel p-6">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                <HeartPulse size={18} className="mr-2 text-verve-pink" />
                <span>Stress Levels</span>
              </h2>
              
              <div className="bg-white/5 rounded-lg p-4" style={{ height: '280px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stressData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                    <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '4px',
                        color: 'white',
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="level" 
                      stroke="#FF4081" 
                      fill="#FF4081" 
                      fillOpacity={0.2} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="bg-white/5 p-3 rounded-lg">
                  <div className="text-xs text-white/50 mb-1">Current</div>
                  <div className="text-xl font-medium text-white">Low</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg">
                  <div className="text-xs text-white/50 mb-1">Weekly Avg</div>
                  <div className="text-xl font-medium text-verve-pink">42%</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg">
                  <div className="text-xs text-white/50 mb-1">Trend</div>
                  <div className="text-xl font-medium text-verve-teal">-15%</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cognitive Performance */}
          <div className="col-span-12 md:col-span-6">
            <div className="glass-panel p-6">
              <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                <Brain size={18} className="mr-2 text-verve-lime" />
                <span>Cognitive Performance</span>
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="glass-card p-4">
                  <div className="text-xs text-white/50 mb-2">Focus Score</div>
                  <div className="flex items-end">
                    <div className="text-2xl font-medium text-verve-teal">92</div>
                    <div className="text-xs text-verve-teal ml-1 mb-1">/ 100</div>
                  </div>
                  
                  {/* Mini line visualization */}
                  <div className="mt-3 flex items-end space-x-1">
                    {[40, 60, 75, 65, 85, 92].map((value, index) => (
                      <div 
                        key={index} 
                        className="w-4 bg-verve-teal/30" 
                        style={{ 
                          height: `${value * 0.4}px`,
                          backgroundColor: index === 5 ? 'rgb(0, 240, 255)' : 'rgba(0, 240, 255, 0.3)'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="glass-card p-4">
                  <div className="text-xs text-white/50 mb-2">Memory</div>
                  <div className="flex items-end">
                    <div className="text-2xl font-medium text-verve-blue">83</div>
                    <div className="text-xs text-verve-blue ml-1 mb-1">/ 100</div>
                  </div>
                  
                  {/* Mini line visualization */}
                  <div className="mt-3 flex items-end space-x-1">
                    {[65, 70, 75, 83, 80, 83].map((value, index) => (
                      <div 
                        key={index} 
                        className="w-4" 
                        style={{ 
                          height: `${value * 0.4}px`,
                          backgroundColor: index === 5 ? 'rgb(83, 109, 254)' : 'rgba(83, 109, 254, 0.3)'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4">
                  <div className="text-xs text-white/50 mb-2">Creativity</div>
                  <div className="flex items-end">
                    <div className="text-2xl font-medium text-verve-pink">79</div>
                    <div className="text-xs text-verve-pink ml-1 mb-1">/ 100</div>
                  </div>
                  
                  {/* Mini line visualization */}
                  <div className="mt-3 flex items-end space-x-1">
                    {[50, 65, 70, 72, 75, 79].map((value, index) => (
                      <div 
                        key={index} 
                        className="w-4" 
                        style={{ 
                          height: `${value * 0.4}px`,
                          backgroundColor: index === 5 ? 'rgb(255, 64, 129)' : 'rgba(255, 64, 129, 0.3)'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="glass-card p-4">
                  <div className="text-xs text-white/50 mb-2">Problem Solving</div>
                  <div className="flex items-end">
                    <div className="text-2xl font-medium text-verve-lime">87</div>
                    <div className="text-xs text-verve-lime ml-1 mb-1">/ 100</div>
                  </div>
                  
                  {/* Mini line visualization */}
                  <div className="mt-3 flex items-end space-x-1">
                    {[70, 75, 80, 82, 85, 87].map((value, index) => (
                      <div 
                        key={index} 
                        className="w-4" 
                        style={{ 
                          height: `${value * 0.4}px`,
                          backgroundColor: index === 5 ? 'rgb(198, 255, 0)' : 'rgba(198, 255, 0, 0.3)'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InsightsPage;
