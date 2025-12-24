import { Languages as LanguagesIcon } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Languages() {
  const { data } = useLanguage();

  return (
    <section id="languages" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-4 text-white">{data.languages.title}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.languages.items.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-950/50 backdrop-blur-lg border-gray-800 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center border border-blue-500/30 flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <LanguagesIcon size={28} className="text-blue-400" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-2 text-white">{lang.language}</h3>
                      <p className="text-gray-400 mb-3">{lang.level}</p>
                      <div className="w-full bg-gray-800 rounded-full h-2.5">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2 text-right">{lang.proficiency}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
