import React, { useState, Fragment } from "react";
import styles from "./TopNavBar.module.css";
import { TopBreadCrum } from "../../../components";
import { TopNavData } from "../../../data/data";
import { RoundedIcons } from "react-ui-essentials-icons";
import {
  Box,
  Link,
  Button,
  useBreakpoints,
  usePortal,
  SideBar,
  Drawer,
} from "react-ui-essentials";
const { Menu } = RoundedIcons;
import ReactDOM from "react-dom";
import { routes } from "../../../data/routes";

const SidebarPortal = ({ id, children }) => {
  const target = usePortal(id);
  return ReactDOM.createPortal(children, target);
};

const TopNavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const screenSize = useBreakpoints();

  let drawerWidth;

  switch (screenSize.breakpoint) {
    case "sm":
      drawerWidth = "50%";
      break;
    case "md":
      drawerWidth = "35%";
      break;
    case "lg":
      drawerWidth = "25%";
      break;
    case "xl":
      drawerWidth = "25%";
      break;
    default:
      drawerWidth = "50%";
      break;
  }

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <Fragment>
      <Box
        height="50px"
        width="100%"
        padding="5px"
        className={styles.top_nav_bar}
      >
        <Box style={{ display: "flex", gap: "15px" }}>
          <div className={styles.topnav_menu}>
            <Button
              variant="light"
              size="sm"
              aria-label="Menu"
              onClick={toggleSidebar}
            >
              <Button.Icon>
                <Menu
                  width="20px"
                  height="20px"
                  style={{ marginBottom: "-1.5px" }}
                />
              </Button.Icon>
            </Button>
          </div>
          <TopBreadCrum />
        </Box>
        <Box className={styles.top_nav_links}>
          {TopNavData.map((item) => (
            <Link
              className={styles.top_nav_link}
              to={item.path}
              target="_blank"
              key={item.id}
            >
              {item.icon}
            </Link>
          ))}
        </Box>
      </Box>
      <SidebarPortal id="sidebar-root">
        <Drawer
          isOpen={showSidebar}
          onClose={() => setShowSidebar(false)}
          position="left"
          width={drawerWidth}
        >
          <SideBar width="100%" >
            <SideBar.Body routes={routes} />
          </SideBar>
        </Drawer>
      </SidebarPortal>
    </Fragment>
  );
};

export default TopNavBar;
