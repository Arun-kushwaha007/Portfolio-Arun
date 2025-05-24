export interface Article {
  id: string;
  title: string;
  description: string;
  cover_image: string;
  url: string;
  page_views_count: number;
  public_reactions_count: number;
  comments_count: number;
}

export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  techStack: TechStack[]; // Added tech stack field to describe technologies used
  status?: string ; // Track project status
  screenshot?: string; // Optional screenshot field for project preview
  startDate?: string; // Optional start date for the project
  endDate?: string; // Optional end date for the project
}

export interface TechStack {
  name: string; // Name of the technology
  logo: string; // Link to the technology's logo image
}


export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
}

export interface User {
  login: string;
  name: string; // Full name of the user
  avatar_url: string;
  bio?: string; // Bio of the user, can be optional
  location?: string; // Location of the user, can be optional
  company?: string; // Company the user works at, can be optional
  public_repos: number;
  followers: number;
  following: number; // Number of people the user is following
  email?: string; // User's email, can be optional
  blog?: string; // User's blog or website, can be optional
  created_at: string; // Date when the GitHub account was created
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
