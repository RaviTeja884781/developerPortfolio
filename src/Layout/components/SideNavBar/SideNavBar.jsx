import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SideNavBar.css";
import { sideNavData } from "../../../data/data";
import { LinkCard } from "../../../components";

const SideNavBar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, [location.pathname]);

  return (
    <div className="SideNavBar">
      <p>Portfolio</p>
      {sideNavData.map((item) => (
        <LinkCard key={item.id} active={item.path === activePath} item={item} />
      ))}
    </div>
  );
};

export default SideNavBar;
