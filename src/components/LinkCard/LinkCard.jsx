import PropTypes from "prop-types";
import React from "react";
import { Link, Box, Paragraph } from "react-ui-essentials";
import styles from "./LinkCard.module.css";

const LinkCard = ({ item, active }) => {
  return (
    <Link
      to={item.path}
      className={`${styles.link_card_cont} ${active ? styles.active : ""}`}
    >
      <Box
        width={active ? "5px" : ""}
        height={active ? "35px" : ""}
        margin="0px 2px"
        backgroundColor={active ? "#6f42c1" : ""}
        rounded
      ></Box>
      <Box width="90%" padding="8px 3px" className={styles.link_card} rounded>
        <img src={item.icon} alt="icons" />
        <Paragraph color="#6f42c1" fontSize="12px" fontWeight="600">
          {item.label}
        </Paragraph>
      </Box>
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

export default React.memo(LinkCard);
