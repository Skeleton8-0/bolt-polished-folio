// Portfolio data - centralized configuration
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Full-Stack Developer",
    subtitle: "Building modern web applications that deliver exceptional user experiences and drive business success",
    email: "your.email@example.com",
    location: "Your City, Country",
    resume: "/resume.pdf", // Add your resume to public folder
  },
  
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "mailto:your.email@example.com",
  },

  skills: [
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "GraphQL", category: "API" },
    { name: "Next.js", category: "Framework" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Git", category: "Version Control" },
    { name: "Jest", category: "Testing" },
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "/projects/ecommerce.jpg", // Add to public/projects/
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://your-ecommerce-demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/projects/taskmanager.jpg",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-taskmanager-demo.com",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/projects/weather.jpg",
      technologies: ["Vue.js", "TypeScript", "OpenWeather API", "Chart.js"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://your-weather-demo.com",
      featured: false,
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, SEO optimization, and content management system for writers and content creators.",
      image: "/projects/blog.jpg",
      technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/yourusername/blog-platform",
      liveUrl: "https://your-blog-demo.com",
      featured: false,
    },
  ],

  about: {
    bio: `I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference. I specialize in building scalable web applications using modern technologies like React, Node.js, and cloud platforms.

When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or exploring the latest in web development trends. I believe in writing clean, maintainable code and creating user experiences that truly matter.`,
    
    highlights: [
      "5+ years of professional development experience",
      "Led development teams on 10+ successful projects",
      "Open source contributor with 50+ GitHub repositories",
      "Speaker at local tech meetups and conferences",
    ]
  }
};

export type Project = typeof portfolioData.projects[0];
export type Skill = typeof portfolioData.skills[0];