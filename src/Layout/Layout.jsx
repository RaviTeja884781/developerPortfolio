import PropTypes from "prop-types";
import React from "react";
import "./Layout.css";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Content from "./components/Content/Content";

const Layout = (props) => {
  return (
    <div className="layout">
      <aside className="layout-side-nav">
        <SideNavBar />
      </aside>
      <div className="layout-cont">
        <nav className="layout-top-nav">
          <TopNavBar />
        </nav>
        <section className="layout-content">
          <Content>{props.children}</Content>
        </section>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
