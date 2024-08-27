import React from "react";
import styles from "./Education.module.css";
import { EducationInfo } from "../../data/data";
import { Box, Divider, Heading, Paragraph } from "react-ui-essentials";

const Education = () => {
  return (
    <Box>
      <Box
        width="100%"
        padding="5px 20px"
        margin="0px 0px 30px 0px"
        className={styles.edu_header}
      >
        <Heading type="h1" color="#000">
          Education
        </Heading>
        <Paragraph color="#000">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Paragraph>
      </Box>
      <Box className={styles.edu_body}>
        {EducationInfo.map((item) => (
          <Box
            width="45%"
            margin="10px"
            padding="15px"
            className={styles.edu_card}
            rounded
          >
            <Box className={styles.edu_card_header}>
              <img src={item.icon} alt={item.icon} />
              <Paragraph fontSize="15px" fontWeight="600" color="#000">
                {item.institutionName.toUpperCase()}
              </Paragraph>
            </Box>
            <Divider margin="8px 0 5px 0" />
            <Box
              margin="0 0 20px 0"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItem: "center",
              }}
            >
              {item.grade && (
                <Paragraph
                  fontSize="14px"
                  className={styles.edu_card_grade}
                  color="#000"
                >
                  Grade: {item.grade}
                </Paragraph>
              )}
              <Paragraph fontSize="14px" color="#000">
                {item.stream}
                {item.period}
              </Paragraph>
            </Box>
            <Box className={styles.edu_card_body}>{item.desc}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
