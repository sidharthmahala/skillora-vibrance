
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-light py-3 shadow-md' : 'py-5'
      }`}
    >
      <div className="container-orkast flex justify-between items-center px-6 md:px-12">
        <div className="flex items-center">
          <span className="text-2xl font-poppins font-bold bg-gradient-to-r from-orkast-blue via-orkast-purple to-orkast-pink bg-clip-text text-transparent">
            Orkast
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="font-medium text-foreground hover:text-orkast-blue transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('programs')}
            className="font-medium text-foreground hover:text-orkast-blue transition-colors"
          >
            Programs
          </button>
          <button 
            onClick={() => scrollToSection('why-choose-us')}
            className="font-medium text-foreground hover:text-orkast-blue transition-colors"
          >
            Why Us
          </button>
          <button 
            onClick={() => scrollToSection('join')}
            className="btn-primary"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-foreground" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-light absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container-orkast px-6 py-6 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="font-medium text-foreground hover:text-orkast-blue transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="font-medium text-foreground hover:text-orkast-blue transition-colors py-2"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="font-medium text-foreground hover:text-orkast-blue transition-colors py-2"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('join')}
              className="btn-primary self-start"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
