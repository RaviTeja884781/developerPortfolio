import React from "react";
import styles from "./Awards.module.css";
import awd1 from "./myAward1.jpg";
import awd2 from "./myAward2.jpg";

const Awards = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Awards</h1>
      </header>
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