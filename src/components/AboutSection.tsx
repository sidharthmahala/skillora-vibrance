
import React, { useRef, useEffect } from 'react';
import AnimatedCounter from './AnimatedCounter';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
      id="about" 
      ref={sectionRef}
      className="section bg-skillora-dark text-white relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-skillora-purple/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-skillora-blue/10 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      
      <div className="container-skillora relative z-10">
        <div 
          ref={contentRef} 
          className="opacity-0"
          style={{animationDelay: '0.2s'}}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white font-medium text-sm mb-6">
              About Skillora
            </div>
            <h2 className="heading-lg">
              <span className="bg-gradient-to-r from-skillora-blue to-skillora-pink bg-clip-text text-transparent">
                Why Modern Skills Matter
              </span>
            </h2>
            <p className="text-lg text-white/80 mt-6">
              In today's rapidly evolving world, traditional education often falls short. At Skillora, we bridge that gap by teaching the practical, cutting-edge skills that truly matter in the modern economy and digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            <div className="glass-dark rounded-xl p-8 transition-all hover:translate-y-[-8px] hover:shadow-skillora-blue/20 hover:shadow-lg duration-300">
              <h3 className="text-xl font-bold mb-4">Skill-Focused Learning</h3>
              <p className="text-white/70">
                Our curriculum is designed to teach you practical skills you can apply immediately, not just theoretical knowledge.
              </p>
            </div>
            
            <div className="glass-dark rounded-xl p-8 transition-all hover:translate-y-[-8px] hover:shadow-skillora-purple/20 hover:shadow-lg duration-300">
              <h3 className="text-xl font-bold mb-4">Future-Proof Education</h3>
              <p className="text-white/70">
                We continuously update our programs to ensure you're learning the most relevant and in-demand skills for tomorrow's economy.
              </p>
            </div>
            
            <div className="glass-dark rounded-xl p-8 transition-all hover:translate-y-[-8px] hover:shadow-skillora-pink/20 hover:shadow-lg duration-300">
              <h3 className="text-xl font-bold mb-4">Community-Driven</h3>
              <p className="text-white/70">
                Join a vibrant community of learners and professionals who collaborate, share insights, and grow together.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <AnimatedCounter end={10000} suffix="+" />
              <p className="text-white/70 mt-2">Students Empowered</p>
            </div>
            <div>
              <AnimatedCounter end={150} suffix="+" />
              <p className="text-white/70 mt-2">Expert Instructors</p>
            </div>
            <div>
              <AnimatedCounter end={25} suffix="+" />
              <p className="text-white/70 mt-2">Specialized Programs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
