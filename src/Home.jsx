import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import "./Home.css";
import Homepic from "./hpic1.jpeg";
import Hamid from "./About.jpeg";
const Home = () => {
  return (
    <div className="  home  ">
      <Navigation />
      <div className="container-fluid p-5   h-100 ">
        <div className="row ">
          <div className="col-lg-12  col-md-6 col-sm-6 d-lg-flex d-md-flex d-sm-flex justify-content-start align-items-center p-5">
            <div>
              <span style={{  fontWeight: 900, color: "white" }} className="fs-1 float-lg-start float-md-start float-sm-start">
                Weaving
              </span>
              <div className="d-flex">
              <span  className="words fs-1 ms-2" style={{  fontWeight: 900 }} >stories</span> 
              </div>
              
              <span className=" fs-1" style={{  fontWeight: 900, color: "white" }} >with</span> 
              <h1 style={{  fontWeight: 900, color: "white" }}> <span className="words">
                  Digital <span>Experiences</span>
                </span></h1>
              <p style={{ fontSize: "20px", fontWeight: 900, color: "white" }} className="mt-3">
                Welcome to the Techie side of{" "}
                <span className="words">Hamid Owaisi</span>
              </p>
              <div className="d-flex justify-content-around align-items-center  w-75 p-2 ">
                <div className="btn  px-4 py-2" style={{ background: "linear-gradient(to right, #8e44ad, #e74c3c)", border:"1px solid blue"  }}>
                  Get Started
                </div>
                <div
                  className="btn text-light ms-5 px-4 py-2"
                  style={{ backgroundColor: "#1c0a3d" }}
                >
                  Contact Me
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <div className="w-100 d-flex justify-content-center mb-3" style={{marginTop:"150px"}}>
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
  );
};

export default Home;
