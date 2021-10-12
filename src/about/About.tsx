import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <span className="heading">
        <span className="about-me">ABOUT</span>
        <span className="me"> ME</span>
      </span>
      <div className="about-content">
        <div className="about-sub-content">
          I'm a fourth year undergraduate student currently pursuing a bachelor's degree in
          Computer Science and Engineering from ABES Engineering College,
          Ghaziabad. I'm a proactive learner, enthusiastic about Web Design and
          Front-end Development. Currently, I am working with React JS and plan on
          working with complete MERN Stack in my future projects.
        </div>
      </div>
    </div>
  );
};

export default About;
