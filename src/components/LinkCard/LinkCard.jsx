import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./LinkCard.css";

const LinkCard = ({ item }) => {
  return (
    <div className="link-card">
      <Link to={item.path}>
        <img
          className="link-card-img"
          src={item.icon}
          alt="icons"
        />
        <p className="link-card-label">{item.label}</p>
      </Link>
    </div>
  );
};

LinkCard.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),
};

export default LinkCard;
