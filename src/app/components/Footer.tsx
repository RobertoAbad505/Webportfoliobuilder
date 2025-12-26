export function Footer() {
    return (
        <footer className="bg-black text-white py-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Roberto Abad. All
              rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </footer>
    );
}