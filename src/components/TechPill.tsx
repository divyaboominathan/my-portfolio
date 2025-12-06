import React from "react";
import { GoDotFill } from "react-icons/go";

interface TechPillProps {
  name: string;
}

const TechPill: React.FC<TechPillProps> = ({ name }) => {
  return (
    <span className="tech-pill">
      {" "}
      <GoDotFill size={10} style={{ marginRight: "6px" }} />
      {name}
    </span>
  );
};

export default TechPill;
