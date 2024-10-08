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
  const [visibleItems, setVisibleItems] = useState(3);

  const toggleItemsVisibility = React.useCallback(() => {
    setVisibleItems((prevVisibleItems) =>
      prevVisibleItems === 3 ? description.length : 3
    );
  }, [visibleItems]);

  const downloadResume = () => {
    const resumeLink =
      "https://drive.google.com/file/d/12Hq0STqjWDHdi1O7-2VmCPSgLoxHYGus/view?usp=drive_link";
    window.open(resumeLink, "_blank");
  };

  const navigate = useNavigate();

  const moveToMyResume = () => {
    navigate("/about/myResume");
  };

  return (
    <Box
      width="100%"
      padding="30px 0 0 0"
      className={styles.about_me_container}
    >
      <Box
        width="40%"
        margin="0 20px 0 0"
        className={styles.about_me_carousel_cont}
        rounded
      >
        <Carousel images={images} />
        <Box
          width="100%"
          margin="30px 0 0 0"
          className={styles.about_me_carousel_btn_cont}
        >
          <Button variant="help" onClick={downloadResume}>
            Download Resume
          </Button>
          <Tooltip text="Click To View" position="top" variant="info">
            <Button variant="help" onClick={moveToMyResume}>
              <Eye width="22px" height="22px" />
            </Button>
          </Tooltip>
        </Box>
      </Box>
      <Box
        width="60%"
        height="500px"
        padding="15px"
        className={styles.about_desc_container}
      >
        <Paragraph
          fontSize="30px"
          fontWeight="700"
          color="#000"
          style={{ lineHeight: "30px" }}
          italic
        >
          Hi, I am Ravi Teja Ladi
        </Paragraph>
        <Paragraph
          fontWeight="600"
          color="#000"
          fontSize="25px"
          style={{ lineHeight: "20px" }}
          className={styles.about_me_desi}
        >
          I am a <TypingAnimation texts={textList} speed={100} />
        </Paragraph>
        <Box className={styles.about_me_desc}>
          {description.slice(0, visibleItems).map((item) => (
            <span key={item.id}>
              <Paragraph color="#000">{item.desc}</Paragraph>
            </span>
          ))}
          {description.length > 3 && (
            <Button variant="help" onClick={toggleItemsVisibility}>
              <Button.Text>
                {visibleItems === 3 ? "Show More" : "Show Less"}
              </Button.Text>
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(About);
