import React from 'react';
import { Heart, Code, Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/ggkm3251', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/glenn-mwangi-a52b52218/', label: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://x.com/GlennKamau', label: 'Twitter' },
  ];

  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            <span className="font-bold">Glenn Mwangi</span>
          </div>
          
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Made with <Heart className="h-3 w-3 text-accent" fill="currentColor" /> by Glenn Mwangi
          </p>
        </div>
      </div>
    </footer>
  );
};