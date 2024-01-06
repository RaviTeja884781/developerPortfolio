import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import { description, images, textList } from "../../data/data";
import { previewEye } from "../../assets/svgs";
import "./About.css";
import ResumeModel from "../ResumeModel/ResumeModel";

const About = () => {
  const [visibleItems, setVisibleItems] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

  return (
    <div className="about-me-container">
      <div className="about-me-carousel-cont">
        <Carousel images={images} />
        <div className="about-me-carousel-btn-cont">
          <button className="about-me-btn" onClick={downloadResume}>
            Check Resume
          </button>
          <button className="about-me-btn" onClick={openModal}>
            <img src={previewEye} alt="previewEye" width="25px" height="25px" />
          </button>
          {/* {openModal && ( */}
            <ResumeModel isOpen={isModalOpen} onClose={closeModal}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              harum optio quas voluptatum provident accusantium eveniet id,
              ipsam aliquam repudiandae facere corporis assumenda minus
              quibusdam voluptas, alias odit facilis adipisci? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quasi ipsa maxime nulla,
              neque, ipsum, fuga laudantium consequuntur odit temporibus
              explicabo nam ab ex asperiores placeat beatae veniam? Beatae,
              officiis voluptatibus? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi ipsa maxime nulla, neque, ipsum, fuga
              laudantium consequuntur odit temporibus explicabo nam ab ex
              asperiores placeat beatae veniam? Beatae, officiis voluptatibus?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ipsa maxime nulla, neque, ipsum, fuga laudantium consequuntur odit
              temporibus explicabo nam ab ex asperiores placeat beatae veniam?
              Beatae, officiis voluptatibus? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quasi ipsa maxime nulla, neque,
              ipsum, fuga laudantium consequuntur odit temporibus explicabo nam
              ab ex asperiores placeat beatae veniam? Beatae, officiis
              voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quasi ipsa maxime nulla, neque, ipsum, fuga laudantium
              consequuntur odit temporibus explicabo nam ab ex asperiores
              placeat beatae veniam? Beatae, officiis voluptatibus? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quasi ipsa maxime
              nulla, neque, ipsum, fuga laudantium consequuntur odit temporibus
              explicabo nam ab ex asperiores placeat beatae veniam? Beatae,
              officiis voluptatibus? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi ipsa maxime nulla, neque, ipsum, fuga
              laudantium consequuntur odit temporibus explicabo nam ab ex
              asperiores placeat beatae veniam? Beatae, officiis voluptatibus?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ipsa maxime nulla, neque, ipsum, fuga laudantium consequuntur odit
              temporibus explicabo nam ab ex asperiores placeat beatae veniam?
              Beatae, officiis voluptatibus? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quasi ipsa maxime nulla, neque,
              ipsum, fuga laudantium consequuntur odit temporibus explicabo nam
              ab ex asperiores placeat beatae veniam? Beatae, officiis
              voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quasi ipsa maxime nulla, neque, ipsum, fuga laudantium
              consequuntur odit temporibus explicabo nam ab ex asperiores
              placeat beatae veniam? Beatae, officiis voluptatibus? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quasi ipsa maxime
              nulla, neque, ipsum, fuga laudantium consequuntur odit temporibus
              explicabo nam ab ex asperiores placeat beatae veniam? Beatae,
              officiis voluptatibus? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi ipsa maxime nulla, neque, ipsum, fuga
              laudantium consequuntur odit temporibus explicabo nam ab ex
              asperiores placeat beatae veniam? Beatae, officiis voluptatibus?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ipsa maxime nulla, neque, ipsum, fuga laudantium consequuntur odit
              temporibus explicabo nam ab ex asperiores placeat beatae veniam?
              Beatae, officiis voluptatibus? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quasi ipsa maxime nulla, neque,
              ipsum, fuga laudantium consequuntur odit temporibus explicabo nam
              ab ex asperiores placeat beatae veniam? Beatae, officiis
              voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quasi ipsa maxime nulla, neque, ipsum, fuga laudantium
              consequuntur odit temporibus explicabo nam ab ex asperiores
              placeat beatae veniam? Beatae, officiis voluptatibus? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quasi ipsa maxime
              nulla, neque, ipsum, fuga laudantium consequuntur odit temporibus
              explicabo nam ab ex asperiores placeat beatae veniam? Beatae,
              officiis voluptatibus?
            </ResumeModel>
          {/* )} */}
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
