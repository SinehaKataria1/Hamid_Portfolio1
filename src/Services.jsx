import React, { useState } from "react";
import "./Services.css";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import CelebrationIcon from '@mui/icons-material/Celebration';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CampaignIcon from '@mui/icons-material/Campaign';
import GamepadIcon from '@mui/icons-material/Gamepad';
import HiveIcon from '@mui/icons-material/Hive';
import DuoIcon from '@mui/icons-material/Duo';
import BrushIcon from '@mui/icons-material/Brush';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
const Services = () => {
  const [activeTab1, setActiveTab1] = useState(0);

  const showsDiv = (tabNumber1) => {
    setActiveTab1(tabNumber1);
  };
  return (
    <div className="container-fluid  text-white p-5" style={{backgroundColor:"rgba(5, 8, 22)"}}>
      <div className="row">
        <div className="col-lg-12 text-center ">
          <h1>My Awesome Service</h1>
          <div className="d-flex justify-content-center ">
            <p className="w-50">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid p-5 ">
      <ul className="nav nav-tabs">
      <li className={`nav-item ${activeTab1 === 0 ? 'active' : ''}`}>
        <a className="nav-link" onClick={() => showsDiv(0)}>
          Management
        </a>
      </li>
      <li className={`nav-item ${activeTab1 === 1 ? 'active' : ''}`}>
        <a className="nav-link" onClick={() => showsDiv(1)}>
          Marketing
        </a>
      </li>
      <li className={`nav-item ${activeTab1 === 2 ? 'active' : ''}`}>
        <a className="nav-link" onClick={() => showsDiv(2)}>
          Design
        </a>
      </li>
    </ul>

        <div
          style={{ display: activeTab1 === 0 ? "block" : "none" }}
          className="container-fluid  mt-5"
        >
          <div className=" row   align-items-center p-3">
            <div className="col-lg-4 col-md-6 col-12  ">
              <div className="Managementdiv1">
                <div className="icon">
                  <MiscellaneousServicesIcon style={{fontSize:"50px" }} className="icon1"/>
                </div>
                <div>
                  <h4>Project Management</h4>
                </div>
                <div>
                  <p className="text-center">
                    Explain to you how all this mistaken idea of denouncing
                    pleasure born and give you complete account the system.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12  ">
              <div className="Managementdiv1">
                <div className="icon">
                  <CelebrationIcon style={{fontSize:"50px" }} className="icon1"/>
                </div>
                <div>
                  <h4>Event Management</h4>
                </div>
                <div>
                  <p className="text-center">
                    Explain to you how all this mistaken idea of denouncing
                    pleasure born and give you complete account the system.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 ">
              <div className="Managementdiv1">
                <div className="icon">
                  <Diversity3Icon style={{fontSize:"50px" }} className="icon1"/>
                </div>
                <div>
                  <h4>Community Management</h4>
                </div>
                <div>
                  <p className="text-center">
                    Explain to you how all this mistaken idea of denouncing
                    pleasure born and give you complete account the system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: activeTab1 === 1 ? "block" : "none" }}  className="container-fluid  mt-5">
        <div className=" row   align-items-center p-3">
            <div className="col-lg-4 col-md-6 col-12  ">
              <div className="Managementdiv1">
                <div className="icon">
                  <CampaignIcon style={{fontSize:"50px" }} className="icon1"/>
                </div>
                <div>
                  <h4>Digital Marketing</h4>
                </div>
                <div>
                  <p className="text-center">
                    Explain to you how all this mistaken idea of denouncing
                    pleasure born and give you complete account the system.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12  ">
              <div className="Managementdiv1">
                <div className="icon">
                  <GamepadIcon style={{fontSize:"50px" }} className="icon1"/>
                </div>
                <div>
                  <h4>Market Stragety</h4>
                </div>
                <div>
                  <p className="text-center">
                    Explain to you how all this mistaken idea of denouncing
                    pleasure born and give you complete account the system.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 ">
              <div className="Managementdiv1">
                <div className="icon">
                  <HiveIcon style={{fontSize:"50px" }} className="icon1"/>
                </div>
                <div>
                  <h4>Community Building</h4>
                </div>
                <div>
                  <p className="text-center">
                    Explain to you how all this mistaken idea of denouncing
                    pleasure born and give you complete account the system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: activeTab1 === 2 ? "block" : "none" }}  className="container-fluid  mt-5">
        <div className=" row   align-items-center p-3">
            <div className="col-lg-4 col-md-6 col-12  ">
              <div className="Managementdiv1">
                <div className="icon">
                  <DuoIcon style={{fontSize:"50px" }} className="icon1"/>
                </div>
                <div>
                  <h4>Video Editing </h4>
                </div>
                <div>
                  <p className="text-center">
                    Explain to you how all this mistaken idea of denouncing
                    pleasure born and give you complete account the system.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12  ">
              <div className="Managementdiv1">
                <div className="icon">
                  <BrushIcon style={{fontSize:"50px" }} className="icon1"/>
                </div>
                <div>
                  <h4>Graphic Design</h4>
                </div>
                <div>
                  <p className="text-center">
                    Explain to you how all this mistaken idea of denouncing
                    pleasure born and give you complete account the system.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 ">
              <div className="Managementdiv1">
                <div className="icon">
                  <PhotoCameraFrontIcon style={{fontSize:"50px" }} className="icon1"/>
                </div>
                <div>
                  <h4>Photography</h4>
                </div>
                <div>
                  <p className="text-center">
                    Explain to you how all this mistaken idea of denouncing
                    pleasure born and give you complete account the system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div
          className="row p-5 "
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "-15px",
            marginRight: "-15px",
            backgroundColor: "gray",
          }}
        >
          <div className="col-lg-12 serve  bg-black ">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6  py-5 bg-success col-12  mb-4 ">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/019/787/057/non_2x/business-handshake-on-transparent-background-free-png.png"
                  alt=""
                  width="60"
                />
                <h4>Market stragety</h4>
                <p>
                  {" "}
                  I throw myself down among the tall grass by the stream as I
                  lie close to the earth.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6   py-5 bg-warning  col-12  mb-4">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/project-manager-icon.png"
                  alt=""
                  width="60"
                />
                <h4>Project Management</h4>
                <p>
                  {" "}
                  I throw myself down among the tall grass by the stream as I
                  lie close to the earth.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6   py-5 col-12  mb-4">
                <img
                  src="https://www.clipartmax.com/png/full/57-571977_video-editing-logo-png.png"
                  alt=""
                  width="60"
                />
                <h4>Video Editing</h4>
                <p>
                  {" "}
                  I throw myself down among the tall grass by the stream as I
                  lie close to the earth.
                </p>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6   py-5 bg-danger col-12  mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/69/69075.png"
                  alt=""
                  width="60"
                />
                <h4>Community Management</h4>
                <p>
                  {" "}
                  I throw myself down among the tall grass by the stream as I
                  lie close to the earth.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 bg-warning  py-5 bg-danger col-12  mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/69/69075.png"
                  alt=""
                  width="60"
                />
                <h4>Event Management</h4>
                <p>
                  {" "}
                  I throw myself down among the tall grass by the stream as I
                  lie close to the earth.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6  py-5 bg-danger col-12 mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2589/2589831.png"
                  alt=""
                  width="60"
                />
                <h4>Community Building</h4>
                <p>
                  {" "}
                  I throw myself down among the tall grass by the stream as I
                  lie close to the earth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Services;
