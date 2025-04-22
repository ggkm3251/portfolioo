export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, shopping cart, and payment processing.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A task management application with features like task creation, categorization, due dates, and progress tracking. Built with Vue.js and Firebase.",
    image: "https://images.pexels.com/photos/8391440/pexels-photo-8391440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "A real-time chat application with private messaging and group chat functionality. Built with Socket.io, Express, and React.",
    image: "https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "Socket.io", "Express"],
    github: "https://github.com",
    featured: false
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather and forecasts for multiple locations. Uses OpenWeatherMap API and React.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "OpenWeatherMap API", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my projects and skills. Built with React and Tailwind CSS.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "A full-stack blog platform with features like post creation, comments, and user profiles. Built with Next.js and MongoDB.",
    image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    featured: false
  }
];