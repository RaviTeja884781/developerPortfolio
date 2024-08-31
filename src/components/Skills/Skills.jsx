import React from "react";
import styles from "./Skills.module.css";
import SkillsCard from "../SkillsCard/SkillsCard";
import { MySkills } from "../../data/data";
import { Box, Heading, Paragraph, Divider } from "react-ui-essentials";

const Skills = () => {
  return (
    <Box className={styles.skills}>
      <Box
        width="100%"
        padding="5px 20px"
        className={styles.skills_header}
      >
        <Heading type="h1" color="#6f42c1" >
          Skills
        </Heading>
        <Paragraph color="#000" >
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </Paragraph>
      </Box>
      <Divider margin="10px"/>
      <Box className={styles.skills_body}>
        <Box
          margin="20px"
          width="45%"
          padding="10px 20px"
          className={styles.skills_frontend}
          rounded
        >
          <Heading type="h3" color="#6f42c1">
            FrontEnd
          </Heading>
          <Divider margin="8px 0" />
          <SkillsCard data={MySkills.FrontEnd} />
        </Box>
        <Box
          margin="20px"
          width="45%"
          padding="10px 20px"
          className={styles.skills_backend}
          rounded
        >
          <Heading type="h3" color="#6f42c1">
            Backend
          </Heading>
          <Divider margin="8px 0" />
          <SkillsCard data={MySkills.Backend} />
        </Box>
        <Box
          margin="20px"
          width="45%"
          padding="10px 20px"
          className={styles.skills_pkg}
          rounded
        >
          <Heading type="h3" color="#6f42c1">
            Package Managers
          </Heading>
          <Divider margin="8px 0" />
          <SkillsCard data={MySkills.PackageManagers} />
        </Box>
        <Box
          margin="20px"
          width="45%"
          padding="10px 20px"
          className={styles.skills_other}
          rounded
        >
          <Heading type="h3" color="#6f42c1">
            Other
          </Heading>
          <Divider margin="8px 0" />
          <SkillsCard data={MySkills.Other} />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Skills);
