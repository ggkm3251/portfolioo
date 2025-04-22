interface Skill {
  name: string;
  level: number;
  icon: string;
}

export const frontendSkills: Skill[] = [
  { name: 'HTML/CSS', level: 95, icon: '🌐' },
  { name: 'JavaScript', level: 90, icon: '🟨' },
  { name: 'TypeScript', level: 85, icon: '🔷' },
  { name: 'React', level: 90, icon: '⚛️' },
  { name: 'Vue.js', level: 80, icon: '🟢' },
  { name: 'Tailwind CSS', level: 90, icon: '🎨' },
];

export const backendSkills: Skill[] = [
  { name: 'Node.js', level: 85, icon: '🟩' },
  { name: 'Express', level: 85, icon: '🚂' },
  { name: 'Python', level: 75, icon: '🐍' },
  { name: 'Django', level: 70, icon: '🎯' },
  { name: 'SQL', level: 80, icon: '🗄️' },
  { name: 'MongoDB', level: 75, icon: '🍃' },
];

export const toolsAndOthers: Skill[] = [
  { name: 'Git/GitHub', level: 90, icon: '📊' },
  { name: 'Docker', level: 75, icon: '🐳' },
  { name: 'AWS', level: 70, icon: '☁️' },
  { name: 'CI/CD', level: 75, icon: '🔄' },
  { name: 'RESTful APIs', level: 90, icon: '🔌' },
  { name: 'GraphQL', level: 80, icon: '⚡' },
];