
import React, { useRef, useEffect } from 'react';
import ProgramCard from './ProgramCard';
import { CreditCard, Briefcase, Code, Brain, Clock, Zap, Users, MessageSquare, BookOpen, Video, Share2, Film } from 'lucide-react';

const ProgramsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

const programs = [
    {
        title: "Financial Mastery & Wealth Building",
        description: "Learn to manage money, invest wisely, and build long-term wealth.",
        icon: <CreditCard size={24} />,
        color: "#3498db"
    },
    {
        title: "Entrepreneurship & Business Growth",
        description: "Discover how to start, scale, and sustain successful businesses.",
        icon: <Briefcase size={24} />,
        color: "#8e44ad"
    },
    {
        title: "AI & Digital Skills for the Future",
        description: "Master AI tools, automation, and essential digital skills for career growth.",
        icon: <Code size={24} />,
        color: "#ff5733"
    },
    {
        title: "Career Acceleration & Workplace Success",
        description: "Strategies to land better jobs, get promotions, and thrive in any career.",
        icon: <Brain size={24} />,
        color: "#2ecc71"
    },
    {
        title: "Productivity & High-Performance Systems",
        description: "Maximize efficiency, manage time better, and achieve more with less effort.",
        icon: <Clock size={24} />,
        color: "#f1c40f"
    },
    {
        title: "Biohacking & Peak Performance",
        description: "Optimize physical and mental performance using science-backed techniques.",
        icon: <Zap size={24} />,
        color: "#1abc9c"
    },
    {
        title: "Networking, Influence & Communication",
        description: "Build powerful relationships and master persuasion techniques for success.",
        icon: <Users size={24} />,
        color: "#e74c3c"
    },
    {
        title: "Content Creation & Personal Branding",
        description: "Grow your audience on YouTube, Instagram, and TikTok while monetizing your brand.",
        icon: <Video size={24} />,
        color: "#9b59b6"
    },
    {
        title: "Social Media & Viral Growth Strategies",
        description: "Learn proven tactics to gain followers, increase engagement, and go viral.",
        icon: <Share2 size={24} />,
        color: "#e67e22"
    },
    {
        title: "Video Editing & Professional Content Production",
        description: "Create high-quality, engaging videos for YouTube and social media.",
        icon: <Film size={24} />,
        color: "#d35400"
    },
    {
        title: "Psychology of Influence & Persuasion",
        description: "Understand the principles behind ethical persuasion in business and life.",
        icon: <MessageSquare size={24} />,
        color: "#8e44ad"
    },
    {
        title: "Critical Thinking & Problem-Solving",
        description: "Develop robust problem-solving skills and logical reasoning abilities.",
        icon: <BookOpen size={24} />,
        color: "#16a085"
    }
];


  useEffect(() => {
    const currentContentRef = contentRef.current; // Store the current value of the ref
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && currentContentRef) {
          currentContentRef.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
  
    if (currentContentRef) {
      observer.observe(currentContentRef);
    }
  
    return () => {
      if (currentContentRef) {
        observer.unobserve(currentContentRef);
      }
      observer.disconnect(); // Properly disconnect the observer
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
