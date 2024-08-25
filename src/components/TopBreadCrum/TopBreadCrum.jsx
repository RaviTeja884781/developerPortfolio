import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./TopBreadCrum.module.css";
import { Box, Link } from "react-ui-essentials";
import { Fragment } from "react";

const TopBreadCrum = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbs = pathnames.map((path, index) => {
    const route = `/${pathnames.slice(0, index + 1).join("/")}`;
    const isLast = index === pathnames.length - 1;

    switch (path) {
      case "about":
        path = "About Me";
        break;
    }

    return (
      <span key={route}>
        {isLast ? <span>{path}</span> : <Link to={route}>{path}</Link>}
        {index < pathnames.length - 1 && <span> &gt; </span>}
      </span>
    );
  });

  return (
    <Fragment>
      {breadcrumbs && (
        <Box
          width="auto"
          height="25px"
          padding="4px 8px"
          margin="8px 0px 0px 10px"
          backgroundColor="rgba(81, 169, 241, 0.178)"
          className={styles.breadcrum}
          rounded
        >
          <h5>{breadcrumbs}</h5>
        </Box>
      )}
    </Fragment>
  );
};

export default TopBreadCrum;
