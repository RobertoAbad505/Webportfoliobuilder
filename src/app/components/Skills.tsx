import { Badge } from './ui/badge';
import { useLanguage } from '../../contexts/LanguageContext';
// Importamos Lucide y Simple Icons desde react-icons
import { 
  LucideCode2, LucideDatabase, LucideServer, LucideGlobe, 
  LucideCpu, LucideLayers, LucideSmartphone, LucideAccessibility,
  LucideZap, LucideRepeat, LucideGitBranch, LucideSettings 
} from 'lucide-react';
import { 
  SiSwift, SiReact, SiTailwindcss, SiJavascript, 
  SiTypescript, SiVite, SiGraphql, SiApollographql, SiDjango, 
  SiDotnet, SiSpringboot, SiPostgresql, 
  SiMysql, SiFirebase, SiHtml5, SiCss3 
} from 'react-icons/si';



export function Skills() {
  const { data } = useLanguage();
  const IconMap: Record<string, React.ElementType> = {
    // Mobile
    swift: SiSwift,
    // swiftui: SiSwift,
    uikit: LucideSmartphone,
    combine: LucideZap,
    accessibility: LucideAccessibility,
    // Web
    html: SiHtml5,
    css: SiCss3,
    javascript: SiJavascript,
    react: SiReact,
    vite: SiVite,
    // Backend
    api: LucideGlobe,
    graphql: SiGraphql,
    apollo: SiApollographql,
    django: SiDjango,
    dotnet: SiDotnet,
    spring: SiSpringboot,
    // DB
    // sqlserver: SiMicrosoftsqlserver,
    postgresql: SiPostgresql,
    mysql: SiMysql,
    database: LucideDatabase,
    // Infra
    server: LucideServer,
    cicd: LucideRepeat,
    firebase: SiFirebase,
    // Practices
    git: LucideGitBranch,
    agile: LucideSettings,
    architecture: LucideLayers,
    refactor: LucideCode2,
    performance: LucideZap,
  };
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-4 text-white">{data.skills.title}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(data.skills.categories).map(([category, skills], index) => (
            <div key={index} className="bg-gray-950/50 backdrop-blur-lg p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl mb-4 text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {/* 1. Cambiamos (skill, skillIndex) => ( por { */}
                {(skills as any[]).map((skill, skillIndex) => {
                  
                  // 2. Ahora sí puedes declarar variables aquí
                  const IconComponent = IconMap[skill.icon] || LucideCode2;

                  // 3. Debes agregar el 'return' explícito
                  return (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 transition-all flex items-center gap-2"
                    >
                      <IconComponent size={14} />
                      {skill.name}
                    </Badge>
                  );
                })} {/* 4. Cerramos con llave y paréntesis */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
