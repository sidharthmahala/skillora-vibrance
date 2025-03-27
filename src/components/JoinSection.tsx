
import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const JoinSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for joining! Check your email for next steps.');
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section 
      id="join" 
      ref={sectionRef}
      className="section relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orkast-purple/5 via-orkast-blue/5 to-orkast-pink/5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orkast-blue/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-orkast-pink/10 filter blur-3xl"></div>
      </div>
      
      <div className="container-orkast relative z-10">
        <div 
          ref={contentRef} 
          className="opacity-0 max-w-4xl mx-auto"
        >
          <div className="glass-light rounded-2xl p-10 border border-white/20 shadow-xl relative overflow-hidden">
            {/* Geometric accents */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-orkast-blue/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orkast-purple/10 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-block px-3 py-1 rounded-full bg-orkast-pink/10 text-orkast-pink font-medium text-sm mb-6">
                  Join The Movement
                </div>
                <h2 className="heading-lg">
                  <span className="bg-gradient-to-r from-orkast-blue to-orkast-purple bg-clip-text text-transparent">
                    Ready to Transform Your Future?
                  </span>
                </h2>
                <p className="subheading max-w-2xl mx-auto">
                  Join thousands of students already learning the skills that will define tomorrow's success. Get started today with a free account.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-orkast-blue/50 transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button 
                    type="submit" 
                    className="absolute right-2 top-2 bottom-2 px-5 rounded-md bg-gradient-to-r from-orkast-blue to-orkast-purple text-white transition-all hover:shadow-lg disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <ArrowRight size={20} />
                    )}
                  </button>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  By joining, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>

              <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
                <div className="flex items-center bg-white/50 px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm font-medium">No Credit Card Required</span>
                </div>
                <div className="flex items-center bg-white/50 px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm font-medium">Instant Access</span>
                </div>
                <div className="flex items-center bg-white/50 px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm font-medium">Cancel Anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
