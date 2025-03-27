
import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  quote, 
  image,
  delay = 0
}) => {
  return (
    <div 
      className="opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="glass-dark rounded-xl p-6 h-full flex flex-col">
        <div className="mb-6">
          <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-skillora-blue/70">
            <path d="M13.44 36C9.312 36 6.048 34.704 3.648 32.112C1.248 29.52 0.048 26.064 0.048 21.744C0.048 17.232 1.392 13.008 4.08 9.072C6.864 5.04 10.368 1.872 14.592 0.576L18.576 5.904C15.12 7.2 12.384 9.12 10.368 11.664C8.352 14.208 7.344 16.8 7.344 19.44C7.344 20.256 7.44 20.928 7.632 21.456C8.16 20.832 9.12 20.304 10.512 19.872C11.904 19.344 13.296 19.08 14.688 19.08C17.376 19.08 19.632 19.92 21.456 21.6C23.28 23.28 24.192 25.632 24.192 28.656C24.192 31.536 23.232 33.792 21.312 35.424C19.488 35.808 16.8 36 13.44 36ZM34.368 36C30.24 36 26.976 34.704 24.576 32.112C22.176 29.52 20.976 26.064 20.976 21.744C20.976 17.232 22.32 13.008 25.008 9.072C27.792 5.04 31.296 1.872 35.52 0.576L39.504 5.904C36.048 7.2 33.312 9.12 31.296 11.664C29.28 14.208 28.272 16.8 28.272 19.44C28.272 20.256 28.368 20.928 28.56 21.456C29.088 20.832 30.048 20.304 31.44 19.872C32.832 19.344 34.224 19.08 35.616 19.08C38.304 19.08 40.56 19.92 42.384 21.6C44.208 23.28 45.12 25.632 45.12 28.656C45.12 31.536 44.16 33.792 42.24 35.424C40.416 35.808 37.728 36 34.368 36Z" fill="currentColor"/>
          </svg>
        </div>
        
        <p className="text-white/80 flex-grow mb-6 text-lg">
          "{quote}"
        </p>
        
        <div className="flex items-center mt-auto">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-white/60 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
