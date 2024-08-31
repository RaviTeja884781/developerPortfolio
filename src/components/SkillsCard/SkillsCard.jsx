import React from "react";
import styles from "./SkillsCard.module.css";
import { Box, Paragraph } from "react-ui-essentials";

const SkillsCard = ({ data }) => {
  return (
    <Box
      width="90%"
      height="150px"
      padding="10px 5px"
      className={styles.skills_card_container}
      rounded
    >
      {data.map((item) => (
        <Box
          height="35px"
          padding="0 8px"
          className={styles.skills_card}
          key={item.id}
          rounded
        >
          <img src={item.icon} alt={item.icon} />
          <Paragraph color="#000" fontSize="14px" fontWeight="500">
            {item.label}
          </Paragraph>
        </Box>
      ))}
    </Box>
  );
};

export default React.memo(SkillsCard);
