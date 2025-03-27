
import React, { useRef, useEffect } from 'react';
import ProgramCard from './ProgramCard';
import { CreditCard, Briefcase, Code, Brain, Clock, Zap, Users, MessageSquare, BookOpen } from 'lucide-react';

const ProgramsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const programs = [
    {
      title: "Financial Literacy",
      description: "Learn to manage your finances, invest wisely, and build wealth for the future.",
      icon: <CreditCard size={24} />,
      color: "#3498db"
    },
    {
      title: "Entrepreneurship & Business",
      description: "Discover how to start and scale successful businesses in the modern economy.",
      icon: <Briefcase size={24} />,
      color: "#8e44ad"
    },
    {
      title: "Digital Skills & AI",
      description: "Master the digital tools and AI concepts that are reshaping industries worldwide.",
      icon: <Code size={24} />,
      color: "#ff3399"
    },
    {
      title: "Career Hacking",
      description: "Accelerate your career with strategies for workplace success and advancement.",
      icon: <Brain size={24} />,
      color: "#2ecc71"
    },
    {
      title: "Productivity & Time Management",
      description: "Maximize your efficiency and achieve more in less time with proven systems.",
      icon: <Clock size={24} />,
      color: "#f39c12"
    },
    {
      title: "Biohacking & Optimization",
      description: "Optimize your physical and mental performance through science-based approaches.",
      icon: <Zap size={24} />,
      color: "#1abc9c"
    },
    {
      title: "Communication & Networking",
      description: "Build powerful relationships and communicate effectively in any situation.",
      icon: <Users size={24} />,
      color: "#e74c3c"
    },
    {
      title: "Psychology of Influence",
      description: "Understand the principles of persuasion and ethical influence in business and life.",
      icon: <MessageSquare size={24} />,
      color: "#9b59b6"
    },
    {
      title: "Critical Thinking",
      description: "Develop robust problem-solving skills and logical reasoning abilities.",
      icon: <BookOpen size={24} />,
      color: "#16a085"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && contentRef.current) {
          contentRef.current.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="programs" 
      ref={sectionRef}
      className="section relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-skillora-dark/5 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-skillora-blue/5 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-skillora-purple/5 filter blur-3xl"></div>
      </div>
      
      <div className="container-skillora relative z-10">
        <div 
          ref={contentRef} 
          className="opacity-0"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-skillora-purple/10 text-skillora-purple font-medium text-sm mb-6">
              Our Programs
            </div>
            <h2 className="heading-lg">
              <span className="bg-gradient-to-r from-skillora-blue to-skillora-purple bg-clip-text text-transparent">
                Real-World Skills
              </span>
              <span className="block">for the Modern Age</span>
            </h2>
            <p className="subheading">
              Our curriculum focuses on practical, high-value skills that traditional education overlooks but are essential for success in today's world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                description={program.description}
                icon={program.icon}
                color={program.color}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
