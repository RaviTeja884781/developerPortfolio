import PropTypes from "prop-types";
import React from "react";
import "./Content.css";

const Content = (props) => {
  return <div className="content">{props.children}</div>;
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
