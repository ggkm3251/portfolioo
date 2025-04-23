import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-card">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="relative">
                About Me
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary"></span>
              </h2>
            </div>
            
            <p className="text-lg">
              I'm a passionate Full Stack Developer with expertise in creating clean, efficient, and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I bring ideas to life with code.
            </p>
            
            <p>
              My journey in web development started 5 years ago, and since then, I've worked on various projects ranging from small business websites to complex web applications. I'm constantly learning and adapting to new technologies to stay ahead in this ever-evolving field.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                <span>Front-end Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                <span>Back-end Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                <span>Database Management</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                <span>UI/UX Design</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/portfolioo/Glenn_Mwangi_CV.pdf"
                className="btn btn-primary px-6 py-2.5 flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/ggkm3251"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-colors hover:bg-muted-foreground/10 hover:text-foreground"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/glenn-mwangi-a52b52218/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-colors hover:bg-muted-foreground/10 hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:glennkamau2@gmail.com"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-colors hover:bg-muted-foreground/10 hover:text-foreground"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden border-2 border-primary/20">
              <img 
                src="https://i.imgur.com/oG3zZ8u.jpeg" 
                alt="Glenn Mwangi" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-4 border border-border rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};