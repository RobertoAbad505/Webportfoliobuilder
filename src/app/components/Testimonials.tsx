import { Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import resumeData from '../../data/resume.json';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-4 text-white">Testimonials</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:shadow-lg hover:shadow-purple-500/10 transition-all h-full">
                <CardContent className="pt-6">
                  <motion.div
                    className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Quote size={24} className="text-purple-400" />
                  </motion.div>
                  
                  <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                      <span className="text-2xl">{testimonial.image}</span>
                    </div>
                    <div>
                      <h4 className="text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
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
