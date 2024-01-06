import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./LinkCard.css";

const LinkCard = ({ item, active }) => {
  return (
    <Link to={item.path} className={`link-card-cont ${active ? "active" : ""}`}>
      <div className={`${active ? "active-highlight" : ""}`}></div>
      <div className="link-card">
        <img src={item.icon} alt="icons" />
        <p>{item.label}</p>
      </div>
    </Link>
  );
};

LinkCard.propTypes = {
  active: PropTypes.number.isRequired,
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),
};

export default LinkCard;
