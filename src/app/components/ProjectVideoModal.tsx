import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

interface ProjectVideoModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  videoSrc: string;
}

export function ProjectVideoModal({
  open,
  onClose,
  title,
  description,
  videoSrc,
}: ProjectVideoModalProps) {

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
          if (event.key === 'Escape') {
            onClose();
          }
        }
      
        if (open) {
          document.addEventListener('keydown', handleKeyDown);
        }
      
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            className="
              relative z-10
              w-full max-w-5xl mx-4
              bg-gray-900 rounded-xl
              overflow-hidden
              shadow-2xl
            "
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            {/* Close button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            z-10
            rounded-full p-2
            bg-black/60 text-white
            hover:bg-black/80
            focus:outline-none focus:ring-2 focus:ring-white
          "
          aria-label="Close video modal"
        >
          ✕
        </button>

            {/* Video */}
            <div className="aspect-video bg-black">
            <video
                src={videoSrc}
                controls
                autoPlay
                playsInline
                className="
                  w-full h-full
                  object-contain
                  bg-black
                "
              />
            </div>

            {/* Description */}
            <div className="p-6">
              <h3 className="text-2xl text-white mb-2">{title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
