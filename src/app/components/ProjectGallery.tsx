
interface GalleryImage {
    src: string;
    alt: string;
    caption?: string;
  }
  
  interface ProjectGalleryProps {
    images?: GalleryImage[];
    title?: string;
  }
  
  export function ProjectGallery({
    images,
    title = "Screenshots",
  }: ProjectGalleryProps) {
    if (!images?.length) return null;
  
    return (
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
  
        <div
          className="
            flex gap-4 overflow-x-auto
            snap-x snap-mandatory
            pb-4
            scrollbar-thin scrollbar-thumb-gray-700
          "
        >
          {images.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className="
                flex-none w-[80%] sm:w-[48%]
                snap-start
                space-y-2
              "
            >
              <div className="
                overflow-hidden rounded-xl
                border border-gray-800
                bg-gray-900
              ">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  draggable={false}
                  className="
                    block w-full h-auto
                    object-contain
                    transition-transform duration-300
                    hover:scale-[1.02]
                  "
                />
              </div>
  
              {image.caption && (
                <figcaption className="text-sm text-gray-400">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
  
        <p className="text-xs text-gray-500">
          Scroll horizontally to explore more images →
        </p>
      </section>
    );
  }
  