import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SideNavBar.module.css";
import { sideNavData } from "../../../data/data";
import { LinkCard } from "../../../components";
import { Box } from "react-ui-essentials";

const SideNavBar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, [location.pathname]);

  return (
    <Box padding="20px 0 0 0" width="100px" height="100vh" className={styles.SideNavBar}>
      {sideNavData.map((item) => (
        <LinkCard key={item.id} active={item.path === activePath} item={item} />
      ))}
    </Box>
  );
};

export default React.memo(SideNavBar);
