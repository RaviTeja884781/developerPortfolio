import React from "react";
import "./Carousel.css";
import { leftArrow, rightArrow } from "../../assets/svgs";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const handlePrevClick = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };
  const handleNextClick = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };
  return (
    <div className="carousel">
      <button className="prev-button" onClick={handlePrevClick}>
        <img src={leftArrow} alt="leftArrow" width="15px" height="15px" />
      </button>
      <img className="carousel-img" src={images[currentImage]} alt="Carousel Image" width="450px" height="450px" />
      <button className="next-button" onClick={handleNextClick}>
        <img src={rightArrow} alt="rightArrow" width="15px" height="15px" />
      </button>
    </div>
  );
};
export default Carousel;
