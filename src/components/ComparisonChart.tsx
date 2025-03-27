
import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonChart: React.FC = () => {
  const comparisons = [
    {
      feature: "Focus on practical skills",
      orkast: true,
      traditional: false
    },
    {
      feature: "Industry-relevant curriculum",
      orkast: true,
      traditional: false
    },
    {
      feature: "Adaptable to market changes",
      orkast: true,
      traditional: false
    },
    {
      feature: "Learn at your own pace",
      orkast: true,
      traditional: false
    },
    {
      feature: "Direct access to experts",
      orkast: true,
      traditional: false
    },
    {
      feature: "Community of like-minded learners",
      orkast: true,
      traditional: false
    },
    {
      feature: "Focuses on future technologies",
      orkast: true,
      traditional: false
    }
  ];

  return (
    <div className="glass-dark rounded-xl overflow-hidden">
      <div className="grid grid-cols-3">
        <div className="p-6 bg-transparent"></div>
        <div className="p-6 bg-orkast-blue/20 border-b border-white/10 text-center">
          <h3 className="font-bold text-lg">Orkast</h3>
        </div>
        <div className="p-6 bg-orkast-dark/50 border-b border-white/10 text-center">
          <h3 className="font-bold text-lg">Traditional Education</h3>
        </div>
      </div>

      {comparisons.map((item, index) => (
        <div key={index} className="grid grid-cols-3 border-b border-white/10 last:border-b-0">
          <div className="p-4 md:p-6 flex items-center font-medium">
            {item.feature}
          </div>
          <div className="p-4 md:p-6 flex items-center justify-center bg-orkast-blue/10">
            <div className="w-8 h-8 rounded-full bg-orkast-blue/20 flex items-center justify-center">
              <Check size={18} className="text-white" />
            </div>
          </div>
          <div className="p-4 md:p-6 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <X size={18} className="text-white/70" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComparisonChart;
