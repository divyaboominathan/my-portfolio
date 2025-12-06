export interface Project {
  id: string;
  title: string;
  role: "Web Application" | "Mobile App" | "Full-Stack API";
  techStack: string[];
  summary: string; // The detailed case study
  impact: string; // The quantifiable result (e.g., "Reduced form errors by 30%") [cite: 9, 39]
  demoLink?: string;
  repoLink: string; // Link to the new, open-source demonstration project
}
