
import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  title, 
  description, 
  icon,
  color,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="opacity-0 animate-fade-in card-hover rounded-xl overflow-hidden"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`h-full glass-light border border-gray-200/50 rounded-xl p-6 relative overflow-hidden`}>
        {/* Background Gradient */}
        <div 
          className={`absolute inset-0 opacity-0 transition-opacity duration-700 ${isHovered ? 'opacity-10' : ''}`} 
          style={{ background: `linear-gradient(135deg, ${color}40, transparent)` }}
        ></div>
        
        {/* Glow effect on hover */}
        <div 
          className={`absolute -inset-1 rounded-xl opacity-0 transition-opacity duration-700 blur-xl ${isHovered ? 'opacity-20' : ''}`} 
          style={{ background: color }}
        ></div>
        
        <div className="relative z-10">
          <div 
            className="w-14 h-14 mb-5 rounded-lg flex items-center justify-center text-white"
            style={{ background: color }}
          >
            {icon}
          </div>
          
          <h3 className="text-xl font-bold mb-3 transition-transform duration-300">
            {title}
          </h3>
          
          <p className="text-muted-foreground">
            {description}
          </p>
          
          <div 
            className={`w-full h-1 rounded-full mt-6 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-30'}`}
            style={{ background: color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
