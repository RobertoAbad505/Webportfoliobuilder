import { Code2, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';

const iconMap: { [key: string]: typeof Code2 } = {
  'Mobile Architecture': Code2,
  'Arquitectura Móvil': Code2,
  'Accessibility': Rocket,
  'Accesibilidad': Rocket,
  'Leadership': Users,
  'Liderazgo': Users,
};

export function About() {
  const { data } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-4 text-white">{data.about.title}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto mb-16">
          {data.about.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-300 mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.about.highlights.map((item, index) => {
            const Icon = iconMap[item.title] || Code2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                  <CardContent className="pt-6 text-center">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon size={32} className="text-blue-400" />
                    </motion.div>
                    <h3 className="text-xl mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
