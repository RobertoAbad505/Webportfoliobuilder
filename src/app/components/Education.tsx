import { GraduationCap, BookOpen, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';
import resumeData from '../../data/resume.json';

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-4 text-white">Education</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

        {/* Degrees */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl text-white mb-6">Degrees</h3>
          <div className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center border border-blue-500/30 flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <GraduationCap size={24} className="text-blue-400" />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-1 text-white">{edu.degree}</CardTitle>
                        <p className="text-lg text-gray-300 mb-2">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                          {edu.gpa && (
                            <span className="text-blue-400">GPA: {edu.gpa}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Courses & Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl text-white mb-6">Courses & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.courses.map((course, index) => (
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
                      className="w-10 h-10 mb-3 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <BookOpen size={20} className="text-purple-400" />
                    </motion.div>
                    <h4 className="text-lg text-white mb-2">{course.name}</h4>
                    <p className="text-gray-400 text-sm mb-2">{course.provider}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{course.period}</span>
                      <a
                        href="#"
                        className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                      >
                        {course.credential}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
