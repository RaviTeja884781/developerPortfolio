import React from "react";
import "./Skills.css";
import SkillsCard from "../SkillsCard/SkillsCard";
import { MySkills } from "../../data/data";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-header">
        <h1>Skills</h1>
        <p>
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </p>
      </div>
      <div className="skills-body">
        <div className="skills-frontend">
          <p>FrontEnd :</p>
          <SkillsCard data={MySkills.FrontEnd} />
        </div>
        <div className="skills-backend">
          <p>Backend :</p>
          <SkillsCard data={MySkills.Backend} />
        </div>
        <div className="skills-pkg">
          <p>Package Managers :</p>
          <SkillsCard data={MySkills.PackageManagers} />
        </div>
        <div className="skills-other">
          <p>Other :</p>
          <SkillsCard data={MySkills.Other} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
