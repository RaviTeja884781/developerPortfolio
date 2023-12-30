import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import { description, images, textList, ContactInfo } from "../../data/data";
import "./About.css";

const About = () => {
  const [visibleItems, setVisibleItems] = useState(2);

  const toggleItemsVisibility = () => {
    setVisibleItems((prevVisibleItems) =>
      prevVisibleItems === 2 ? description.length : 2
    );
  };

  return (
    <div className="about-me-container">
      <div className="about-me-carousel">
        <Carousel images={images} />
        <div>
          <p>Contact Info:</p>
          <p>Phone No : {ContactInfo.phno}</p>
          <p>Mail : {ContactInfo.primary_email}</p>
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
            <button onClick={toggleItemsVisibility}>
              {visibleItems === 2 ? "Show More" : "Show Less"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
