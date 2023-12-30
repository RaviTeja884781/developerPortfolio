import React from "react";
import "./TopNavBar.css";
import { TopBreadCrum } from "../../../components";
import { TopNavData } from "../../../data/data";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  return (
    <div className="top-nav-bar">
      <TopBreadCrum />
      <div className="top-nav-links">
        {TopNavData.map((item) => (
          <Link
            className="top-nav-link"
            to={item.path}
            target="_blank"
            key={item.id}
          >
            <img src={item.icon} alt={`${item.icon} logo`} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNavBar;
