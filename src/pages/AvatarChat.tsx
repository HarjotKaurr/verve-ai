
import React, { useState, useRef, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import Avatar3D from '@/components/Avatar3D';
import { Send, Mic, Image, PaperclipIcon } from 'lucide-react';

const AvatarChat = () => {
  const [messages, setMessages] = useState<{
    id: number;
    content: string;
    sender: 'user' | 'ai';
    timestamp: Date;
  }[]>([
    {
      id: 1,
      content: "Hello! I'm your personal AI assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Handle sending a new message
  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      content: input,
      sender: 'user' as const,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        content: getAIResponse(input),
        sender: 'ai' as const,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };
  
  // Simple AI response logic (would be replaced with actual AI in a real app)
  const getAIResponse = (userInput: string) => {
    const userInputLower = userInput.toLowerCase();
    
    if (userInputLower.includes('hello') || userInputLower.includes('hi')) {
      return "Hello there! How are you feeling today?";
    }
    if (userInputLower.includes('how are you')) {
      return "I'm functioning optimally! How can I assist you today?";
    }
    if (userInputLower.includes('help')) {
      return "I'm here to help! I can assist with task planning, answer questions, or just chat. What would you like to do?";
    }
    if (userInputLower.includes('schedule') || userInputLower.includes('calendar')) {
      return "Your next scheduled event is a Team Meeting at 2:00 PM. Would you like to see your full calendar?";
    }
    if (userInputLower.includes('goal') || userInputLower.includes('task')) {
      return "You have 3 active goals and 7 tasks for today. Would you like me to help you prioritize them?";
    }
    
    return "I understand. Is there anything specific you'd like to know or discuss?";
  };
  
  // Handle pressing Enter to send message
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };
  
  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <DashboardLayout currentPage="avatar">
      <div className="h-full">
        <div className="glass-panel p-6 mb-6">
          <h1 className="text-2xl font-medium mb-1">
            <span className="text-white">AI </span>
            <span className="text-verve-teal">Twin</span>
          </h1>
          <p className="text-white/70">
            Chat with your personal AI assistant
          </p>
        </div>
        
        <div className="grid grid-cols-12 gap-6">
          {/* Avatar Column */}
          <div className="col-span-12 md:col-span-4">
            <div className="glass-panel p-6 h-[calc(100vh-200px)]">
              <Avatar3D isActive={true} />
            </div>
          </div>
          
          {/* Chat Column */}
          <div className="col-span-12 md:col-span-8">
            <div className="glass-panel p-6 h-[calc(100vh-200px)] flex flex-col">
              <div className="flex-1 overflow-y-auto pr-2 mb-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`
                          max-w-[80%] p-4 rounded-lg
                          ${message.sender === 'user' 
                            ? 'bg-white/10 text-white' 
                            : 'bg-verve-teal/10 text-white border border-verve-teal/30'}
                        `}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-xs font-medium ${message.sender === 'user' ? 'text-white/70' : 'text-verve-teal'}`}>
                            {message.sender === 'user' ? 'You' : 'Verve AI'}
                          </span>
                          <span className="text-xs text-white/50">
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              <div className="flex rounded-md overflow-hidden bg-white/5 border border-white/10">
                <div className="flex items-center px-3 space-x-2">
                  <button className="text-white/50 hover:text-verve-teal transition-colors">
                    <PaperclipIcon size={18} />
                  </button>
                  <button className="text-white/50 hover:text-verve-teal transition-colors">
                    <Image size={18} />
                  </button>
                </div>
                
                <input
                  type="text"
                  className="flex-1 bg-transparent border-none py-3 px-2 outline-none text-white"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                
                <div className="flex pr-2">
                  <button className="p-2 text-white/50 hover:text-verve-blue transition-colors">
                    <Mic size={18} />
                  </button>
                  <button 
                    className="p-2 text-white/50 hover:text-verve-teal transition-colors"
                    onClick={handleSend}
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AvatarChat;
