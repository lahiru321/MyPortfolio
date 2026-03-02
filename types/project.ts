export type ProjectTheme = 'blue' | 'purple' | 'emerald' | 'orange' | 'rose' | 'cyan' | 'teal';

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  theme: ProjectTheme;
}
