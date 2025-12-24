import { Award, Trophy, Star, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';

const iconMap: { [key: string]: typeof Trophy } = {
  'GraphQL Modernization Leader': Trophy,
  'Líder en Modernización GraphQL': Trophy,
  'Accessibility Champion': Award,
  'Campeón de Accesibilidad': Award,
};

export function Achievements() {
  const { data } = useLanguage();

  return (
    <section id="achievements" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-4 text-white">{data.achievements.title}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.achievements.items.map((achievement, index) => {
            const Icon = iconMap[achievement.title] || Trophy;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
                  <CardContent className="pt-6">
                    <motion.div
                      className="w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center border border-blue-500/30"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon size={28} className="text-blue-400" />
                    </motion.div>
                    <h3 className="text-xl mb-2 text-white">{achievement.title}</h3>
                    <p className="text-gray-300 mb-2">{achievement.description}</p>
                    <p className="text-sm text-gray-500">{achievement.date}</p>
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
