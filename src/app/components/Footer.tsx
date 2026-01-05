import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">

        {/* Name & copyright */}
        <p className="text-gray-400">
          © {new Date().getFullYear()} Roberto Abad. All rights reserved.
        </p>

        {/* Tech stack */}
        <p className="text-gray-500 text-sm">
          Built with React, TypeScript, and Tailwind CSS
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-6 pt-2">
          <a
            href="https://www.linkedin.com/in/robertoabad95/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/RobertoAbad505"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition"
          >
            <Github size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
