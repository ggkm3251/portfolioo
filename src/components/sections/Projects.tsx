import React, { useState } from 'react';
import { projects, Project } from '../../data/projects';
import { Github, ExternalLink, LayoutGrid, Star } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card card-hover group overflow-hidden">
      <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-60 transition-opacity z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {project.featured && (
          <div className="absolute top-2 right-2 bg-accent/90 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 z-20">
            <Star className="h-3 w-3" fill="currentColor" />
            Featured
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      
      <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-3 mt-auto">
        {project.github && (
          <a 
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>
        )}
        
        {project.demo && (
          <a 
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);
  
  return (
    <section id="projects" className="bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">My Projects</h2>
          <p className="text-muted-foreground">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies that I've mastered.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center border border-border rounded-lg p-1 bg-muted/50">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-card text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className="flex items-center gap-1">
                <LayoutGrid className="h-4 w-4" />
                All Projects
              </span>
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'featured' 
                  ? 'bg-card text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                Featured
              </span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/ggkm3251" 
            target="_blank" 
            rel="noreferrer"
            className="btn btn-outline px-6 py-2.5"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};