import React from "react";
import styles from "./Carousel.module.css";
import { Box, Button } from "react-ui-essentials";
import { LucideIcons } from "react-ui-essentials-icons";
const { ChevronLeft, ChevronRight } = LucideIcons;

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const handlePrevClick = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };
  const handleNextClick = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };
  return (
    <Box className={styles.carousel}>
      {/* <Button
        variant="light"
        className={styles.prev_button}
        onClick={handlePrevClick}
      >
        <ChevronLeft width="25px" height="25px" />
      </Button> */}
      <img
        className={styles.carousel_img}
        src={images[currentImage]}
        alt="Carousel Image"
        width="450px"
        height="450px"
      />
      {/* <Button
        variant="light"
        className={styles.next_button}
        onClick={handleNextClick}
      >
        <ChevronRight width="25px" height="25px" />
      </Button> */}
    </Box>
  );
};
export default React.memo(Carousel);
