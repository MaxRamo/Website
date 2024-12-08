export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  link: string;
  github?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'Technology' | 'Opinion' | 'Tutorial';
  readTime: number;
  image: string;
}