import React from "react";
import "./SkillsCard.css";

const SkillsCard = ({ data }) => {
  return (
    <div className="skills-card-container">
      {data.map((item) => (
        <div className="skills-card" key={item.id}>
          <img src={item.icon} alt={item.icon} />
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
