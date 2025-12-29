import { motion } from 'motion/react';

type Media =
  | {
      type: 'icon';
      src: string;
    }
  | {
      type: 'image';
      src: string;
    }
  | {
      type: 'video';
      src: string;
      poster?: string;
    };

interface ProjectMediaProps {
  media?: Media;
  title: string;
  featured?: boolean;
}

export function ProjectMedia({
  media,
  title,
  featured,
}: ProjectMediaProps) {
  if (!media) return null;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {featured && (
        <span className="absolute top-3 left-3 z-10 text-xs px-2 py-1 rounded-full
          bg-blue-600/90 text-white backdrop-blur">
          Featured
        </span>
      )}

      {media.type === 'video' && (
        <video
          className="w-full h-full object-cover"
          src={media.src}
          poster={media.poster}
          muted
          loop
          playsInline
          preload="none"
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => e.currentTarget.pause()}
        />
      )}

      {media.type === 'image' && (
        <img
          src={media.src}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      )}

      {media.type === 'icon' && (
        <motion.span
          className="text-8xl"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {media.src}
        </motion.span>
      )}
    </div>
  );
}
