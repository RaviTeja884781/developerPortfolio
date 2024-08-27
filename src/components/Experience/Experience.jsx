import React from "react";
import { Box, Divider, Heading, Paragraph, UnOrderedList } from "react-ui-essentials";
import styles from "./Experience.module.css";

const Experience = () => {
  const calculateYearsSinceStart = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();

    let yearsDifference = today.getFullYear() - start.getFullYear();
    let monthsDifference = today.getMonth() - start.getMonth();

    if (
      monthsDifference < 0 ||
      (monthsDifference === 0 && today.getDate() < start.getDate())
    ) {
      yearsDifference--;
      monthsDifference += 12;
    }

    if (today.getDate() < start.getDate()) {
      monthsDifference--;
    }

    return { years: yearsDifference, months: monthsDifference };
  };
  const result = calculateYearsSinceStart("2022-10-15");
  const exp = [
    "Lead Frontend Developer for InferlQ, a finance product developed from scratch over 2.3 years.",
    "Managed multiple environments (dev, test, demo, sandbox) for InferlQ, ensuring smooth deployment across all development stages.",
    "Developed high-performance services including Extraction, Bank statement analysis, and Financial statement processing, achieving 90% improvement in speed and performance.",
    "Handled 98% of frontend work, including enhancements and bug fixes.",
    "Architected and implemented scalable, maintainable frontend for complex web applications.",
    "Designed and developed efficient React.js components, ensuring seamless integration with backend services.",
    "Established coding standards, best practices, and code review processes.",
    "Implemented responsive and accessible user interfaces, focusing on performance optimization.",
    "Utilized React.js ecosystem, including hooks, router, and state management solutions.",
  ];

  const sum = [
    "React.js Developer with 2.3 years of experience building web applications from scratch.",
    "Proficient in React concepts and hooks, including useState, useEffect, useReducer, and useContext.",
    "Developed key features such as authentication systems, user dashboards, and billing interfaces.",
    "Experienced with UI component libraries like React Bootstrap, Material-UI, and PrimeReact.",
    "Skilled in state management using Context API and Redux.",
    "Strong command of JavaScript, particularly array methods.",
    "Implemented routing using React Router DOM.",
    "Created scalable and maintainable React applications.",
  ];
  return (
    <Box>
      <Box
        width="100%"
        padding="5px 20px"
        margin="0px 0px 30px 0px"
        className={styles.exp_header}
      >
        <Heading type="h1" color="#000">
          Experience
        </Heading>
        <Paragraph color="#000">
          React.js Developer | {result.years} years {result.months} months
          Specialized in building complex web applications from scratch,
          focusing on scalable frontend architectures and high-performance React
          components.
        </Paragraph>
      </Box>
      <Box padding="10px" margin="15px" outlined>
        <Box padding="10px">
          <Heading type="h3" variant="primary">
            Professional summary
          </Heading>
        </Box>
        <Divider margin="8px 0"/>
        <Box padding="10px 0">
          <UnOrderedList>
            {sum.map((item, index) => (
              <UnOrderedList.Item key={`${index}-${item.slice(0, 3)}`}>
                {item}
              </UnOrderedList.Item>
            ))}
          </UnOrderedList>
        </Box>
      </Box>
      <Box padding="10px" margin="15px" outlined>
        <Box
          padding="10px"
          style={{ display: "flex", justifyContent: "space-between" }}
          className={styles.exp_box}
        >
          <Heading type="h3" variant="primary">
            Software Engineer at Idexcel Pvt Ltd
          </Heading>
          <Heading type="h4" variant="secondary">
            oct 2022- Present.
          </Heading>
        </Box>
        <Divider margin="8px 0"/>
        <Box padding="10px 0">
          <UnOrderedList>
            {exp.map((skill, index) => (
              <UnOrderedList.Item key={`${index}-${skill.slice(0, 3)}`}>
                {skill}
              </UnOrderedList.Item>
            ))}
          </UnOrderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
