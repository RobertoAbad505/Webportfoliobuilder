import { useState } from 'react';
import { ExternalLink, Github, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { TechIcon } from './TechIcon';
import { ProjectMedia } from './ProjectMedia';
import { ProjectVideoModal } from './ProjectVideoModal';
import { useLanguage } from '../../contexts/LanguageContext';
import { CaseStudyModal } from './CaseStudyModal';

export function Projects() {
  const { data } = useLanguage();
  const [activeProject, setActiveProject] = useState<any | null>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);
  const ctaMotion = {
    whileHover: { y: -1 },
    transition: { type: 'spring', stiffness: 250, damping: 20 },
  };
  
  // Featured projects first
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
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card
                className="
                  bg-gray-950/50 backdrop-blur-lg border-gray-800
                  hover:shadow-lg hover:shadow-purple-500/10
                  transition-all h-full flex flex-col overflow-hidden
                "
              >
                {/* Media */}
                <div className="relative overflow-hidden">
                  <motion.div
                    className="
                      w-full h-56
                      bg-gradient-to-br from-blue-900/20 to-purple-900/20
                      backdrop-blur-sm flex items-center justify-center
                      border-b border-gray-800
                    "
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectMedia
                      media={project.media}
                      title={project.title}
                      onPlay={() => setActiveProject(project)}
                    />
                  </motion.div>
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
                        className="
                          flex items-center gap-2
                          px-3 py-1
                          bg-blue-500/10
                          text-blue-300
                          rounded-full text-sm
                          border border-blue-500/20
                        "
                      >
                        <TechIcon
                          name={tech}
                          className="w-4 h-4 text-blue-400 flex-shrink-0"
                        />
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    {/* App Store – Primary */}
                    {project.links?.appStore && (
                      <motion.div {...ctaMotion} className="w-full">
                        <Button
                          size="sm"
                          asChild
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <a
                            href={project.links.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center gap-2"
                          >
                            <motion.span
                              className="flex w-full items-center justify-center gap-2"
                              whileHover={{ x: 4 }}
                              transition={{ type: 'spring', stiffness: 300 }}
                            >
                              <ExternalLink size={16} />
                              App Store
                            </motion.span>
                          </a>
                        </Button>
                      </motion.div>
                    )}

                    {/* GitHub – Secondary */}
                    {project.links?.github && (
                    <motion.div {...ctaMotion} className="w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full border-gray-700 hover:bg-gray-800"
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center gap-2"
                        >
                          <motion.span
                            className="flex w-full items-center justify-center gap-2"
                            whileHover={{ x: 4 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <Github size={16} />
                            Code
                          </motion.span>
                        </a>
                      </Button>
                    </motion.div>
                  )}

                  {/* Case Study – Tertiary */}
                  {project.links?.caseStudy && (
                    <motion.div {...ctaMotion} className="w-full">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setActiveCaseStudy(project)}
                        className="w-full"
                      >
                        <motion.span
                          className="flex w-full items-center justify-center gap-2"
                          whileHover={{ x: 4 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <BookOpen size={16} />
                          {data.buttons.caseStudy}
                        </motion.span>
                      </Button>
                    </motion.div>
                  )}
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-800 pt-6">
          <p>{data.projects.disclosure}</p>
        </div>
      </div>
      {activeCaseStudy && (
        <CaseStudyModal
          project={activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
        />
      )}

      {/* Video modal */}
      <ProjectVideoModal
        open={!!activeProject}
        onClose={() => setActiveProject(null)}
        title={activeProject?.title}
        description={activeProject?.description}
        videoSrc={activeProject?.media?.src}
      />
    </section>
  );
}
