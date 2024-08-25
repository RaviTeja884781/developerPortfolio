import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import { description, images, textList } from "../../data/data";
import { Box, Button, Paragraph, Tooltip } from "react-ui-essentials";
import { useNavigate } from "react-router-dom";
import { LucideIcons } from "react-ui-essentials-icons";
const { Eye } = LucideIcons;
import styles from "./About.module.css";

const About = () => {
  const [visibleItems, setVisibleItems] = useState(2);

  const toggleItemsVisibility = () => {
    setVisibleItems((prevVisibleItems) =>
      prevVisibleItems === 2 ? description.length : 2
    );
  };

  const downloadResume = () => {
    const resumeLink =
      "https://drive.google.com/file/d/11lhpij_d2v6ZP1mW0AZ2gaJaYqmWegOh/view?usp=drive_link";
    window.open(resumeLink, "_blank");
  };

  const navigate = useNavigate();

  const moveToMyResume = () => {
    navigate("/about/myResume");
  };

  return (
    <Box
      width="100%"
      padding="80px 0 0 0"
      className={styles.about_me_container}
    >
      <Box
        width="40%"
        margin="0 20px 0 0"
        className={styles.about_me_carousel_cont}
        rounded
      >
        <Carousel images={images} />
        <Box width="100%" margin="30px 0 0 0" className={styles.about_me_carousel_btn_cont}>
          <Button onClick={downloadResume}>Download Resume</Button>
          <Tooltip text="Click To View" position="top" variant="info">
            <Button onClick={moveToMyResume}>
              <Eye width="22px" height="22px" />
            </Button>
          </Tooltip>
        </Box>
      </Box>
      <Box width="60%" padding="15px" className={styles.about_desc_container}>
        <Paragraph
          fontSize="30px"
          fontWeight="700"
          color="#fff"
          style={{  lineHeight: "30px" }}
          italic
        >
          Hi, I am Ravi Teja Ladi
        </Paragraph>
        <Paragraph
          fontWeight="600"
          color="#fff"
          fontSize="25px"
          style={{  lineHeight: "20px" }}
          className={styles.about_me_desi}
        >
          I am a <TypingAnimation texts={textList} speed={100} />
        </Paragraph>
        <Box className={styles.about_me_desc}>
          {description.slice(0, visibleItems).map((item) => (
            <span key={item.id}>
              <Paragraph color="#ccc">{item.desc}</Paragraph>
            </span>
          ))}
          {description.length > 2 && (
            <Button onClick={toggleItemsVisibility}>
              {visibleItems === 2 ? "Show More" : "Show Less"}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
