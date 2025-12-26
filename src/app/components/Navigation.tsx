import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../../contexts/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, data } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const navItems = [
    { label: data.navigation.about, id: 'about' },
    { label: data.navigation.experience, id: 'experience' },
    { label: data.navigation.projects, id: 'projects' },
    { label: data.navigation.skills, id: 'skills' },
    { label: data.navigation.contact, id: 'contact' },
  ];
  const itemCss = "text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-colors text-sm bg-clip-text hover:text-transparent"
  const contactCss = "text-gray-300 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 font-medium"
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group"
        >
          <img
            src="/apple-touch-icon.png"
            alt="Roberto Abad Logo"
            className="h-12 w-12 object-contain rounded-full border border-white/80 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-400 transition-all">
            Mi portafolio Web
          </span>
        </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 ">
            {/* OPCIONES DE NAVEGACION */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={item.id == "contact" ? contactCss:itemCss}
              >
                {item.label}
              </button>
            ))}

            {/* LANGUAJE BUTTON */}
            <button
              onClick={toggleLanguage}
              className="
                relative group
                p-[1px] rounded-lg
                bg-gradient-to-r from-blue-400 to-purple-500
                hover:shadow-lg hover:shadow-purple-500/30
                transition-all
              "
            >
              <div
                className="
                  flex items-center gap-2 px-3 py-2 rounded-lg
                  bg-gray-800/70
                  group-hover:bg-gray-900/80
                  transition-all
                "
              >
                <span
                  className="
                    text-sm font-medium
                    text-gray-300
                    group-hover: bg-gradient-to-r from-blue-400 to-purple-500
                    bg-clip-text
                  "
                >
                  {language == "en" ? "🇺🇸 ":"🇲🇽 "}
                  {language.toUpperCase()}
                </span>
              </div>
            </button>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-blue-400 transition-all border border-gray-700"
            >
              <span
                  className="
                    text-sm font-medium
                    text-gray-300
                    group-hover: bg-gradient-to-r from-blue-400 to-purple-500
                    bg-clip-text
                  "
                >
                  {language == "en" ? "🇺🇸 ":"🇲🇽 "}
                  {language.toUpperCase()}
                </span>
            </button>
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}