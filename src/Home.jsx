import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import "./Home.css";
import Homepic from "./hpic1.jpeg";
import Hamid from "./About.jpeg";
import { Fade } from 'react-reveal';
import About from './About'
import Projects from './Projects'
import Services from './Services'
import Contact from './Contact'
import Experience from "./Experience"
import Cv from "./Cv.pdf"
const Home = () => {
  return (
    <> 
    <div className="home" >
      <div className="container-fluid p-5   h-100 ">
        <div className="row ">
          
          <div className="col-lg-12  col-md-6 col-sm-6 d-lg-flex d-md-flex d-sm-flex justify-content-start align-items-center p-3">
          <Fade left>
            <div>
              <span style={{  fontWeight: 900, color: "white" }} className="fs-1 float-lg-start float-md-start float-sm-start ms-3">
                Weaving
              </span>
              <div className="d-flex">
              <span  className="words fs-1 ms-3" style={{  fontWeight: 700 }} >stories</span> 
              <span className=" fs-1 ms-3" style={{  fontWeight: 700, color: "white" }} >with</span> 
              </div>
              
             
              <h1 style={{  fontWeight: 700, color: "white" }}> <span className="words ms-3">
                  Digital <span>Experiences</span>
                </span></h1>
              <p style={{ fontSize: "20px", fontWeight: 900, color: "white" }} className="mt-3 ms-3">
                Welcome to the Techie side of{" "}
                <span className="words">Hamid Owaisi</span>
              </p>
              <div className="d-lg-flex justify-content-around align-items-center  w-75 p-2  ">
                <a className="btn text-light px-4 py-2 mt-2 Homebtn" style={{ 
                 border:"1px solid blue"  }} href={Cv}  download={Cv}>
                  
                  Get Started
                </a>
                <a
                  className="btn text-light ms-lg-5 px-4 py-2 mt-2 C-btn"
                 href="#Contact"
                >
                  Contact Me
                </a>
              </div>
            </div>
            </Fade>
          </div>
      
        </div>
        
        <div className="w-100 d-flex justify-content-center mb-3" style={{marginTop:"120px"}}>
          <a href="#about">
            <div className="bol " style={{ cursor: "pointer" }}>
              <div
                className="bol1"
                style={{ transform: "translateY(4.80627px) translateZ(0px)" }}
              ></div>
            </div>
          </a>
        </div>
      </div>
      
    </div>
       <About/>
      <Services/>
      <Experience/>
      <Projects/>
      <Contact/>
    </>
    
  );
};

export default Home;
