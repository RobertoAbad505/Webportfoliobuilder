import { ExternalLink, Github, GithubIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { TechIcon } from './TechIcon';
import { ProjectMedia } from './ProjectMedia';
import { useLanguage } from '../../contexts/LanguageContext';

export function Projects() {
  const { data } = useLanguage();

  // 🔹 Featured projects first
  const projects = [...data.projects.items].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-4 text-white">
          {data.projects.title}
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="bg-gray-950/50 backdrop-blur-lg border-gray-800
                hover:shadow-lg hover:shadow-purple-500/10
                transition-all h-full flex flex-col overflow-hidden"
              >
                {/* Media */}
                <div className="relative overflow-hidden">
                  <motion.div
                    className="w-full h-56
                      bg-gradient-to-br from-blue-900/20 to-purple-900/20
                      backdrop-blur-sm flex items-center justify-center
                      border-b border-gray-800"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectMedia
                      media={project.media}
                      title={project.title}
                      featured={project.featured}
                    />
                  </motion.div>

                  <div className="absolute inset-0
                    bg-gradient-to-t from-blue-600/20 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Content */}
                <CardHeader className="flex-grow">
                  <CardTitle className="text-2xl text-white mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-gray-300 text-sm">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="mt-auto">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string) => (
                      <span
                        key={tech}
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
                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.links?.github && (
                      <Button variant="outline" size="sm" asChild className="border-gray-700 text-black-300 hover:bg-gray-800 flex-1">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.links?.live && (
                      <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700 flex-1">
                        <a
                          href={project.links.live}
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
