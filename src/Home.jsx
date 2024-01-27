import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import "./Home.css";
import Homepic from "./hpic1.jpeg"
import Hamid from "./About.jpeg"
const Home = () => {
  return (
    <div className=" h-100 home ">
      <Navigation />
      <div className="container-fluid p-5 h-100 ">
        <div className="row ">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div>
              <h1 style={{ fontSize: "50px", fontWeight: 900, color: "white" }}>
                Weaving
                <span style={{ color: "#a46104" }}>stories</span> with <br />{" "}
                <span style={{ color: "#a46104" }}>
                  Digital <span>Experiences</span>
                </span>
              </h1>
              <p style={{ fontSize: "20px", fontWeight: 900, color: "white" }}>
                Welcome to the Techie side of{" "}
                <span style={{ color: "#a46104" }}>Hamid Owaisi</span>
              </p>
              <div className="d-flex justify-content-evenly w-50 p-4">
                <button className="btn " style={{ backgroundColor: "#a46104" }}>Get Started</button>
                <button className="btn text-light" style={{backgroundColor:"#1c0a3d"}}>Contact Me</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div>
              <img
        // src={Homepic}  
        src="https://elito-next.netlify.app/images/slider/1.jpg"            
        className="img-fluid hamidimg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center">
        <a href="#about">
      <div className="bol " style={{ cursor: 'pointer' }}>
        <div className="bol1" style={{ transform: 'translateY(4.80627px) translateZ(0px)' }}></div>
      </div>
    </a>
        </div>
      </div>
      
     
    </div>
    
  );
};

export default Home;
