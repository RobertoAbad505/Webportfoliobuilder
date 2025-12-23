import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1-demo.com',
      image: '🛒',
    },
    {
      title: 'Task Management App',
      description:
        'Real-time collaborative task management application with drag-and-drop functionality and team features.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2-demo.com',
      image: '📋',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Interactive weather dashboard with location search, forecasts, and beautiful data visualizations.',
      technologies: ['React', 'OpenWeather API', 'Recharts', 'CSS'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3-demo.com',
      image: '🌤️',
    },
    {
      title: 'AI Content Generator',
      description:
        'AI-powered content generation tool using OpenAI API for creating blog posts, social media content, and more.',
      technologies: ['Python', 'FastAPI', 'OpenAI', 'React'],
      github: 'https://github.com/yourusername/project4',
      live: 'https://project4-demo.com',
      image: '🤖',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-4 text-white">Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-950/50 backdrop-blur-lg border-gray-800 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 border border-gray-800">
                    <motion.span
                      className="text-7xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.image}
                    </motion.span>
                  </div>
                  <CardTitle className="text-2xl text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className="border-gray-700 text-gray-300 hover:bg-gray-800">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}