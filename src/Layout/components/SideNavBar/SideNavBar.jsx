import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SideNavBar.module.css";
import { sideNavData } from "../../../data/data";
import { LinkCard } from "../../../components";
import { Box, Paragraph } from "react-ui-essentials";

const SideNavBar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, [location.pathname]);

  return (
    <Box width="110px" height="100vh" className={styles.SideNavBar}>
      <Paragraph fontSize="14px" fontWeight="900" color="rgb(81, 169, 241)">
        Portfolio
      </Paragraph>
      {sideNavData.map((item) => (
        <LinkCard key={item.id} active={item.path === activePath} item={item} />
      ))}
    </Box>
  );
};

export default SideNavBar;
