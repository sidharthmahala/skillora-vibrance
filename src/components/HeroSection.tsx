
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const initParallaxEffect = () => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!sectionRef.current) return;
        
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const heroImage = sectionRef.current.querySelector('.hero-image') as HTMLElement;
        const heroBg = sectionRef.current.querySelector('.hero-bg') as HTMLElement;
        
        if (heroImage) {
          heroImage.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
        }
        
        if (heroBg) {
          heroBg.style.transform = `translate(${x * -10}px, ${y * -10}px)`;
        }
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    };
    
    const parallaxCleanup = initParallaxEffect();
    
    return () => {
      if (parallaxCleanup) parallaxCleanup();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center pt-24 overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-bg absolute top-0 right-0 w-full h-full bg-gradient-radial from-skillora-blue/20 via-transparent to-transparent opacity-50"></div>
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-skillora-blue/20 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-skillora-pink/20 filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container-skillora flex flex-col lg:flex-row items-center justify-between relative z-10 px-6">
        <div className="lg:w-1/2 py-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="inline-block px-3 py-1 rounded-full bg-skillora-blue/10 text-skillora-blue font-medium text-sm mb-6">
            The Future of Education is Here
          </div>
          <h1 className="heading-xl">
            <span className="block">Revolutionizing</span>
            <span className="bg-gradient-to-r from-skillora-blue via-skillora-purple to-skillora-pink bg-clip-text text-transparent">
              Education
            </span>
            <span className="block">for the Future!</span>
          </h1>
          <p className="subheading">
            Learn the real-world skills that schools don't teach you. Join thousands of students already transforming their future with Skillora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button 
              onClick={() => document.getElementById('join')?.scrollIntoView({behavior: 'smooth'})}
              className="btn-glow"
            >
              Join the Future of Learning
            </button>
            <button 
              onClick={() => document.getElementById('programs')?.scrollIntoView({behavior: 'smooth'})}
              className="btn-secondary"
            >
              Explore Programs
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 p-6 flex justify-center items-center animate-fade-in" style={{animationDelay: '0.5s'}}>
          <div className="hero-image relative w-full max-w-lg aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-skillora-blue/80 via-skillora-purple/80 to-skillora-pink/80 rounded-2xl opacity-80"></div>
            <img
              src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
              alt="Future of education with digital technology"
              className="w-full h-full object-cover rounded-2xl mix-blend-overlay"
            />
            <div className="absolute inset-0 glass-card rounded-2xl opacity-30"></div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground hover:text-skillora-blue transition-colors animate-float"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
