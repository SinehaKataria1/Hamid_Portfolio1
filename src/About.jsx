import React, { useState } from "react";
import "./About.css";
import Hamid from "./About.jpeg";
import { Fade } from 'react-reveal';
import TypingEffect from "./TypingEffect";
const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const showDiv = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const text = `My name is Hamid Owaisi. I am a web designer and developer.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempo incididunt ut labore et dolore magna aliquaorem ipsum dolor sit amet, consectetu
  r adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua
  et dolore magna aliquaorem ipsum dolor sit amet, consectetu
  r adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua`;

  return (
    <div className="container-fluid About text-white" >
        <Fade right>
      <div className="row ">
        <div className="col-lg-6 d-flex justify-content-center align-items-center ">
          <div className="about-s2-img  ms-lg-5 p-lg-5 p-md-4 p-sm-3 ">
            <img
              src={Hamid}
              // src="https://elito-next.netlify.app/images/slider/1.jpg"
              style={{ maxWidth: "100%" }}
              alt=""
              className="img-fluid"
              width="400px"
            />
          </div>
        </div>
        <div className="col-lg-6 p-5 ">
          <h1 className="text-white mb-5 " style={{ fontSize: "65px" }}>
            About Me
          </h1>
          <p className="text-white mt-1 w-100" style={{ fontSize: "20px" }}>
          Welcome to <TypingEffect text={text} delay={5} />
          </p>
          <a className='text-white aboutbtn mt-3' href="#services">More About</a>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default About;
