import { Badge } from './ui/badge';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'Redux'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase'],
    },
    {
      category: 'Tools & Other',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Agile/Scrum'],
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-4 text-white">Skills & Technologies</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-950/50 backdrop-blur-lg p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl mb-4 text-white">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="px-3 py-1 bg-gray-800/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 transition-all">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}