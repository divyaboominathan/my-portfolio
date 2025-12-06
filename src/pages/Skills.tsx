// /src/pages/Skills.tsx
import React from "react";
// import { SKILLS } from "../data/portfolioData";
// import TechPill from "../components/TechPill";
import { SKILLS } from "../types/portfolioData";
import TechPill from "../components/TechPill";

const Skills: React.FC = () => {
  // Logic to categorize skills (Frontend, Backend, Tools) based on your resume [cite: 21, 22, 24]
  const frontend = SKILLS.filter((s: string) =>
    ["React", "TypeScript", "Html", "Css"].includes(s)
  );
  const backend = SKILLS.filter((s: string) =>
    ["Express.js", "Node js", "MSSQL"].includes(s)
  );
  const tools = SKILLS.filter((s: string) =>
    ["GitHub", "Jira", "Jest"].includes(s)
  );

  return (
    <section>
      <h2>Expertise </h2>

      <h3>Frontend & Mobile</h3>
      <div className="skill-grid">
        {frontend.map((skill: any) => (
          <TechPill key={skill} name={skill} />
        ))}
      </div>

      <h3>Backend & Database</h3>
      <div className="skill-grid">
        {backend.map((skill: any) => (
          <TechPill key={skill} name={skill} />
        ))}
      </div>

      <h3>Tools</h3>
      <div className="skill-grid">
        {tools.map((skill: any) => (
          <TechPill key={skill} name={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
