import React from 'react';
import { frontendSkills, backendSkills, toolsAndOthers } from '../../data/skills';

interface SkillBarProps {
  name: string;
  level: number;
  icon: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, icon }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium flex items-center gap-2">
          <span>{icon}</span> {name}
        </span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%`, transitionDelay: '300ms' }}
        ></div>
      </div>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: SkillBarProps[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">My Skills</h2>
          <p className="text-muted-foreground">
            I've acquired a diverse range of skills throughout my journey as a developer. Here's a showcase of my technical expertise and proficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Backend Development" skills={backendSkills} />
          <SkillCategory title="Tools & Others" skills={toolsAndOthers} />
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
          {[
            "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", 
            "Node.js", "Express", "MongoDB", "SQL", "Git", "AWS"
          ].map((tech) => (
            <div 
              key={tech}
              className="flex items-center justify-center p-4 border border-border rounded-lg bg-card text-center hover:border-primary/50 transition-colors duration-300"
            >
              <span className="text-sm font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};