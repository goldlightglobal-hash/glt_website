import type { IconKey } from "@/lib/icons";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: IconKey;
  slug?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: IconKey;
}

export interface Industry {
  title: string;
  description: string;
  icon: IconKey;
}

export interface ResearchArea {
  title: string;
  description: string;
  icon: IconKey;
}

export interface PortfolioProject {
  title: string;
  description: string;
  technology: string;
  image: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

export interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface TrainingProgram {
  title: string;
  description: string;
  duration: string;
  icon: IconKey;
}

export interface ServiceDetail {
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  image: string;
}
