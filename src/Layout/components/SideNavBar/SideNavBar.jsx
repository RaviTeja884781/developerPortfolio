import React from "react";
import "./SideNavBar.css";
import { sideNavData } from "../../../data/data";
import { LinkCard } from "../../../components";

const SideNavBar = () => {
  return (
    <div className="SideNavBar">
      <p>Portfolio</p>
      {sideNavData.map((item) => (
        <LinkCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SideNavBar;
