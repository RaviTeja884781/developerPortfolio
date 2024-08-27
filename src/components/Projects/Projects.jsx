import React from "react";
import styles from "./Projects.module.css";
import {
  Box,
  Code,
  Divider,
  Heading,
  Link,
  Paragraph,
  UnOrderedList,
} from "react-ui-essentials";

const projectData = [
  {
    title: "React UI Essentials",
    link: "https://react-ui-essentials.vercel.app/",
    descriptionLink: "https://www.npmjs.com/package/react-ui-essentials",
    descriptionCode: "react-ui-essentials",
    description: [
      "Developed and maintained an open-source React component library",
      "Designed and implemented reusable, customizable UI components to accelerate development processes",
      "Published the library to npm, making it freely available to the global developer community",
      "Regularly updated the library to maintain compatibility with the latest React versions",
      "Gained valuable experience in package management and deployment to npm",
      "Contributed to the React ecosystem by providing a valuable tool for developers worldwide",
    ],
  },
  {
    title: "React UI Essentials Icons",
    link: "https://react-ui-essentials-icons.vercel.app/",
    descriptionLink: "https://www.npmjs.com/package/react-ui-essentials-icons",
    descriptionCode: "react-ui-essentials-icons",
    description: [
      "Developed and published an open-source React icons package available on npm",
      "Offers a diverse collection of customizable icons, enabling developers to easily integrate and use a wide range of icons in their React projects",
    ],
  },
];

const additionalProjects = [
  {
    title: "Border Radius Generator",
    link: "https://rue-border-radius-generator.vercel.app/",
  },
  {
    title: "Flex Box Playground",
    link: "https://rue-flex-box-playground.vercel.app/",
  },
];

const ProjectSection = ({
  title,
  link,
  descriptionLink,
  descriptionCode,
  description,
}) => (
  <Box padding="10px" margin="15px" outlined>
    <Box padding="10px" title="Click To Redirect">
      <Link to={link} target="_blank">
        <Heading type="h3" variant="primary">
          {title}
        </Heading>
      </Link>
    </Box>
    <Divider margin="8px 0" />
    <Box padding="10px 0">
      <UnOrderedList>
        <UnOrderedList.Item>
          <Paragraph>
            {description[0]}
            <Link to={descriptionLink} target="_blank">
              <Code variant="danger" title={descriptionLink}>
                {descriptionCode}
              </Code>
            </Link>
            <br />
          </Paragraph>
        </UnOrderedList.Item>
        {description.slice(1).map((item, index) => (
          <UnOrderedList.Item key={index}>
            <Paragraph>{item}</Paragraph>
          </UnOrderedList.Item>
        ))}
      </UnOrderedList>
    </Box>
  </Box>
);

const Projects = () => {
  return (
    <Box>
      <Box className={styles.pro_header}>
        <Heading type="h1" color="#000">
          Projects
        </Heading>
      </Box>
      <Divider margin="10px" />
      <Box
        className={styles.projectLinks}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
        title="Click To Redirect"
      >
        {additionalProjects.map((project, index) => (
          <Box key={index} padding="10px" margin="15px" outlined>
            <Link to={project.link} target="_blank">
              <Heading type="h4" variant="secondary">
                {project.title}
              </Heading>
            </Link>
          </Box>
        ))}
      </Box>
      <Divider margin="10px" />
      {projectData.map((project, index) => (
        <ProjectSection
          key={index}
          title={project.title}
          link={project.link}
          descriptionLink={project.descriptionLink}
          descriptionCode={project.descriptionCode}
          description={project.description}
        />
      ))}
    </Box>
  );
};

export default Projects;
