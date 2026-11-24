
import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const PROJECTS_DIR = path.resolve("public/images/projects");
const OUTPUT_DIR = path.resolve("src/generated");
const OUTPUT_FILE = path.join(
  OUTPUT_DIR,
  "project-gallery-manifest.ts"
);

const GALLERY_FOLDER = "gallery";

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp"
]);

async function generateGalleryManifest() {
  const projectFolders = await readdir(PROJECTS_DIR, {
    withFileTypes: true
  });

  const manifest = {};

  for (const project of projectFolders) {
    if (!project.isDirectory()) continue;

    const galleryPath = path.join(
      PROJECTS_DIR,
      project.name,
      GALLERY_FOLDER
    );

    let files;

    try {
      files = await readdir(galleryPath, {
        withFileTypes: true
      });
    } catch (error) {
      if (error.code === "ENOENT") continue;
      throw error;
    }

    const images = files
      .filter(file => {
        if (!file.isFile()) return false;

        const extension = path.extname(file.name).toLowerCase();
        return IMAGE_EXTENSIONS.has(extension);
      })
      .sort((a, b) =>
        a.name.localeCompare(b.name, undefined, {
          numeric: true,
          sensitivity: "base"
        })
      )
      .map(file =>
        `/images/projects/${encodeURIComponent(project.name)}/gallery/${encodeURIComponent(file.name)}`
      );

    if (images.length > 0) {
      manifest[project.name] = images;
    }
  }

  await mkdir(OUTPUT_DIR, { recursive: true });

  const output = `
export const projectGalleryManifest = ${JSON.stringify(
    manifest,
    null,
    2
  )} as const;
`;

  await writeFile(OUTPUT_FILE, output.trimStart(), "utf-8");

  console.log(
    `Project gallery manifest generated for ${
      Object.keys(manifest).length
    } projects.`
  );
}

generateGalleryManifest().catch(error => {
  console.error("Failed to generate project gallery manifest:", error);
  process.exitCode = 1;
});
