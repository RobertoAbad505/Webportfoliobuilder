
import { projectGalleryManifest } from "../../generated/project-gallery-manifest";

interface ProjectGalleryProps {
  folder?: string;
  title?: string;
}

function getImageAlt(src: string): string {
  const filename = src.split("/").pop() ?? "Project screenshot";

  return filename
    .replace(/\.[^/.]+$/, "")
    .replace(/^\d+-/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, character => character.toUpperCase());
}

export function ProjectGallery({
  folder,
  title = "Screenshots",
}: ProjectGalleryProps) {
  if (!folder) return null;

  const images =
    projectGalleryManifest[
      folder as keyof typeof projectGalleryManifest
    ] ?? [];

  if (images.length === 0) return null;

  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <div
        className="
          flex gap-3
          overflow-x-auto
          snap-x snap-mandatory
          pb-4
          scrollbar-thin scrollbar-thumb-gray-700
        "
      >
        {images.map(src => (
          <figure
            key={src}
            className="flex-none snap-start"
          >
            <div
              className="
                w-[200px] sm:w-[230px]
                h-[360px] sm:h-[400px]
                overflow-hidden
                rounded-xl
                border border-gray-800
                bg-gray-900
              "
            >
              <img
                src={src}
                alt={getImageAlt(src)}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="
                  w-full h-full
                  object-contain
                  cursor-zoom-in
                "
              />
            </div>
          </figure>
        ))}
      </div>

      <p className="text-xs text-gray-500">
        Scroll horizontally to explore more images →
      </p>
    </section>
  );
}
