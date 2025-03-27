
import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonChart: React.FC = () => {
  const comparisons = [
    {
      feature: "Focus on practical skills",
      skillora: true,
      traditional: false
    },
    {
      feature: "Industry-relevant curriculum",
      skillora: true,
      traditional: false
    },
    {
      feature: "Adaptable to market changes",
      skillora: true,
      traditional: false
    },
    {
      feature: "Learn at your own pace",
      skillora: true,
      traditional: false
    },
    {
      feature: "Direct access to experts",
      skillora: true,
      traditional: false
    },
    {
      feature: "Community of like-minded learners",
      skillora: true,
      traditional: false
    },
    {
      feature: "Focuses on future technologies",
      skillora: true,
      traditional: false
    }
  ];

  return (
    <div className="glass-dark rounded-xl overflow-hidden">
      <div className="grid grid-cols-3">
        <div className="p-6 bg-transparent"></div>
        <div className="p-6 bg-skillora-blue/20 border-b border-white/10 text-center">
          <h3 className="font-bold text-lg">Skillora</h3>
        </div>
        <div className="p-6 bg-skillora-dark/50 border-b border-white/10 text-center">
          <h3 className="font-bold text-lg">Traditional Education</h3>
        </div>
      </div>

      {comparisons.map((item, index) => (
        <div key={index} className="grid grid-cols-3 border-b border-white/10 last:border-b-0">
          <div className="p-4 md:p-6 flex items-center font-medium">
            {item.feature}
          </div>
          <div className="p-4 md:p-6 flex items-center justify-center bg-skillora-blue/10">
            <div className="w-8 h-8 rounded-full bg-skillora-blue/20 flex items-center justify-center">
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
