import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="image" src={require("../assets/cardpicbg.jpg")} />

      <div className="data">
        <p className="name">Ashish Kumar</p>
        <p className="work">Frontend Web Developer</p>
        <div className="icons">
          <a href="https://github.com/AshishKumar64" target="_blank">
            <i id="github" className="fa fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ashish-kumar-b2909619b/" target="_blank">
            <i id="linkedin" className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/i_m_ashish24/" target="_blank">
            <i id="instagram" className="fa fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100011646934403"
            target="_blank"
          >
            <i id="facebook" className="fa fa-facebook-square"></i>
          </a>
        </div>
      </div>
      <a href={require("../assets/resume.pdf")} download="Ashish Kumar Resume"> 
        <button className="resume-button"> Download Resume</button>
      </a>
    </div>
  );
};

export default Sidebar;
