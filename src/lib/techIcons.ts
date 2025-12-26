import {
    SiSwift,
    SiReact,
    SiGraphql,
    SiDotnet,
    SiDjango,
    SiPostgresql,
    SiMysql,
    SiFirebase,
    SiGit,
    SiJavascript,
    SiTypescript
  } from "react-icons/si";
  
  import {
    AccessibilityIcon,
    Code2,
    Database,
    Server,
    Cloud,
    Cpu
  } from "lucide-react";
  
  export const techIconMap: Record<string, React.ElementType> = {
    // Mobile
    swift: SiSwift,
    swiftui: SiSwift,
    uikit: SiSwift,
    combine: Cpu,
    accessibility: AccessibilityIcon,
  
    // Web
    react: SiReact,
    javascript: SiJavascript,
    typescript: SiTypescript,
    html: Code2,
    css: Code2,
    vite: Code2,
  
    // Backend
    graphql: SiGraphql,
    apollo: Code2,
    rest: Cloud,
    django: SiDjango,
    dotnet: SiDotnet,
    spring: Code2,
  
    // Databases
    sqlserver: Database,
    postgresql: SiPostgresql,
    mysql: SiMysql,
    storedprocedures: Database,
  
    // Infra / Tools
    firebase: SiFirebase,
    git: SiGit,
    cicd: Server,
    iis: Server,
    architecture: Code2,
    performance: Cpu
  };
  