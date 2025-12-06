// /src/components/ProjectCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.summary.substring(0, 100)}...</p>
      <div className="tech-stack">
        {project.techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <Link to={`/projects/${project.id}`} className="details-link">
        View Case Study
      </Link>
    </div>
  );
};

export default ProjectCard;
