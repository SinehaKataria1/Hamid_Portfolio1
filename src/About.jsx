import React, { useState } from "react";
import "./About.css";
import Hamid from "./About.jpeg";
const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const showDiv = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="container-fluid  mb-5 About text-white">
      <div className="row ">
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="about-s2-img  ms-5 p-lg-5 p-md-4 p-sm-3 ">
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
          <h1 className="text-white mt-5 " style={{ fontSize: "65px" }}>
            About Me
          </h1>
          <p className="text-white mt-1 w-75" style={{ fontSize: "20px" }}>
            My name is Hamid Owaisi. I am a web designer and developer.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempo incididunt ut labore et dolore magna aliquaorem ipsum dolor sit amet, consectetu
            r adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua
          </p>
          <button className='text-white aboutbtn mt-3'>More About</button>
          {/* <ul className="list">
            <li onClick={() => showDiv(0)}>Main Skills</li>
            <li onClick={() => showDiv(1)}>Experience</li>
            <li onClick={() => showDiv(2)}>Education & Certification</li>
          </ul>

          <div style={{ display: activeTab === 0 ? "block" : "none" }}>
            <div className="w-75 p-2 skill1 mb-2">
              <div
                className="d-flex justify-content-between  "
                style={{ width: "280px" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6404/6404259.png"
                  width="50px"
                  className="img"
                />

                <h4> Project Management</h4>
              </div>
            </div>
            <div className="w-75 p-2 skill1 mb-2">
              <div
                className="d-flex justify-content-between "
                style={{ width: "210px" }}
              >
                <img
                  src="https://www.clipartmax.com/png/full/57-571977_video-editing-logo-png.png"
                  width="50px"
                  className="img"
                />

                <h4> Video Editing</h4>
              </div>
            </div>
            <div className=" w-75 p-2 skill1 mb-2">
              <div className="d-flex justify-content-between w-100 ">
                <img
                  src="https://www.freeiconspng.com/thumbs/community-icon/community-icon-33.png"
                  width="50px"
                  className="img"
                />

                <h5>Community Management & Event Management</h5>
              </div>
            </div>
              <button className='text-white aboutbtn mt-3'>More About</button>
          </div>
         
          <div style={{ display: activeTab === 1 ? "block" : "none" }}>
            <div className=" w-75 skill1 mb-2">
              <div
                className="d-flex justify-content-between ps-2 pt-2 "
                style={{ width: "205px" }}
              >
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a802c051-4d68-4ba9-b132-563de8f15b5f/dgdtzzd-85d376ec-a3dd-4515-a3d2-15cb637f5400.png/v1/fill/w_554,h_554/king_julien_png__by_miguelucm_dgdtzzd-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTU0IiwicGF0aCI6IlwvZlwvYTgwMmMwNTEtNGQ2OC00YmE5LWIxMzItNTYzZGU4ZjE1YjVmXC9kZ2R0enpkLTg1ZDM3NmVjLWEzZGQtNDUxNS1hM2QyLTE1Y2I2MzdmNTQwMC5wbmciLCJ3aWR0aCI6Ijw9NTU0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pfWT2vRGkl497n-Di49np0KRiWzGjppxrgiCHGFZsl4"
                  width="60"
                  className="img"
                />
                <span style={{ fontSize: "25px" }}>King Julien</span>
              </div>
              <div className="d-flex justify-content-around w-100 ms-4 ">
                <span>Ambassador</span>
                <p>September 2023 - Present</p>
              </div>
            </div>

            <div className=" w-75 skill1 mb-2">
              <div
                className="d-flex justify-content-between ps-2 pt-2"
                style={{ width: "150px" }}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/018/930/474/original/reddit-logo-reddit-icon-transparent-free-png.png"
                  width="60"
                  className="img"
                />
                <span style={{ fontSize: "25px" }}>Redot</span>
              </div>
              <div className="d-flex justify-content-around w-100 ms-4 ">
                <span>Ambassador</span>
                <p>September 2023 - Present</p>
              </div>
            </div>
            <div className=" w-75 skill1 mb-2">
              <div
                className="d-flex justify-content-between ps-2 pt-2"
                style={{ width: "150px" }}
              >
                <img
                  src="https://static.coinpaprika.com/exchanges/lbank/logo.png?rev=10659857"
                  className="img"
                  width="55"
                />
                <span style={{ fontSize: "25px" }}>LBank</span>
              </div>
              <div className="d-flex justify-content-around w-100 ms-4 ">
                <span>Ambassador</span>
                <p>September 2023 - Present</p>
              </div>
            </div>
          </div>
          <div style={{ display: activeTab === 2 ? "block" : "none" }}>
            <div className="w-75 skill1 mb-2">
              <div className="d-flex justify-content-between pt-2 px-2">
                <div className="d-flex justify-content-between">
                  <img src="https://nimradev.netlify.app/image/education/logo-2.png" className="img me-2"  width="50"/>
                <h4>Bachelor of Physics </h4>
                </div>
                
                <h6>4years</h6>
              </div>
              <div className="d-flex justify-content-between pt-2  ms-4 me-1">
                <p className="ms-5">KFUEIT</p> <p>2017-2021</p>
              </div>
            </div>
            <div className="w-75 skill1 mb-2">
              <div className="d-flex justify-content-between pt-2 px-2">
                <div className="d-flex justify-content-between">
                  <img src="https://nimradev.netlify.app/image/education/logo-2.png" className="img me-2"  width="50"/>
                <h4>Bachelor of Physics </h4>
                </div>
                
                <h6>4years</h6>
              </div>
              <div className="d-flex justify-content-between pt-2  ms-4 me-1">
                <p className="ms-5">KFUEIT</p> <p>2017-2021</p>
              </div>
            </div>
            <div className="w-75 skill1 mb-2">
              <div className="d-flex justify-content-between pt-2 px-2">
                <div className="d-flex justify-content-between">
                  <img src="https://nimradev.netlify.app/image/education/logo-2.png" className="img me-2"  width="50"/>
                <h4>Bachelor of Physics </h4>
                </div>
                
                <h6>4years</h6>
              </div>
              <div className="d-flex justify-content-between pt-2  ms-4 me-1">
                <p className="ms-5">KFUEIT</p> <p>2017-2021</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
