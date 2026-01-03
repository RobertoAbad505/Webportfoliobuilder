import { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TechIcon } from './TechIcon';
import { ProjectMedia } from './ProjectMedia';
import { useLanguage } from '../../contexts/LanguageContext';

interface CaseStudyModalProps {
  project: any;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const { data } = useLanguage();
  const labels = data.caseStudySections;

  // Close on ESC key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!project?.caseStudy) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden
        />

        {/* Modal */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="
            relative z-10
            w-full max-w-5xl
            max-h-[90vh]
            overflow-y-auto
            bg-gray-950
            border border-gray-800
            rounded-2xl
            shadow-xl
          "
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close case study"
            className="
              absolute top-4 right-4
              p-2 rounded-full
              bg-gray-800/80 hover:bg-gray-700
              text-white
              transition
            "
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="p-6 border-b border-gray-800">
            <h2
              id="case-study-title"
              className="text-3xl font-semibold text-white"
            >
              {project.title}
            </h2>
            <p className="text-gray-400 mt-1">{project.subtitle}</p>
          </div>

          {/* Media */}
          <div className="p-6">
          <div
              className="
                relative w-full
                rounded-xl
                overflow-hidden
                border border-gray-800
                bg-black
              "
            >
              <ProjectMedia
                media={project.media}
                title={project.title}
                mode="inline"
              />
           </div>
          </div>

          {/* Content sections */}
          <div className="px-6 pb-6 space-y-10">
            {project.caseStudy.sections.map((section: any) => (
              <section key={section.type}>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {labels[section.type]}
                </h3>

                {section.content && (
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                )}

                {section.bullets && (
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {section.bullets.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Skills reused from project */}
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                {labels.skills}
              </h3>
              <div className="flex flex-wrap gap-2">
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
                    <TechIcon name={tech} className="w-4 h-4" />
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
