import React from "react";
import "./Projects.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Projects = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1580: { items: 4  },
    2200:{items:5}
};
const items = [
  <div className=" card1   d-flex justify-content-center">
      <div className=" relative-card1  text-white   p-3 w-75 h-50">
  <div className="absolute-card1"></div>
  <div className="card-content1  d-flex justify-content-center">
    <h3 className="text-center w-50" style={{ marginTop: "50px" }}>
      CVT Offical Group
    </h3>
    <p className="text-center"></p>
  </div>
  <div className="card-details1 relative-card1  d-flex justify-content-center align-items-center">
    <p >Connected TV advertising, also known as CTV advertising, is advertising that is delivered 
    to viewers through internet-connected television devices such as smart TVs, gaming consoles, streaming devices, and set-top boxes.</p>
  </div>
</div>
  </div>
  ,
  <div className="card1  d-flex justify-content-center">
  <div className=" relative-card2    p-3 w-75 h-50">
  <div className="absolute-card2"></div>
  <div className="card-content2 d-flex justify-content-center">
    <h1 className="text-center" style={{ marginTop: "50px" }}>
     Bolt Asia
    </h1>
    <p className="text-center"></p>
  </div>
  <div className="card-details2 relative-card2 d-flex justify-content-center align-items-center">
    <p style={{ marginTop: "30px" }}>Connected TV advertising, also known as CTV advertising, is advertising that is delivered 
    to viewers through internet-connected television devices such as smart TVs, gaming consoles, streaming devices, and set-top boxes.</p>
  </div>
  </div>
</div>,
 <div className=" card1 d-flex justify-content-center">
    <div className=" relative-card3  text-white    p-3 w-75 h-50">
  <div className="absolute-card3"></div>
  <div className="card-content3 d-flex justify-content-center">
    <h1 className="text-center" style={{ marginTop: "50px" }}>
     Atem World
    </h1>
    <p className="text-center"></p>
  </div>
  <div className="card-details3 relative-card3 d-flex justify-content-center align-items-center">
    <p style={{ marginTop: "30px" }}>Connected TV advertising, also known as CTV advertising, is advertising that is delivered 
    to viewers through internet-connected television devices such as smart TVs, gaming consoles, streaming devices, and set-top boxes.</p>
  </div>
</div>
 </div>
,
<div className=" card1 d-flex justify-content-center">
  <div className=" relative-card4  text-white    p-3 w-75 h-50">
  <div className="absolute-card4"></div>
  <div className="card-content4 d-flex justify-content-center">
    <h1 className="text-center w-75" style={{ marginTop: "50px" }}>
    Plethori South Asia
    </h1>
    <p className="text-center"></p>
  </div>
  <div className="card-details4 relative-card4 d-flex justify-content-center align-items-center">
    <p style={{ marginTop: "30px" }}>Connected TV advertising, also known as CTV advertising, is advertising that is delivered 
    to viewers through internet-connected television devices such as smart TVs, gaming consoles, streaming devices, and set-top boxes.</p>
  </div>
</div>
</div>,
 <div className=" card1 d-flex justify-content-center">
  <div className=" relative-card5  text-white    p-3 w-75 h-50">
  <div className="absolute-card5"></div>
  <div className="card-content5 d-flex justify-content-center">
    <h3 className="text-center w-50" style={{ marginTop: "50px" }}>
    Phantasma Chain

    </h3>
    {/* <p className="text-center">blockchain platform</p> */}
  </div>
  <div className="card-details5 relative-card5 d-flex justify-content-center align-items-center">
    <p style={{ marginTop: "30px" }}>Connected TV advertising, also known as CTV advertising, is advertising that is delivered 
    to viewers through internet-connected television devices such as smart TVs, gaming consoles, streaming devices, and set-top boxes.</p>
  </div>
</div>
 </div>
  ,
 <div className=" card1 d-flex justify-content-center">
  <div className=" relative-card6  text-white    p-3 w-75 h-50">
  <div className="absolute-card6"></div>
  <div className="card-content6 d-flex justify-content-center">
    <h1 className="text-center w-50" style={{ marginTop: "50px" }}>
    Ferrum
    </h1>
    {/* <p className="text-center">blockchain Project</p> */}
  </div>
  <div className="card-details6 relative-card6 d-flex justify-content-center align-items-center">
    <p style={{ marginTop: "30px" }}>Connected TV advertising, also known as CTV advertising, is advertising that is delivered 
    to viewers through internet-connected television devices such as smart TVs, gaming consoles, streaming devices, and set-top boxes.</p>
  </div>
</div>
 </div>
];

  return (
    <div className="container-fluid mt-5 text-white mb-5">
      <div className="row mb-5">
       
        <div className="col-lg-12 ps-5" style={{ marginTop: "80px" }}>
          <h1
            className=" "
            style={{ color: "rgb(255, 255, 255)", fontSize: "50px" }}
          >
            Projects
          </h1>
          <p
            className=""
            style={{ color: "rgb(141, 141, 141)", fontSize: "20px" }}
          >
            Must explain to you how all this mistaken idea pleasure born and give you a complete account.
          </p>
        </div>
        {/* <div className="col-lg-6 imagepro  d-flex justify-content-end ">
          <div className="d-flex justify-content-end align-items-center  pe-5">
          <img
            src="https://cdn.create.vista.com/api/media/medium/471159984/stock-vector-bowling-gold-plated-metalic-icon-logo-vector?token="
            alt=""
            className="projectimg"
          />
          </div>
        
        </div> */}
      </div>
     
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
      
    
     

    </div>
  );
};

export default Projects;
