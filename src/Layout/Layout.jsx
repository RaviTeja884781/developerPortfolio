import PropTypes from "prop-types";
import React from "react";
import styles from "./Layout.module.css";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Content from "./components/Content/Content";
import { Box } from "react-ui-essentials";

const Layout = (props) => {
  return (
    <Box width="100%" height="100vh" className={styles.layout}>
      <nav className={styles.layout_top_nav}>
        <TopNavBar />
      </nav>
      <Box className={styles.layout_cont}>
        <aside className={styles.layout_side_nav}>
          <SideNavBar />
        </aside>
        <section className={styles.layout_content}>
          <Content>{props.children}</Content>
        </section>
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.memo(Layout);
