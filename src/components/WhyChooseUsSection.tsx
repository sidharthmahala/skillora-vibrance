
import React, { useRef, useEffect } from 'react';
import ComparisonChart from './ComparisonChart';
import TestimonialCard from './TestimonialCard';

const WhyChooseUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Engineer",
      quote: "Orkast completely changed my career trajectory. I went from knowing basic coding to landing a job at a top tech company in just 6 months.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Sarah Williams",
      role: "Entrepreneur",
      quote: "The business program gave me the confidence and skills to launch my startup. The community of fellow entrepreneurs continues to be invaluable.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Michael Chen",
      role: "Digital Marketer",
      quote: "What sets Orkast apart is how they teach the mindset behind the skills. I've tried other platforms, but none come close to this level of depth.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
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
      id="why-choose-us" 
      ref={sectionRef}
      className="section bg-orkast-dark text-white relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-orkast-blue/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-orkast-purple/10 to-transparent"></div>
      </div>
      
      <div className="container-orkast relative z-10">
        <div 
          ref={contentRef} 
          className="opacity-0"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white font-medium text-sm mb-6">
              Why Choose Us
            </div>
            <h2 className="heading-lg">
              <span className="bg-gradient-to-r from-orkast-blue to-orkast-pink bg-clip-text text-transparent">
                The Orkast Difference
              </span>
            </h2>
            <p className="text-lg text-white/80 mt-6">
              We don't just teach differently—we teach what matters. See how our approach to education stands apart from traditional institutions.
            </p>
          </div>

          <div className="mb-24">
            <ComparisonChart />
          </div>

          <div className="text-center mb-12">
            <h3 className="heading-md">What Our Students Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                image={testimonial.image}
                delay={0.2 * index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
