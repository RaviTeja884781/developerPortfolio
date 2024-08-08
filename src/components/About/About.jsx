import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import { description, images, textList } from "../../data/data";
import { previewEye } from "../../assets/svgs";
import "./About.css";
import { useNavigate } from "react-router-dom";

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
    <div className="about-me-container">
      <div className="about-me-carousel-cont">
        <Carousel images={images} />
        <div className="about-me-carousel-btn-cont">
          <button className="about-me-btn" onClick={downloadResume}>
            Check Resume
          </button>
          <button className="about-me-btn" onClick={moveToMyResume}>
            <img src={previewEye} alt="previewEye" width="25px" height="25px" />
          </button>
        </div>
      </div>
      <div className="about-me-descs">
        <p className="about-me">
          Hi, I am <br />
          <i>Ravi Teja Ladi</i>
        </p>
        <p className="about-me-desi">
          I am a <TypingAnimation texts={textList} speed={100} />
        </p>
        <div className="about-me-desc">
          {description.slice(0, visibleItems).map((item) => (
            <span key={item.id}>
              <p>{item.desc}</p>
            </span>
          ))}
          {description.length > 2 && (
            <button className="about-me-btn" onClick={toggleItemsVisibility}>
              {visibleItems === 2 ? "Show More" : "Show Less"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
