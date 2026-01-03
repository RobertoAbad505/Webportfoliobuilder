import { Play } from 'lucide-react';

interface ProjectMediaProps {
  media: {
    type: 'video' | 'icon' | 'image';
    src: string;
    poster?: string;
  };
  title: string;
  mode?: 'preview' | 'inline';
  onPlay?: () => void;
}

export function ProjectMedia({
  media,
  title,
  mode = 'preview',
  onPlay,
}: ProjectMediaProps) {

  if (media.type === 'video') {

    // ▶️ INLINE VIDEO (Case Study)
    if (mode === 'inline') {
      return (
        <video
          src={media.src}
          controls
          playsInline
          className="
          w-full h-auto
          max-h-[60vh]
          md:max-h-[70vh]
          lg:max-h-[75vh]
          object-contain
          "
        />
      );
    }

    // 🖼 PREVIEW (Project card)
    return (
      <button
        onClick={onPlay}
        className="relative w-full h-56 group"
        aria-label={`Open video demo for ${title}`}
      >
       <img
          src={media.poster}
          alt={title}
          className="
            w-full h-full
            object-cover
            scale-[1.02]
          "
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <Play className="w-7 h-7 text-gray-900 ml-1" />
          </div>
        </div>
      </button>
    );
  }

  if (media.type === 'image') {
    return (
      <img
        src={media.src}
        alt={title}
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <div className="w-full h-56 flex items-center justify-center text-7xl">
      {media.src}
    </div>
  );
}

