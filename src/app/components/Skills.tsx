import { Badge } from './ui/badge';
import { useLanguage } from '../../contexts/LanguageContext';
import { TechIcon } from './TechIcon';

export function Skills() {
  const { data } = useLanguage();
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-4 text-white">{data.skills.title}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(data.skills.categories).map(([category, skills], index) => (
            <div key={index} className="bg-gray-950/50 backdrop-blur-lg p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl mb-4 text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {(skills as any[]).map((skill, skillIndex) => {
                  return (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 transition-all flex items-center gap-2"
                    >
                    <TechIcon
                      name={skill.icon}
                      className="w-8 h-8 text-blue-400 flex-shrink-0"
                    />
                    {skill.name}
                    </Badge>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
