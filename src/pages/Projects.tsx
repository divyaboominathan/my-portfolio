import React from "react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../types/portfolioData";

const Projects: React.FC = () => {
  return (
    <section>
      <h2>Work Showcase</h2>
      <p>Demonstrating high-quality web and mobile applications.</p>
      <div className="projects-grid">
        {PROJECTS.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
