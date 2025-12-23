import { Mail, MapPin, Phone, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';

export function Contact() {
  const handleCalendlyClick = () => {
    // Replace with your actual Calendly link
    window.open('https://calendly.com/yourusername', '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-4 text-white">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-950/50 backdrop-blur-lg border-gray-800 mb-8">
            <CardContent className="pt-6">
              <p className="text-lg text-gray-300 text-center mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your visions. Feel free to reach out!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center border border-blue-500/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <info.icon size={24} className="text-blue-400" />
                    </motion.div>
                    <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-200 hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-200">{info.value}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Button size="lg" onClick={handleCalendlyClick} className="gap-2 bg-blue-600 hover:bg-blue-700">
                  <Calendar size={20} />
                  Schedule a Meeting
                </Button>
                <p className="text-sm text-gray-500 mt-3">
                  Book a time slot that works for you
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-gray-400">
            <p>Looking forward to hearing from you!</p>
          </div>
        </div>
      </div>
    </section>
  );
}