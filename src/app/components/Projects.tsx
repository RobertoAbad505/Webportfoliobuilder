import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { TechIcon } from './TechIcon';

export function Projects() {
  const { data } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-4 text-white">{data.projects.title}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="bg-gray-950/50 backdrop-blur-lg border-gray-800 hover:shadow-lg hover:shadow-purple-500/10 transition-all h-full flex flex-col overflow-hidden">
                {/* Project Image/Icon */}
                <div className="relative overflow-hidden">
                  <motion.div
                    className="w-full h-56 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm flex items-center justify-center border-b border-gray-800"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      className="text-8xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.image}
                    </motion.span>
                  </motion.div>
                  
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <CardHeader className="flex-grow">
                  <CardTitle className="text-2xl text-white mb-2">{project.title}</CardTitle>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </CardHeader>

                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2
                        px-3 py-1
                        bg-blue-500/10
                        text-blue-300
                        rounded-full
                        text-sm
                        border border-blue-500/20"
                      >
                      <TechIcon
                      name={tech}
                      className="w-4 h-4 text-blue-400 flex-shrink-0"/>
                        {tech}
                      </span>
                    ))}
                  </div>
                  &nbsp;
                  <div className="flex gap-3">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild className="border-gray-700 text-gray-300 hover:bg-gray-800 flex-1">
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
                    )}
                    {project.live && (
                      <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700 flex-1">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <ExternalLink size={16} />
                          View
                        </a>
                      </Button>
                    )}
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
