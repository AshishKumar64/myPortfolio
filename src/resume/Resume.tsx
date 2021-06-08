import React from "react";
import "./Resume.scss";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-heading">
        <span className="my">MY</span>
        <span className="resume-sub-heading"> RESUME</span>
      </div>
      
      <div className="resume-content">
        <div className="sub-heading first">
          EDUCATION 
        </div>
        <div className="education">
          <div className="education-content">
            <div className="sub-heading second">              
              B.Tech (82.4 %)</div>
            <div>ABES Engineering College, Ghaziabad</div>
            <div>2018-2022</div>
          </div>
          <div className="border"></div>
          <div className="education-content">
            <div className="sub-heading second">
             Intermediate (86.4 %)
            </div>
            <div>Saraswati Bal Mandir Senior Secondary School, Hapur</div>
            <div>2015-2016</div>
          </div>
          <div className="border"></div>
          <div className="education-content">
            <div className="sub-heading second">
              {/* 🔴 */}
              High school (91.1%)</div>
            <div>Saraswati Bal Mandir Senior Secondary School, Hapur</div>
            <div>2013-2014</div>
          </div>
        </div>
        <div className="skills">
          <div className="sub-heading first">
            TECHNICAL SKILLS 
          </div>
          <div className="sub-heading tech">C/C++</div>
          <div className="bar">
            <div className="color zero">
            </div>
            <div className="transparent"></div>
          </div>
          <div className="sub-heading tech">HTML</div>
          <div className="bar">
            <div className="color one">
            </div>
            <div className="transparent"></div>
          </div>
          <div className="sub-heading tech">CSS/SCSS</div>
          <div className="bar">
            <div className="color two">
            </div>
            <div className="transparent"></div>
          </div>
          <div className="sub-heading tech">JAVASCRIPT</div>
          <div className="bar">
            <div className="color three">
            </div>
            {/* <div className="transparent"></div> */}
          </div>
          <div className="sub-heading tech"><div>REACT JS</div> </div>
          <div className="bar">
            <div className="color four">
            </div>
            <div className="transparent"></div>
          </div>
        </div>
        <div className="sub-heading first"> EXPERIENCE</div> 
        <div className="experience">
          <div  className="sub-heading second">
           DevsLane(2019 - present)
          </div>
          <div className="sub-heading third">
           Frontend web developer - Intern
          </div>
          <div>
           {/* &nbsp;  */}
           I have an experience of more than one year in the field of frontend development.
           I have worked on many industrial level live projects during my internship which are based on React js.
          </div>
        </div>    
      </div>
    </div>
  );
};

export default Resume;
