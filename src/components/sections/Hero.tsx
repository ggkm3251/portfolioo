import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 transform-gpu blur-3xl">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-primary/30 to-secondary/30 opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="absolute top-1/3 left-0 -z-10 transform-gpu blur-3xl">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-secondary/30 to-accent/30 opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      
      <div className="container">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="space-y-2 animate-fade-in">
            <p className="text-primary font-medium">Full Stack Developer</p>
            <h1 className="animate-fade-in animation-delay-200">
              Hello, I'm Glenn Mwangi
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto mt-4 animate-fade-in animation-delay-400">
              I build beautiful, responsive, and user-friendly web applications with modern technologies.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-6 animate-fade-in animation-delay-600">
            <a 
              href="#projects" 
              className="btn btn-primary px-6 py-3"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline px-6 py-3"
            >
              Contact Me
            </a>
          </div>
          
          <a 
            href="#about" 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};