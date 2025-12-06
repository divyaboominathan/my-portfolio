import { Project } from "./project";

// --- 1. SKILLS DATA ---
// Based on your 'Expertise' section
export const SKILLS: string[] = [
  "React",
  "React Native",
  "Micro Frontend",
  "Express.js",
  "MSSQL",
  "Node js",
  "Javascript",
  "Typescript",
  "GitHub",
  "Bitbucket",
  "Jira",
  "Html",
  "Css",
  "Jest",
  "Sketch",
  "Balsamiq",
];

// --- 2. PROJECTS DATA ---
// Populate with your confidential case studies and personal demo projects

export const PROJECTS: Project[] = [
  // --- PROJECT 1: Dynamic Forms Case Study (Based on Bloomlync experience) ---
  {
    id: "dynamic-forms",
    title: "Enterprise Dynamic Forms (Case Study)",
    role: "Web Application",
    techStack: ["React", "TypeScript", "Jest", "ES6", "Webpack", "Babel"],
    summary:
      "Refactored a legacy codebase with modern React and TypeScript approaches to solve critical user submission errors. Centralized validation logic into a reusable custom hook, drastically improving maintainability.",
    impact:
      "Reduced client-side form errors by a validated 30% through a dynamic form validation system.",
    repoLink: "https://github.com/Divya/form-validator-demo", // Link to your personal validation demo
  },

  // --- PROJECT 2: Mobile App Development (Based on Velz Tech experience) ---
  {
    id: "mobile-app",
    title: "Cross-Platform Mobile Application UI/UX",
    role: "Mobile App",
    techStack: ["React Native", "JavaScript", "ES6", "Sketch"],
    summary:
      "Designed and developed professional cross-platform mobile UI applications for E-commerce, Healthcare, and Live Tracking systems. Focused on creating reusable React Native common components.",
    impact:
      "Enhanced application development speed by leveraging states and props for efficient, reusable component functionality across different platforms.",
    repoLink: "https://github.com/Divya/react-native-ui-kit-demo", // Link to a new, non-confidential mobile UI demo
  },
];
