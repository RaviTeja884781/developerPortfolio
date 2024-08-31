import React from "react";
import styles from "./Awards.module.css";
import awd1 from "./myAward1.jpg";
import awd2 from "./myAward2.jpg";
import { Box, Divider, Heading } from "react-ui-essentials";

const Awards = () => {
  return (
    <div className={styles.container}>
      <Box
        width="100%"
        padding="5px 20px"
        className={styles.awd_header}
      >
        <Heading type="h1" color="#6f42c1">
        Awards and achievements
        </Heading>

      </Box>
      <Divider margin="10px" />
      <div className={styles.awardsContainer}>
        <div className={styles.awardBox}>
          <img
            src={awd1}
            className={styles.awardImage}
            alt="Quarterly Award for outstanding performance"
          />
          <p className={styles.awardDescription}>
            Received Quarterly Award for outstanding performance and
            contribution to project success
          </p>
        </div>
        <div className={styles.awardBox}>
          <img
            src={awd2}
            className={styles.awardImage}
            alt="Award of Excellence"
          />
          <p className={styles.awardDescription}>
            Honored with the Award of Excellence in recognition of exceptional
            skills and dedication to quality work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;