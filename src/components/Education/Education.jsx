import React from "react";
import "./Education.css";
import { EducationInfo } from "../../data/data";

const Education = () => {
  return (
    <div className="edu-container">
      <div className="edu-header">
        <h1>Education</h1>
        <p>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
      </div>
      <div className="edu-body">
        {EducationInfo.map((item) => (
          <div className="edu-card">
            <div className="edu-card-header">
              <img src={item.icon} alt={item.icon} />
              <div>
                <p className="edu-name">{item.institutionName}</p>
                <p className="edu-stream">
                  {item.stream}
                  {item.period}
                </p>
              </div>
            </div>
            {item.grade && (
              <div className="edu-card-grade">Grade: {item.grade}</div>
            )}
            <div className="edu-card-body">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
