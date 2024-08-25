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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const screenSize = useBreakpoints();
  let drawerWidth;

  switch (screenSize.breakpoint) {
    case "sm":
      drawerWidth = "45%";
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
      break;
  }
  const toggleSidebar = () => {
    setShowSidebar(!isDrawerOpen);
  };
  return (
    <Fragment>
      <Box
        height="50px"
        width="calc(100% - 100px)"
        padding="5px"
        className={styles.top_nav_bar}
      >
        <div className={styles.topnav_menu}>
          <Button
            variant="light"
            size="sm"
            arai-label="Menu"
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
          <SideBar width="100%" style={{backgroundColor:"#191924"}}>
            <SideBar.Body routes={routes} />
          </SideBar>
        </Drawer>
      </SidebarPortal>
    </Fragment>
  );
};

export default TopNavBar;
