import { Download, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedBackground } from "./AnimatedBackground";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const { data } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = data.personalInfo.resumeFile;
    link.download = "Resume.pdf";
    link.click();
  };

  // Calculate opacity for fade effect
  const opacity = Math.max(0, 1 - scrollY / 400);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-16 bg-gray-950"
    >
      {/* Animated background with fade effect */}
      <div style={{ opacity }} className="absolute inset-0">
        <AnimatedBackground />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/50"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-white text-5xl">{data.personalInfo.avatar}</span>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {data.personalInfo.name.split(' ')[0]} {data.personalInfo.name.split(' ')[1]}
            </span>
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-3xl text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {data.personalInfo.title}
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {data.personalInfo.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            onClick={handleDownloadResume}
            size="lg"
            className="gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <Download size={20} />
            {data.buttons.downloadResume}
          </Button>
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            variant="outline"
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            {data.buttons.getInTouch}
          </Button>
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            href={data.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2, y: -5 }}
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            href={data.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2, y: -5 }}
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href={`mailto:${data.personalInfo.email}`}
            className="text-gray-400 hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2, y: -5 }}
          >
            <Mail size={28} />
          </motion.a>
          <motion.a
            href={data.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
            whileHover={{ scale: 1.2, y: -5 }}
          >
            <MessageSquare size={28} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}