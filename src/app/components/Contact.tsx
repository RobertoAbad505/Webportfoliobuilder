import { Mail, MapPin, Phone, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Contact() {
  const { data } = useLanguage();

  const handleCalendlyClick = () => {
    if (data.socialLinks.calendly) {
      window.open(data.socialLinks.calendly, '_blank');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: data.contact.labels.email,
      value: data.personalInfo.email,
      href: `mailto:${data.personalInfo.email}`,
    },
    {
      icon: Phone,
      label: data.contact.labels.phone,
      value: data.personalInfo.phone,
      href: `tel:${data.personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: data.contact.labels.location,
      value: data.personalInfo.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-4 text-white">{data.contact.title}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-950/50 backdrop-blur-lg border-gray-800 mb-8">
            <CardContent className="pt-6">
              <p className="text-lg text-gray-300 text-center mb-8">
                {data.contact.description}
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

              {data.socialLinks.calendly && (
                <div className="text-center">
                  <Button size="lg" onClick={handleCalendlyClick} className="gap-2 bg-blue-600 hover:bg-blue-700">
                    <Calendar size={20} />
                    {data.contact.buttonText}
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">
                    {data.contact.buttonSubtext}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="text-center text-gray-400">
            <p>{data.contact.footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
