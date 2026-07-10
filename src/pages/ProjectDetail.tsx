import React from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../types/portfolioData";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="project-detail">
        <h2>Project not found</h2>
        <Link to="/projects" className="details-link">
          ← Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <Link to="/projects" className="details-link">
        ← Back to Projects
      </Link>

      <h2>{project.title}</h2>
      <p className="project-role">{project.role}</p>

      <div className="tech-stack">
        {project.techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-section">
        <h3>Overview</h3>
        <p>{project.summary}</p>
      </div>

      <div className="project-section impact-callout">
        <h3>Impact</h3>
        <p>{project.impact}</p>
      </div>

      <div className="project-links">
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
            View Live Demo
          </a>
        )}
        {project.repoLink && (
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View Code
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;