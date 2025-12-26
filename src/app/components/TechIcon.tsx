import { techIconMap } from "@/lib/techIcons";
import { Code2 } from "lucide-react";

type Props = {
  name: string;
  size?: number;
  className?: string;
};

export function TechIcon({ name, size = 20, className }: Props) {
  const Icon = techIconMap[name.toLowerCase()] || Code2;
  return <Icon size={size} className={className} />;
}