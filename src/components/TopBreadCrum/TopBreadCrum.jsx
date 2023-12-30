import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./TopBreadCrum.css";

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
    <div className="breadcrum">
      <h5>{breadcrumbs}</h5>
    </div>
  );
};

export default TopBreadCrum;
